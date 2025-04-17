interface BaseElement {
  type: string;
  color: string;
}

export interface TextElement extends BaseElement {
  text: string;
  x: number;
  y: number;
  size: number;
}

export interface SquareElement extends BaseElement {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface EllipseElement extends BaseElement {
  x: number;
  y: number;
  radiusX: number;
  radiusY: number;
}

export interface LineElement extends BaseElement {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

export interface ArrowElement extends LineElement {}

export type ElementType =
  | TextElement
  | SquareElement
  | EllipseElement
  | LineElement
  | ArrowElement;
