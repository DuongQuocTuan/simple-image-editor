export interface TextElement {
  type: 'text';
  text: string;
  color: string;
  x: number;
  y: number;
  size: number;
}

export interface SquareElement {
  type: 'square';
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
}

export interface EllipseElement {
  type: 'ellipse';
  x: number;
  y: number;
  radiusX: number;
  radiusY: number;
  color: string;
}

export interface LineElement {
  type: 'line';
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
}

export interface ArrowElement {
  type: 'arrow';
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  color: string;
}

export type ElementType =
  | TextElement
  | SquareElement
  | EllipseElement
  | LineElement
  | ArrowElement;
