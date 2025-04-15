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

export type ElementType = TextElement | SquareElement;
