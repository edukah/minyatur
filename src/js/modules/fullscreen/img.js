import Module from '../../core/module.js';

class Img extends Module {
  transitionDuration = 500;

  constructor (sliderInstance, mainWrapper) {
    super(sliderInstance, 'fullscreen');

    this.mainWrapper = mainWrapper;
  }

  set imageElemWidth (imageWidthWithoutPx) {
    if(!imageWidthWithoutPx) {
      this.imageElem.style.maxWidth = '100vw';
      this.imageElem.style.width = null;
      this.imageElem.style.minWidth = null;

      return;
    }

    this.imageElem.style.width = imageWidthWithoutPx + 'px';
    this.imageElem.style.minWidth = imageWidthWithoutPx + 'px';
    this.imageElem.style.maxWidth = null;
  }

  get imageElemWidth () {
    return this.imageElem.getBoundingClientRect().width;
  }

  animateToWidth (targetWidth, event, duration = 300) {
    const startWidth = this.imageElemWidth;
    const startTime = (typeof performance !== 'undefined' && window.performance.now) ? window.performance.now() : Date.now();
    this._preventPointerMove = true;

    const animate = (nowRaw) => {
      const now = (typeof performance !== 'undefined' && window.performance.now) ? nowRaw : Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const currentWidth = startWidth + (targetWidth - startWidth) * eased;
      this.imageElemWidth = currentWidth;

      const scrollTarget = event ? this.estimatedScrollPosition(event) : { x: 0, y: 0 };

      if(scrollTarget.x > 10) {
        this.imageDiv.scrollLeft = scrollTarget.x;
      }  

      console.log(scrollTarget.y);
      if(scrollTarget.y > 10) {
        this.imageDiv.scrollTop = scrollTarget.y;
      }

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      } else {
        this.imageElemWidth = targetWidth;
        this._preventPointerMove = false;

        this.imageDiv.scrollLeft = scrollTarget.x;
        this.imageDiv.scrollTop = scrollTarget.y;
      }
    };

