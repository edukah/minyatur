// Type definitions for Minyatur
// Lightweight image slider with zoom, fullscreen, and thumbnails

export default Minyatur;

interface MinyaturConfig {
  target: string | HTMLElement;
  aspectRatio?: string;
  maxWidth?: string | null;
  maxHeight?: string | null;
  contentWidthLimit?: string;
  loop?: boolean;
  startIndex?: number;
  styleAutoload?: boolean;
  languageCode?: string; // 'auto' detects from <html lang>, falls back to 'en'
  onError?: (error: unknown, context: Record<string, unknown>) => void;
  module?: string[];
  thumbnail?: {
    type?: 'dot' | 'slider' | 'basic';
    id?: string | null;
  };
  zoom?: {
    expandedZoom?: boolean;
  };
}

interface MinyaturInstance {
  next(options?: { behavior?: ScrollBehavior }): void;
  prev(options?: { behavior?: ScrollBehavior }): void;
  insert(index: number, options?: { behavior?: ScrollBehavior }): void;
  add(element: HTMLElement, index?: number): Promise<void>;
  remove(index?: number): void;
  destroy(): void;
  enable(): void;
  disable(): void;
}

declare class Minyatur {
  constructor(config: MinyaturConfig);

  static SUPPORTED_TYPES: string[];
  static getInstance(element: Element): MinyaturInstance | undefined;
  static help(): void;

  next(options?: { behavior?: ScrollBehavior }): void;
  prev(options?: { behavior?: ScrollBehavior }): void;
  insert(index: number, options?: { behavior?: ScrollBehavior }): void;
  add(element: HTMLElement, index?: number): Promise<void>;
  remove(index?: number): void;
  destroy(): void;
  enable(): void;
  disable(): void;
}
