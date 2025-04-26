// aspect-ratio-manager.js

export default class RatioSizer {
  constructor (sliderInstance) {
    this.sliderInstance = sliderInstance;

    this.parseAspectRatioDsl();
  }

  /**
 * Parses a compact aspect ratio DSL string into a responsive rules object.
 * 
 * Supports:
 *   - Single ratio: "16:9"
 *   - Min width only: "800<16:9"
 *   - Max width only: "16:9<1200"
 *   - Range: "800<16:9<1200"
 *   - Multiple segments via comma: "1:1<800,800<16:9<1200,1200<4:1"
 * 
 * Auto-fixes unsupported operators (>=, <=, >) into <, with warning.
 * Invalid or malformed segments are skipped with detailed logs.
 * 
 */
  parseAspectRatioDsl () {
    const rules = {};
    const segments = this.sliderInstance.config.get('aspectRatio').split(',').map(s => s.trim());

    const parseRatio = (str) => {
      const [w, h] = str.split(':').map(Number);
      if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) return null;
      
      return w / h;
    };

    let lastPureRatio = null;

    for (const originalSeg of segments) {
      if (!originalSeg) continue;

      let seg = originalSeg;

      // Normalize invalid operators to '<'
      const badOps = ['>=', '<=', '>'];
      for (const op of badOps) {
        if (seg.includes(op)) {
          console.warn(`[Minyatur] DSL operator "${op}" detected in "${originalSeg}". Replaced with "<".`);
          seg = seg.replaceAll(op, '<');
        }
      }

      // Media range: 800<16:9<1200
      const fullMatch = seg.match(/^(\d+)<(\d+:\d+)<(\d+)$/);
      if (fullMatch) {
        const min = Number(fullMatch[1]);
        const ratioStr = fullMatch[2];
        const max = Number(fullMatch[3]);

        if (min >= max) {
          console.warn(`[Minyatur] Invalid range in segment "${originalSeg}": ${min} >= ${max}. Skipped.`);
          continue;
        }

        const ratio = parseRatio(ratioStr);
        if (!ratio) continue;

        const media = `(min-width: ${min}px) and (max-width: ${max - 1}px)`;
        rules[media] = ratio;
        continue;
      }

      // Max only: 16:9<800
      const maxOnly = seg.match(/^(\d+:\d+)<(\d+)$/);
      if (maxOnly) {
        const ratio = parseRatio(maxOnly[1]); // 🔧 fix burada
        const max = Number(maxOnly[2]);
        if (!ratio) continue;

        const media = `(max-width: ${max - 1}px)`;
        rules[media] = ratio;
        continue;
      }

      // Min only: 800<16:9
      const minOnly = seg.match(/^(\d+)<(\d+:\d+)$/);
      if (minOnly) {
        const min = Number(minOnly[1]);
        const ratio = parseRatio(minOnly[2]);
        if (!ratio) continue;

        const media = `(min-width: ${min}px)`;
        rules[media] = ratio;
        continue;
      }

      // Pure ratio (e.g. 16:9) → candidate for fixed
      if (/^\d+:\d+$/.test(seg)) {
        const ratio = parseRatio(seg);
        if (!ratio) continue;

        lastPureRatio = ratio;
        continue;
      }

      console.warn(`[Minyatur] Skipping unrecognized DSL segment: "${originalSeg}".`);
    }

    // Fixed always required: use last pure ratio or fallback to 1
    if (lastPureRatio != null) {
      rules.fixed = lastPureRatio;
    } else {
      console.warn('[Minyatur] No fixed ratio defined in DSL. Defaulting to 1:1 aspect ratio.');
      rules.fixed = 1;
    }

    this.sliderInstance.config.set('aspectRatioRules', rules);
  }

  // Resolves the applicable value from a media rule map based on current viewport.
  resolveResponsiveRule () {
    const rules = this.sliderInstance.config.get('aspectRatioRules');

    if (typeof rules !== 'object' || rules === null) return 1;

    for (const mediaQuery in rules) {
      if (mediaQuery === 'fixed') continue;
      if (window.matchMedia(mediaQuery).matches) {
        return rules[mediaQuery];
      }
    }

    return rules.fixed;
  }

  getComputedPixelValue (value) {
    if (!value || typeof value !== 'string') return NaN;

    const hasCssUnit = /[a-z%]+$/i.test(value.trim());
    if (!hasCssUnit) return parseInt(value);

    const contextElement = /(%|em)$/i.test(value.trim()) ? this.sliderInstance.boardWrapper : document.body;

    const el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.visibility = 'hidden';
    el.style.height = value;
    el.style.pointerEvents = 'none';
    el.style.zIndex = '-9999';

    contextElement.appendChild(el);
    const px = parseFloat(window.getComputedStyle(el).height);
    contextElement.removeChild(el);

    return px;
  }

  calculatePaddingTop () {
    const aspectRatio = this.resolveResponsiveRule();

    const ratioPercent = [1, 1 / aspectRatio];

    const containerWidth = this.sliderInstance.boardWrapper.offsetWidth;
    const calculatedHeight = (containerWidth / ratioPercent[0]) * ratioPercent[1];

    const rawMaxHeight = this.sliderInstance.config.get('maxHeight');
    const maxHeightPx = this.getComputedPixelValue(rawMaxHeight);

    const useMax = rawMaxHeight && Number.isFinite(maxHeightPx) && calculatedHeight > maxHeightPx;

    return useMax ? rawMaxHeight : `${100 / (ratioPercent[0] / ratioPercent[1])}%`;
  }
}