    window.requestAnimationFrame(animate);
  }

  estimatedScrollPosition (event) {
    // console.log('estimatedScrollPosition');
    const clientX = event?.clientX ?? event?.touches?.[0]?.clientX ?? 0;
    const clientY = event?.clientY ?? event?.touches?.[0]?.clientY ?? 0;

    // https://codepen.io/pseudonynnous/pen/poMKRag
    const containerRect = this.imageDiv.getBoundingClientRect();
    const imageRect = this.imageElem.getBoundingClientRect();

    // X Axis
    const imageDivRatioX = (imageRect.width - containerRect.width) / imageRect.width;

    let posX = 0;
    if (imageDivRatioX > 0) {
      const clientXPositionRatioX = (clientX - containerRect.x) / this.imageDiv.clientWidth;
      const scrollableDistX = this.imageDiv.scrollWidth - this.imageDiv.clientWidth;

      const padding = Math.sin(clientXPositionRatioX - 0.5) * 2 * (this.imageDiv.clientWidth * 0.3);
      // padding = 0;

      posX = Math.max(0, clientXPositionRatioX * scrollableDistX + padding);

      // We want the picture to come to an end before it gets close to the borders.
    }

    // Y Axis
    const imageDivRatioY = (imageRect.height - containerRect.height) / imageRect.height;

    let posY = 0;
    if (imageDivRatioY > 0) {
      const clientYPositionRatioY = (clientY - containerRect.y) / this.imageDiv.clientHeight;
      const scrollableDistY = this.imageDiv.scrollHeight - this.imageDiv.clientHeight;

      const padding = (Math.sin(clientYPositionRatioY - 0.5) * 2) * (this.imageDiv.clientHeight * 0.3);
      // padding = 0;

      posY = Math.max(0, clientYPositionRatioY * scrollableDistY + padding);

      // We want the picture to come to an end before it gets close to the borders.
    }

    return { x: posX, y: posY };
  }

  init () {
    this.imageWrapper = document.createElement('div');
    this.imageWrapper.classList.add('minyatur-fullscreen_image__wrapper');

    this.imageContainer = document.createElement('div');
    this.imageContainer.classList.add('minyatur-fullscreen_image__container');
    this.imageWrapper.appendChild(this.imageContainer);

    this.imageDiv = document.createElement('div');
    this.imageDiv.classList.add('minyatur-fullscreen_image__item');
    this.imageContainer.appendChild(this.imageDiv);

    this.imageElem = document.createElement('img');
    this.imageElem.classList.add('minyatur-fullscreen_image');
    this.imageElem.style.transform = null;
    this.imageDiv.appendChild(this.imageElem);

    this.imageInit();

    // Mouse event handler
    this._pointerDownHandler = this.pointerClickHandler.bind(this);
    this.imageElem.addEventListener('pointerdown', this._pointerDownHandler);
    this._pointerMoveHandler = this.pointerMoveHandler.bind(this);
    this.imageElem.addEventListener('pointermove', this._pointerMoveHandler);

    // Touch event handler
    this._wheelZoom = this.wheelZoom.bind(this);
    this.imageDiv.addEventListener('wheel', this._wheelZoom, { passive: false });

    this._handlePinchStart = this.handlePinchStart.bind(this);
    this.imageDiv.addEventListener('touchstart', this._handlePinchStart, { passive: true });
    this._imagePinchMove = this.imagePinchMove.bind(this);
    this.imageDiv.addEventListener('touchmove', this._imagePinchMove, { passive: true });
    this._handlePinchEnd = this.handlePinchEnd.bind(this);
    this.imageDiv.addEventListener('touchend', this._handlePinchEnd, { passive: true });

    this._doubleTapHandler = this.doubleTapHandler.bind(this);
    this.imageElem.addEventListener('touchstart', this._doubleTapHandler, { passive: true });

    // add to parent
    this.mainWrapper.appendChild(this.imageWrapper);
  }

  show () {
    if (!this.imageWrapper) {
      this.init();
    } else {
      this.imageInit();
    }

    this.zoomOut();

    this.imageWrapper.classList.remove('hidden');
  }

  hide () {
    this.imageWrapper.classList.add('hidden');

    this.zoomOut();
  }

  imageInit () {
    const activeSliderItem = this.sliderInstance.boardList.children[this.sliderInstance.activeIndex].firstElementChild;

    this.imageElem.src = activeSliderItem.src;
    this.imageElem.setAttribute('data-zoom-max-scale', '2');

    this.zoomOut();
  }

  getZoomMaxScale () {
    return parseFloat(this.imageElem.getAttribute('data-zoom-max-scale') || 2);
  }

  getZoomMaxWidth () {
    const imageWidth = this.imageElem.naturalWidth || this.imageElem.width;

    return imageWidth * this.getZoomMaxScale();
  }

  zoomIn (targetWidthWithoutPx, event = null) {
    if(event) {
      this.animateToWidth(targetWidthWithoutPx, event);
    } else {
      this.imageElemWidth = targetWidthWithoutPx;
    }

    this.imageElem.classList.remove('minyatur-fullscreen_image__zoom--out');
    this.imageElem.classList.add('minyatur-fullscreen_image__zoom--in');
  }

  zoomOut () {
    this.imageElemWidth = null;

    this.imageElem.classList.remove('minyatur-fullscreen_image__zoom--in');
    this.imageElem.classList.add('minyatur-fullscreen_image__zoom--out');
  }

  pointerClickHandler (event) {
    if (event.pointerType !== 'mouse') {
      return;
    }

    if (this.imageElem.classList.contains('minyatur-fullscreen_image__zoom--in')) {
      this.zoomOut();

      return;
    }

    this.zoomIn(this.getZoomMaxWidth(), event);

    /* this.zoomIn(this.getZoomMaxWidth());

    const pos = this.estimatedScrollPosition(event);
    const scrollOptions = {
      top: pos.y,
      left: pos.x,
      behavior: 'instant'

    };
    this.imageDiv.scrollTo(scrollOptions); */
  }

  pointerMoveHandler (event) {
    if (event.pointerType !== 'mouse') {
      return;
    }

    if (!this.imageElem.classList.contains('minyatur-fullscreen_image__zoom--in')) {
      return;
    }

    this.imageElem.style.transitionDuration = null;
    this.imageElem.style.transitionTimingFunction = null;

    const pos = this.estimatedScrollPosition(event);

    const scrollOptions = {
      top: pos.y,
      left: pos.x,
      behavior: 'instant'
    };

    this.imageDiv.scrollTo(scrollOptions);
  }

  wheelZoom (event) {
    event.preventDefault();

    const zoomStep = 100; // istersen arttır/azalt
    const direction = Math.sign(event.deltaY); // -1: zoom in, +1: zoom out
    const newWidth = this.imageElemWidth + (zoomStep * -direction);

    // zoom sınırları
    const minWidth = Math.min(window.innerWidth, this.imageElem.naturalWidth);
    const maxWidth = this.getZoomMaxWidth();

    if (newWidth <= minWidth) {
      this.zoomOut();
      
      return;
    }

    if (newWidth >= maxWidth) {
      this.imageElemWidth = this.getZoomMaxWidth();

      return;
    }

    // targetScrollPoisiton
    const scrollOldHeight = this.imageDiv.scrollHeight;
    const scrollOldWidth = this.imageDiv.scrollWidth;

    this.zoomIn(newWidth);

    // scroll pozisyonunu korumak için
    const scrollDeltaY = this.imageDiv.scrollHeight - scrollOldHeight;
    const scrollDeltaX = this.imageDiv.scrollWidth - scrollOldWidth;

    const imageRect = this.imageElem.getBoundingClientRect();

    const touchPositionRatioX = (event.clientX - imageRect.x) / imageRect.width;
    const touchPositionRatioY = (event.clientY - imageRect.y) / imageRect.height;

    const scrollOptions = {
      top: scrollDeltaY * touchPositionRatioY,
      left: scrollDeltaX * touchPositionRatioX,
      behavior: 'instant'
    };

    this.imageDiv.scrollBy(scrollOptions);
  }

  handlePinchStart (event) {
    if (!event.touches || event.touches.length < 2) {
      return;
    }

    if (!this._touch) {
      this._touch = {};
    }

    // get rough estimate of distance between two fingers
    this._touch.startHypotMultiDim = Math.hypot(
      event.touches[0].pageX - event.touches[1].pageX,
      event.touches[0].pageY - event.touches[1].pageY
    );

    this._touch.midPointX = [...event.touches].reduce((sum, t) => sum + t.pageX, 0) / event.touches.length;
    this._touch.midPointY = [...event.touches].reduce((sum, t) => sum + t.pageY, 0) / event.touches.length;
  }

  imagePinchMove (event) {
    if (!event.touches || event.touches.length < 2) return;

    // Store only the most recent touch event
    this._pendingPinchEvent = event;

    // Skip if there's already a scheduled frame
    if (this._rafId) return;

    this._rafId = window.requestAnimationFrame(() => {
      this._rafId = null;

      const evt = this._pendingPinchEvent;
      this._pendingPinchEvent = null;

      // Core logic is handled here
      this._handlePinchMove(evt); 
    });
  }


  _handlePinchMove (event) {
    if (!event.touches || event.touches.length < 2) {
      return;
    }

    if (!this._touch) {
      this.handlePinchStart(event);

      return;
    }

    // get rough estimate of distance between two fingers
    const touchDeltaHypotMultiDim = Math.hypot(
      event.touches[0].pageX - event.touches[1].pageX,
      event.touches[0].pageY - event.touches[1].pageY
    );
    const widthStep = (touchDeltaHypotMultiDim - this._touch.startHypotMultiDim) * 2;
    // Update value for next event
    this._touch.startHypotMultiDim = touchDeltaHypotMultiDim;

    const currentWidth = this.imageElem.getBoundingClientRect().width;
    const newImageWidth = currentWidth + widthStep;

    // zoom sınırları
    const minWidth = Math.min(window.innerWidth, this.imageElem.naturalWidth);
    const maxWidth = this.getZoomMaxWidth();

    if (newImageWidth <= minWidth) {
      this._touch = null;

      this.zoomOut();
      this.handlePinchStart(event);

      return;
    }

    // maxwidth check
    if (newImageWidth >= maxWidth) {
      return;
    }

    const scrollOldHeight = this.imageElem.height;
    const scrollOldWidth = this.imageElem.width;

    this.zoomIn(newImageWidth);

    const scrollDeltaY = this.imageElem.height - scrollOldHeight;
    const scrollDeltaX = this.imageElem.width - scrollOldWidth;

    // scroll
    const imageRect = this.imageElem.getBoundingClientRect();

    // change the scroll according to the position of the midpoint when zooming. the effect of sliding fingers is minimal.
    let touchMidPointX = 0;
    for (let i = 0; i < event.touches.length; i++) {
      touchMidPointX += event.touches[i].pageX / event.touches.length;
    }

    let touchMidPointY = 0;
    for (let i = 0; i < event.touches.length; i++) {
      touchMidPointY += event.touches[i].pageY / event.touches.length;
    }

    const touchPositionRatioX = (touchMidPointX - imageRect.x) / imageRect.width;
    const touchPositionRatioY = (touchMidPointY - imageRect.y) / imageRect.height;

    // change the scroll along with changing the midpoint. It also adds the finger scrolling effect.
    const touchMidPointDeltaX = (touchMidPointX - this._touch.midPointX);
    const touchMidPointDeltaY = (touchMidPointY - this._touch.midPointY);

    // update midpoint value for next event
    this._touch.midPointX = touchMidPointX;
    this._touch.midPointY = touchMidPointY;

    // set scroll
    const scrollOptions = {
      top: scrollDeltaY * touchPositionRatioY - touchMidPointDeltaY,
      left: scrollDeltaX * touchPositionRatioX - touchMidPointDeltaX,
      behavior: 'instant'
    };

    this.imageDiv.scrollBy(scrollOptions);
  }

  handlePinchEnd () {
    this._touch = null;

    if (this._rafId) {
      window.cancelAnimationFrame(this._rafId);
      this._rafId = null;
    }

    this._pendingPinchEvent = null;
  }

  doubleTapHandler (event) {
    if (!event.touches || event.touches.length > 1) {
      return;
    }

    if (!this.tapped) {
      this.tapped = {
        x: event.pageX,
        y: event.pageY
      };

      this.tapTimeoutId = window.setTimeout(() => {
        this.tapped = null;
      }, 300); 

      return;
    }

    const deltaX = event.pageX - this.tapped.x;
    const deltaY = event.pageY - this.tapped.y;

    // If the distance between two rotations is too large, return early
    if (Math.hypot(deltaX, deltaY) > 25) {
      return;
    }

    if (this.imageElem.classList.contains('minyatur-fullscreen_image__zoom--in')) {
      this.zoomOut();

      return;
    }

    this.zoomIn(this.getZoomMaxWidth(), event);

    /* this.zoomIn(this.getZoomMaxWidth());

    const pos = this.estimatedScrollPosition(event);
    const scrollOptions = {
      top: pos.y,
      left: pos.x,
      behavior: 'instant'

    };
    this.imageDiv.scrollTo(scrollOptions); */
  }
}

export default Img;
