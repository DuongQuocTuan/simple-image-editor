import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DRAW_MODE } from '@features/image-editor/constants/draw-mode.constant';
import { FONT_SETTING } from '@features/image-editor/constants/font-setting.constant';
import { INTERACTION_MODE } from '@features/image-editor/constants/interaction-mode.constant';
import { TEXT_COLOR } from '@features/image-editor/constants/text-color.constant';
import { TEXT_SYMBOL } from '@features/image-editor/constants/text-symbol.constant';
import {
  Position,
  SelectedText,
} from '@features/image-editor/models/editor-state.model';
import {
  ElementType,
  SquareElement,
} from '@features/image-editor/models/element.model';
import { SaveCancelComponent } from '@shared/components/save-cancel/save-cancel.component';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DialogModule } from 'primeng/dialog';
import { FileUploadHandlerEvent, FileUploadModule } from 'primeng/fileupload';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-simple-image-editor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    FileUploadModule,
    ColorPickerModule,
    InputNumberModule,
    DialogModule,
    InputTextModule,
    SaveCancelComponent,
    AutoFocusModule,
    TooltipModule,
  ],
  templateUrl: './simple-image-editor.component.html',
  styleUrls: ['./simple-image-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleImageEditorComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private readonly activePointers: Set<number> = new Set<number>(); // Track active touch pointers for pointer events
  private readonly deletionThreshold = 100; // Pixels
  private context: CanvasRenderingContext2D | null = null;
  private image: HTMLImageElement | null = null;
  private selectedText: SelectedText | null = null;
  private clickPosition: Position | null = null;
  private elements: ElementType[] = [];
  private history: ElementType[][] = [[]];
  private historyIndex: number = 0;
  private arrowStartPosition: { x: number; y: number } | null = null;
  private squareStartPosition: { x: number; y: number } | null = null;
  private ellipseStartPosition: { x: number; y: number } | null = null;
  private lineStartPosition: { x: number; y: number } | null = null;
  private isColorPickerOpen = false;
  private wasSquareModeBeforeColorPicker = false;
  private wasEllipseModeBeforeColorPicker = false;
  private wasLineModeBeforeColorPicker = false;
  private wasArrowModeBeforeColorPicker = false;

  readonly textColorConst = TEXT_COLOR;
  readonly textSymbolConst = TEXT_SYMBOL;
  readonly fontSettingConst = FONT_SETTING;
  readonly drawModeConst = DRAW_MODE;
  readonly interactionModeConst = INTERACTION_MODE;
  isMobile = false;
  currentMode: string | null = null;
  originalFilename = '';
  selectedColor: string = TEXT_COLOR.DEFAULT;
  fontSize = FONT_SETTING.FONT_SIZE;
  showTextDialog = false;
  customTextInput = '';
  interactionMode: string = INTERACTION_MODE.DRAW;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }

  ngAfterViewInit(): void {
    this.context = this.canvasRef.nativeElement.getContext('2d');
  }

  updateFontSize(): void {
    if (this.selectedText) {
      this.selectedText.size = this.fontSize;
      // Font size change doesn't need history update, just redraw
      // this.redrawCanvas(); // Redraw might not be needed if no text is selected or placed
    }
  }

  onFileSelected(event: FileUploadHandlerEvent): void {
    const file = event.files[0];
    if (!file) return;

    const reader = new FileReader();
    this.originalFilename = file.name;
    // Clear unified elements array
    this.elements = [];
    // Reset history with initial empty state
    this.history = [[]];
    this.historyIndex = 0;
    reader.onload = (e) => {
      this.image = new Image();
      this.image.onload = () => this.drawImage();
      this.image.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  selectText(symbol: string, color: string): void {
    this.selectedColor = color;
    this.selectedText = { symbol, color, size: this.fontSize };
    this.currentMode =
      symbol === this.textSymbolConst.CHECK ? DRAW_MODE.CHECK : DRAW_MODE.X;
  }

  exportImage(): void {
    if (!this.image) return;

    const canvas = this.canvasRef.nativeElement;
    const link = document.createElement('a');
    const [name, ext] = this.originalFilename.split('.');
    const fileName = `${name}_edited.${ext || 'png'}`;

    link.download = fileName;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  onCanvasClick(event: MouseEvent): void {
    if (this.currentMode === DRAW_MODE.FREE_TEXT) {
      const canvas = this.canvasRef.nativeElement;
      const rect = canvas.getBoundingClientRect();
      this.clickPosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
      this.showTextDialog = true;
    } else if (this.currentMode === DRAW_MODE.DELETE) {
      // Use findNearestElement
      const clickedItem = this.findNearestElement(event);
      if (clickedItem) {
        // Filter the elements array
        this.elements = this.elements.filter((el) => el !== clickedItem);
        this.saveToHistory();
        this.redrawCanvas();
      }
      return;
    } else if (this.selectedText && this.context) {
      const canvas = this.canvasRef.nativeElement;
      const rect = canvas.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;

      this.context.font = `${this.selectedText.size}${FONT_SETTING.FONT_UNIT} ${FONT_SETTING.FONT_FAMILY}`;
      const metrics = this.context.measureText(this.selectedText.symbol);
      x -= metrics.width / 2;
      y += 10; // Adjust vertical position slightly

      // Push TextElement to elements array
      this.elements.push({
        type: 'text',
        text: this.selectedText.symbol,
        color: this.selectedText.color,
        x,
        y,
        size: this.selectedText.size,
      });
      this.saveToHistory();
      this.redrawCanvas();
    }
  }

  undo(): void {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      // Restore state from history to elements array
      this.elements = [...this.history[this.historyIndex]];
      this.redrawCanvas();
    }
  }

  redo(): void {
    if (this.historyIndex < this.history.length - 1) {
      this.historyIndex++;
      // Restore state from history to elements array
      this.elements = [...this.history[this.historyIndex]];
      this.redrawCanvas();
    }
  }

  updateColor(color: string): void {
    this.selectedColor = color;
    if (this.selectedText) {
      this.selectedText.color = color;
    }
  }

  onColorPickerOpen(): void {
    this.isColorPickerOpen = true;
    this.wasSquareModeBeforeColorPicker = this.currentMode === DRAW_MODE.SQUARE;
    this.wasEllipseModeBeforeColorPicker =
      this.currentMode === DRAW_MODE.ELLIPSE;
    this.wasLineModeBeforeColorPicker = this.currentMode === DRAW_MODE.LINE;
    this.wasArrowModeBeforeColorPicker = this.currentMode === DRAW_MODE.ARROW;

    if (this.currentMode === DRAW_MODE.SQUARE) {
      this.currentMode = null;
      this.squareStartPosition = null;
    }
    if (this.currentMode === DRAW_MODE.ELLIPSE) {
      this.currentMode = null;
      this.ellipseStartPosition = null;
    }
    if (this.currentMode === DRAW_MODE.LINE) {
      this.currentMode = null;
      this.lineStartPosition = null;
    }
    if (this.currentMode === DRAW_MODE.ARROW) {
      this.currentMode = null;
      this.arrowStartPosition = null;
    }
  }

  onColorPickerClose(): void {
    this.isColorPickerOpen = false;

    // Restore the correct mode if it was active before color picker
    if (this.wasSquareModeBeforeColorPicker) {
      this.enableSquareMode(this.selectedColor);
      this.disableWasModeFlags();
    } else if (this.wasEllipseModeBeforeColorPicker) {
      this.enableEllipseMode(this.selectedColor);
      this.disableWasModeFlags();
    } else if (this.wasLineModeBeforeColorPicker) {
      this.enableLineMode(this.selectedColor);
      this.disableWasModeFlags();
    } else if (this.wasArrowModeBeforeColorPicker) {
      this.enableArrowMode(this.selectedColor);
      this.disableWasModeFlags();
    }
  }

  enableArrowMode(color: string): void {
    this.setMode(DRAW_MODE.ARROW, color);
  }

  enableLineMode(color: string): void {
    this.setMode(DRAW_MODE.LINE, color);
  }

  enableCustomTextMode(color: string): void {
    this.setMode(DRAW_MODE.FREE_TEXT, color);
  }

  enableSquareMode(color: string): void {
    this.setMode(DRAW_MODE.SQUARE, color);
  }

  enableEllipseMode(color: string): void {
    this.setMode(DRAW_MODE.ELLIPSE, color);
  }

  private setMode(mode: string, color: string) {
    this.currentMode = mode;
    this.selectedColor = color;
    this.selectedText = null;
  }

  confirmTextInput(): void {
    if (!this.clickPosition || !this.customTextInput.trim()) return;

    // Push TextElement to elements array
    this.elements.push({
      type: 'text',
      text: this.customTextInput,
      color: this.selectedColor,
      x: this.clickPosition.x,
      y: this.clickPosition.y,
      size: this.fontSize,
    });

    this.saveToHistory();
    this.redrawCanvas();
    this.resetTextInput();
  }

  cancelTextInput(): void {
    this.resetTextInput();
  }

  getDisplayFilename(): string {
    if (!this.originalFilename) return '';

    const [name, ext] = this.originalFilename.split('.');
    if (name.length <= 20) return this.originalFilename;

    return `${name.substring(0, 20)}...${ext ? '.' + ext : ''}`;
  }

  toggleDeleteMode(): void {
    if (this.currentMode === DRAW_MODE.DELETE) {
      this.currentMode = null;
    } else {
      this.currentMode = DRAW_MODE.DELETE;
    }
    this.selectedText = null;
  }

  private disableWasModeFlags(): void {
    this.wasSquareModeBeforeColorPicker = false;
    this.wasEllipseModeBeforeColorPicker = false;
    this.wasLineModeBeforeColorPicker = false;
    this.wasArrowModeBeforeColorPicker = false;
  }

  private drawImage(): void {
    if (!this.context || !this.image) return;

    const canvas = this.canvasRef.nativeElement;
    canvas.width = this.image.width;
    canvas.height = this.image.height;
    this.context.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height
    );
    // Initial draw doesn't need history save, just redraw elements if any exist (e.g., loading state)
    this.redrawCanvas();
  }

  private saveToHistory(): void {
    // History is initialized with [[]] in onFileSelected

    // If undo was performed, truncate future history
    if (this.historyIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.historyIndex + 1);
    }

    // Normalize square dimensions to always be positive
    const normalizedElements = this.elements.map((el) => {
      if (el.type === DRAW_MODE.SQUARE) {
        return {
          ...el,
          width: Math.abs((el as SquareElement).width),
          height: Math.abs((el as SquareElement).height),
        };
      }
      return { ...el };
    });

    // Push the new state (copy of normalized elements array)
    const newState = normalizedElements.map((el) => ({ ...el }));

    // Get last state for comparison
    const lastState = this.history[this.historyIndex];

    // Always push first state (empty array)
    if (this.history.length === 1 && this.history[0].length === 0) {
      this.history.push(newState);
      this.historyIndex = 1;
      return;
    }

    // Compare element counts first for quick check
    if (newState.length !== lastState.length) {
      this.history.push(newState);
      this.historyIndex = this.history.length - 1;
      return;
    }

    // Deep compare elements
    const hasChanges = newState.some(
      (el, i) => JSON.stringify(el) !== JSON.stringify(lastState[i])
    );

    if (hasChanges) {
      this.history.push(newState);
      this.historyIndex = this.history.length - 1;
    }
  }

  private redrawCanvas(): void {
    if (!this.context || !this.image) return;

    const canvas = this.canvasRef.nativeElement;
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.context.drawImage(this.image, 0, 0, canvas.width, canvas.height);

    // Draw elements based on type
    this.elements.forEach((element) => {
      if (!this.context) return;
      switch (element.type) {
        case 'text':
          this.drawText(element);
          break;
        case DRAW_MODE.SQUARE:
          this.drawSquare(element);
          break;
        case DRAW_MODE.ELLIPSE:
          this.drawEllipse(element);
          break;
        case DRAW_MODE.LINE:
          this.drawLine(element);
          break;
        case DRAW_MODE.ARROW:
          this.drawArrow(element);
          break;
        default:
          break;
      }
    });
  }

  private drawText(element: any): void {
    if (!this.context) return;
    this.context.font = `${element.size}${FONT_SETTING.FONT_UNIT} ${FONT_SETTING.FONT_FAMILY}`;
    this.context.fillStyle = element.color;
    this.context.fillText(element.text, element.x, element.y);
  }

  private drawSquare(element: any): void {
    if (!this.context) return;
    this.context.strokeStyle = element.color;
    this.context.lineWidth = 2;
    this.context.strokeRect(
      element.x,
      element.y,
      element.width,
      element.height
    );
  }

  private drawEllipse(element: any): void {
    if (!this.context) return;
    this.context.strokeStyle = element.color;
    this.context.lineWidth = 2;
    this.context.beginPath();
    this.context.ellipse(
      element.x,
      element.y,
      element.radiusX,
      element.radiusY,
      0,
      0,
      2 * Math.PI
    );
    this.context.stroke();
  }

  private drawLine(element: any): void {
    if (!this.context) return;
    this.context.strokeStyle = element.color;
    this.context.lineWidth = 2;
    this.context.beginPath();
    this.context.moveTo(element.startX, element.startY);
    this.context.lineTo(element.endX, element.endY);
    this.context.stroke();
  }

  private drawArrow(element: any): void {
    if (!this.context) return;
    this.context.strokeStyle = element.color;
    this.context.lineWidth = 2;
    // Draw main line
    this.context.beginPath();
    this.context.moveTo(element.startX, element.startY);
    this.context.lineTo(element.endX, element.endY);
    this.context.stroke();

    // Draw arrowhead
    const headLength = 18; // length of head in pixels
    const dx = element.endX - element.startX;
    const dy = element.endY - element.startY;
    const angle = Math.atan2(dy, dx);
    for (const offset of [Math.PI / 7, -Math.PI / 7]) {
      this.context.beginPath();
      this.context.moveTo(element.endX, element.endY);
      this.context.lineTo(
        element.endX - headLength * Math.cos(angle + offset),
        element.endY - headLength * Math.sin(angle + offset)
      );
      this.context.stroke();
    }
  }

  private resetTextInput(): void {
    this.clickPosition = null;
    this.customTextInput = '';
    this.showTextDialog = false;
  }

  @HostListener('document:keydown.control.z', ['$event'])
  onUndoKey(event: KeyboardEvent): void {
    event.preventDefault();
    this.undo();
  }

  @HostListener('document:keydown.control.y', ['$event'])
  onRedoKey(event: KeyboardEvent): void {
    event.preventDefault();
    this.redo();
  }

  private findNearestElement(event: MouseEvent): ElementType | null {
    if (!this.context || !this.image) return null;

    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    let closestItem: ElementType | null = null;
    let minDistance = Infinity;

    this.elements.forEach((element) => {
      let distance;
      let isClose;

      switch (element.type) {
        case 'text':
          ({ distance, isClose } = this.distanceToText(
            element,
            clickX,
            clickY
          ));
          break;
        case DRAW_MODE.SQUARE:
          ({ distance, isClose } = this.distanceToSquare(
            element,
            clickX,
            clickY
          ));
          break;
        case DRAW_MODE.ELLIPSE:
          ({ distance, isClose } = this.distanceToEllipse(
            element,
            clickX,
            clickY
          ));
          break;
        case DRAW_MODE.LINE:
          ({ distance, isClose } = this.distanceToLine(
            element,
            clickX,
            clickY
          ));
          break;
        case DRAW_MODE.ARROW:
          ({ distance, isClose } = this.distanceToArrow(
            element,
            clickX,
            clickY
          ));
          break;
        default:
          distance = Infinity;
          isClose = false;
      }

      if (isClose && distance < minDistance) {
        minDistance = distance;
        closestItem = element;
      }
    });

    return closestItem;
  }

  private distanceToText(
    element: any,
    clickX: number,
    clickY: number
  ): { distance: number; isClose: boolean } {
    const distance = Math.sqrt(
      Math.pow(clickX - element.x, 2) + Math.pow(clickY - element.y, 2)
    );
    return { distance, isClose: distance < this.deletionThreshold };
  }

  private distanceToSquare(
    element: any,
    clickX: number,
    clickY: number
  ): { distance: number; isClose: boolean } {
    const isInside =
      clickX >= element.x &&
      clickX <= element.x + element.width &&
      clickY >= element.y &&
      clickY <= element.y + element.height;

    if (isInside) {
      const centerX = element.x + element.width / 2;
      const centerY = element.y + element.height / 2;
      const distance = Math.sqrt(
        Math.pow(clickX - centerX, 2) + Math.pow(clickY - centerY, 2)
      );
      return { distance, isClose: true };
    }
    return { distance: Infinity, isClose: false };
  }

  private distanceToEllipse(
    element: any,
    clickX: number,
    clickY: number
  ): { distance: number; isClose: boolean } {
    const norm =
      Math.pow(clickX - element.x, 2) / Math.pow(element.radiusX, 2) +
      Math.pow(clickY - element.y, 2) / Math.pow(element.radiusY, 2);
    const distance =
      Math.abs(norm - 1) * Math.max(element.radiusX, element.radiusY);
    return { distance, isClose: norm <= 1.05 };
  }

  private distanceToLine(
    element: any,
    clickX: number,
    clickY: number
  ): { distance: number; isClose: boolean } {
    const x1 = element.startX;
    const y1 = element.startY;
    const x2 = element.endX;
    const y2 = element.endY;
    const A = clickX - x1;
    const B = clickY - y1;
    const C = x2 - x1;
    const D = y2 - y1;

    const dot = A * C + B * D;
    const len_sq = C * C + D * D;
    let param = -1;
    if (len_sq !== 0) param = dot / len_sq;

    let xx, yy;

    if (param < 0) {
      xx = x1;
      yy = y1;
    } else if (param > 1) {
      xx = x2;
      yy = y2;
    } else {
      xx = x1 + param * C;
      yy = y1 + param * D;
    }

    const distance = Math.sqrt(
      (clickX - xx) * (clickX - xx) + (clickY - yy) * (clickY - yy)
    );
    return { distance, isClose: distance < this.deletionThreshold };
  }

  private distanceToArrow(
    element: any,
    clickX: number,
    clickY: number
  ): { distance: number; isClose: boolean } {
    const x1 = element.startX;
    const y1 = element.startY;
    const x2 = element.endX;
    const y2 = element.endY;
    const A = clickX - x1;
    const B = clickY - y1;
    const C = x2 - x1;
    const D = y2 - y1;
    const dot = A * C + B * D;
    const len_sq = C * C + D * D;
    let param = -1;
    if (len_sq !== 0) {
      param = dot / len_sq;
    }
    let xx, yy;
    if (param < 0) {
      xx = x1;
      yy = y1;
    } else if (param > 1) {
      xx = x2;
      yy = y2;
    } else {
      xx = x1 + param * C;
      yy = y1 + param * D;
    }
    const distance = Math.sqrt((clickX - xx) ** 2 + (clickY - yy) ** 2);
    return { distance, isClose: distance < this.deletionThreshold };
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    if (this.isColorPickerOpen) return;

    const { rect, isInCanvas } = this.isInCanvas(event);

    switch (this.currentMode) {
      case DRAW_MODE.SQUARE:
        this.handleSquareMouseDown(event, rect, isInCanvas);
        break;
      case DRAW_MODE.ELLIPSE:
        this.handleEllipseMouseDown(event, rect, isInCanvas);
        break;
      case DRAW_MODE.LINE:
        this.handleLineMouseDown(event, rect, isInCanvas);
        break;
      case DRAW_MODE.ARROW:
        this.handleArrowMouseDown(event, rect, isInCanvas);
        break;
      default:
        break;
    }
  }

  private isInCanvas(event: MouseEvent | PointerEvent) {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const isInCanvas =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;
    return { rect, isInCanvas };
  }

  private handleSquareMouseDown(
    event: MouseEvent,
    rect: DOMRect,
    isInCanvas: boolean
  ): void {
    if (this.context && isInCanvas && !this.isColorPickerOpen) {
      this.squareStartPosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }
  }

  private handleEllipseMouseDown(
    event: MouseEvent,
    rect: DOMRect,
    isInCanvas: boolean
  ): void {
    if (this.context && isInCanvas && !this.isColorPickerOpen) {
      this.ellipseStartPosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }
  }

  private handleLineMouseDown(
    event: MouseEvent,
    rect: DOMRect,
    isInCanvas: boolean
  ): void {
    if (this.context && isInCanvas && !this.isColorPickerOpen) {
      this.lineStartPosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }
  }

  private handleArrowMouseDown(
    event: MouseEvent,
    rect: DOMRect,
    isInCanvas: boolean
  ): void {
    if (this.context && isInCanvas && !this.isColorPickerOpen) {
      this.arrowStartPosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isColorPickerOpen) return;

    const { rect, isInCanvas } = this.isInCanvas(event);

    switch (this.currentMode) {
      case DRAW_MODE.SQUARE:
        this.handleSquareMouseMove(event, rect, isInCanvas);
        break;
      case DRAW_MODE.ELLIPSE:
        this.handleEllipseMouseMove(event, rect, isInCanvas);
        break;
      case DRAW_MODE.LINE:
        this.handleLineMouseMove(event, rect, isInCanvas);
        break;
      case DRAW_MODE.ARROW:
        this.handleArrowMouseMove(event, rect, isInCanvas);
        break;
      default:
        break;
    }
  }

  private handleSquareMouseMove(
    event: MouseEvent,
    rect: DOMRect,
    isInCanvas: boolean
  ): void {
    if (
      this.squareStartPosition &&
      this.context &&
      this.image &&
      isInCanvas &&
      !this.isColorPickerOpen
    ) {
      const currentX = event.clientX - rect.left;
      const currentY = event.clientY - rect.top;

      let dx = currentX - this.squareStartPosition.x;
      let dy = currentY - this.squareStartPosition.y;
      let width = dx;
      let height = dy;
      if (event.shiftKey) {
        const side = Math.max(Math.abs(dx), Math.abs(dy));
        width = side * Math.sign(dx || 1);
        height = side * Math.sign(dy || 1);
      }
      this.redrawCanvas();
      this.context.strokeStyle = this.selectedColor;
      this.context.lineWidth = 2;
      this.context.strokeRect(
        this.squareStartPosition.x,
        this.squareStartPosition.y,
        width,
        height
      );
    }
  }

  private handleEllipseMouseMove(
    event: MouseEvent,
    rect: DOMRect,
    isInCanvas: boolean
  ): void {
    if (
      this.ellipseStartPosition &&
      this.context &&
      this.image &&
      isInCanvas &&
      !this.isColorPickerOpen
    ) {
      const currentX = event.clientX - rect.left;
      const currentY = event.clientY - rect.top;
      const dx = currentX - this.ellipseStartPosition.x;
      const dy = currentY - this.ellipseStartPosition.y;
      let centerX = this.ellipseStartPosition.x + dx / 2;
      let centerY = this.ellipseStartPosition.y + dy / 2;
      let radiusX = Math.abs(dx) / 2;
      let radiusY = Math.abs(dy) / 2;
      if (event.shiftKey) {
        const maxRadius = Math.max(radiusX, radiusY);
        radiusX = maxRadius;
        radiusY = maxRadius;
      }

      this.redrawCanvas();
      this.context.strokeStyle = this.selectedColor;
      this.context.lineWidth = 2;
      this.context.beginPath();
      this.context.ellipse(
        centerX,
        centerY,
        radiusX,
        radiusY,
        0,
        0,
        2 * Math.PI
      );
      this.context.stroke();
    }
  }

  private handleLineMouseMove(
    event: MouseEvent,
    rect: DOMRect,
    isInCanvas: boolean
  ): void {
    if (
      this.lineStartPosition &&
      this.context &&
      this.image &&
      isInCanvas &&
      !this.isColorPickerOpen
    ) {
      let currentX = event.clientX - rect.left;
      let currentY = event.clientY - rect.top;

      // Hold shift to constrain to straight lines (multiples of 45°)
      if (event.shiftKey) {
        const startX = this.lineStartPosition.x;
        const startY = this.lineStartPosition.y;
        const dx = currentX - startX;
        const dy = currentY - startY;
        const angle = Math.atan2(dy, dx);
        const snapAngle = Math.round(angle / (Math.PI / 4)) * (Math.PI / 4);
        const distance = Math.sqrt(dx * dx + dy * dy);
        currentX = startX + Math.cos(snapAngle) * distance;
        currentY = startY + Math.sin(snapAngle) * distance;
      }

      this.redrawCanvas();
      this.context.strokeStyle = this.selectedColor;
      this.context.lineWidth = 2;
      this.context.beginPath();
      this.context.moveTo(this.lineStartPosition.x, this.lineStartPosition.y);
      this.context.lineTo(currentX, currentY);
      this.context.stroke();
    }
  }

  private handleArrowMouseMove(
    event: MouseEvent,
    rect: DOMRect,
    isInCanvas: boolean
  ): void {
    if (
      this.arrowStartPosition &&
      this.context &&
      this.image &&
      isInCanvas &&
      !this.isColorPickerOpen
    ) {
      let currentX = event.clientX - rect.left;
      let currentY = event.clientY - rect.top;

      // Hold shift to constrain to straight lines (multiples of 45°)
      if (event.shiftKey) {
        const startX = this.arrowStartPosition.x;
        const startY = this.arrowStartPosition.y;
        const dx = currentX - startX;
        const dy = currentY - startY;
        const angle = Math.atan2(dy, dx);
        const snapAngle = Math.round(angle / (Math.PI / 4)) * (Math.PI / 4);
        const distance = Math.sqrt(dx * dx + dy * dy);
        currentX = startX + Math.cos(snapAngle) * distance;
        currentY = startY + Math.sin(snapAngle) * distance;
      }

      this.redrawCanvas();
      this.context.strokeStyle = this.selectedColor;
      this.context.lineWidth = 2;
      this.context.beginPath();
      this.context.moveTo(this.arrowStartPosition.x, this.arrowStartPosition.y);
      this.context.lineTo(currentX, currentY);
      this.context.stroke();

      // Draw arrowhead
      const headLength = 18; // length of head in pixels
      const dx = currentX - this.arrowStartPosition.x;
      const dy = currentY - this.arrowStartPosition.y;
      const angle = Math.atan2(dy, dx);
      for (const offset of [Math.PI / 7, -Math.PI / 7]) {
        this.context.beginPath();
        this.context.moveTo(currentX, currentY);
        this.context.lineTo(
          currentX - headLength * Math.cos(angle + offset),
          currentY - headLength * Math.sin(angle + offset)
        );
        this.context.stroke();
      }
    }
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent): void {
    if (this.isColorPickerOpen) return;

    const { rect, isInCanvas } = this.isInCanvas(event);

    switch (this.currentMode) {
      case DRAW_MODE.SQUARE:
        this.handleSquareMouseUp(event, rect, isInCanvas);
        break;
      case DRAW_MODE.ELLIPSE:
        this.handleEllipseMouseUp(event, rect, isInCanvas);
        break;
      case DRAW_MODE.LINE:
        this.handleLineMouseUp(event, rect, isInCanvas);
        break;
      case DRAW_MODE.ARROW:
        this.handleArrowMouseUp(event, rect, isInCanvas);
        break;
      default:
        break;
    }
  }

  private handleSquareMouseUp(
    event: MouseEvent,
    rect: DOMRect,
    isInCanvas: boolean
  ): void {
    if (this.squareStartPosition && isInCanvas) {
      const endX = event.clientX - rect.left;
      const endY = event.clientY - rect.top;

      let dx = endX - this.squareStartPosition.x;
      let dy = endY - this.squareStartPosition.y;
      let finalWidth = dx;
      let finalHeight = dy;
      if (event.shiftKey) {
        const side = Math.max(Math.abs(dx), Math.abs(dy));
        finalWidth = side * Math.sign(dx || 1);
        finalHeight = side * Math.sign(dy || 1);
      }
      let x = this.squareStartPosition.x;
      let y = this.squareStartPosition.y;
      if (finalWidth < 0) {
        x = x + finalWidth;
      }
      if (finalHeight < 0) {
        y = y + finalHeight;
      }
      if (Math.abs(finalWidth) > 5 && Math.abs(finalHeight) > 5) {
        // Minimum size threshold
        this.elements.push({
          type: DRAW_MODE.SQUARE,
          x: x,
          y: y,
          width: Math.abs(finalWidth),
          height: Math.abs(finalHeight),
          color: this.selectedColor,
        });
        this.saveToHistory();
      }
      this.redrawCanvas();
      this.squareStartPosition = null;
    }
  }

  private handleEllipseMouseUp(
    event: MouseEvent,
    rect: DOMRect,
    isInCanvas: boolean
  ): void {
    if (this.ellipseStartPosition && isInCanvas) {
      const endX = event.clientX - rect.left;
      const endY = event.clientY - rect.top;
      const dx = endX - this.ellipseStartPosition.x;
      const dy = endY - this.ellipseStartPosition.y;
      let centerX = this.ellipseStartPosition.x + dx / 2;
      let centerY = this.ellipseStartPosition.y + dy / 2;
      let radiusX = Math.abs(dx) / 2;
      let radiusY = Math.abs(dy) / 2;
      if (event.shiftKey) {
        const maxRadius = Math.max(radiusX, radiusY);
        radiusX = maxRadius;
        radiusY = maxRadius;
      }
      if (radiusX > 5 && radiusY > 5) {
        this.elements.push({
          type: DRAW_MODE.ELLIPSE,
          x: centerX,
          y: centerY,
          radiusX: radiusX,
          radiusY: radiusY,
          color: this.selectedColor,
        });
        this.saveToHistory();
      }
      this.redrawCanvas();
      this.ellipseStartPosition = null;
    }
  }

  private handleLineMouseUp(
    event: MouseEvent,
    rect: DOMRect,
    isInCanvas: boolean
  ): void {
    if (this.lineStartPosition && isInCanvas) {
      let endX = event.clientX - rect.left;
      let endY = event.clientY - rect.top;

      // Hold shift to constrain to straight lines (multiples of 45°)
      if (event.shiftKey) {
        const startX = this.lineStartPosition.x;
        const startY = this.lineStartPosition.y;
        const dx = endX - startX;
        const dy = endY - startY;
        const angle = Math.atan2(dy, dx);
        const snapAngle = Math.round(angle / (Math.PI / 4)) * (Math.PI / 4);
        const distance = Math.sqrt(dx * dx + dy * dy);
        endX = startX + Math.cos(snapAngle) * distance;
        endY = startY + Math.sin(snapAngle) * distance;
      }

      if (
        Math.abs(endX - this.lineStartPosition.x) > 5 ||
        Math.abs(endY - this.lineStartPosition.y) > 5
      ) {
        this.elements.push({
          type: DRAW_MODE.LINE,
          startX: this.lineStartPosition.x,
          startY: this.lineStartPosition.y,
          endX: endX,
          endY: endY,
          color: this.selectedColor,
        });
        this.saveToHistory();
      }
      this.redrawCanvas();
      this.lineStartPosition = null;
    }
  }

  private handleArrowMouseUp(
    event: MouseEvent,
    rect: DOMRect,
    isInCanvas: boolean
  ): void {
    if (this.arrowStartPosition && isInCanvas) {
      let endX = event.clientX - rect.left;
      let endY = event.clientY - rect.top;

      if (event.shiftKey) {
        const startX = this.arrowStartPosition.x;
        const startY = this.arrowStartPosition.y;
        const dx = endX - startX;
        const dy = endY - startY;
        const angle = Math.atan2(dy, dx);
        const snapAngle = Math.round(angle / (Math.PI / 4)) * (Math.PI / 4);
        const distance = Math.sqrt(dx * dx + dy * dy);
        endX = startX + Math.cos(snapAngle) * distance;
        endY = startY + Math.sin(snapAngle) * distance;
      }

      if (
        Math.abs(endX - this.arrowStartPosition.x) > 5 ||
        Math.abs(endY - this.arrowStartPosition.y) > 5
      ) {
        this.elements.push({
          type: DRAW_MODE.ARROW,
          startX: this.arrowStartPosition.x,
          startY: this.arrowStartPosition.y,
          endX: endX,
          endY: endY,
          color: this.selectedColor,
        });
        this.saveToHistory();
      }
      this.redrawCanvas();
      this.arrowStartPosition = null;
    }
  }

  toggleInteractionMode(): void {
    this.interactionMode =
      this.interactionMode === INTERACTION_MODE.DRAW
        ? INTERACTION_MODE.SCROLL
        : INTERACTION_MODE.DRAW;
    this.resetDrawingStates();
  }

  // Reset drawing states when switching modes
  private resetDrawingStates(): void {
    this.squareStartPosition = null;
    this.ellipseStartPosition = null;
    this.lineStartPosition = null;
    this.arrowStartPosition = null;
  }

  @HostListener('pointerdown', ['$event'])
  onPointerDown(event: PointerEvent): void {
    if (this.isColorPickerOpen) return;

    const { isInCanvas } = this.isInCanvas(event);
    if (!isInCanvas || this.showTextDialog) {
      return;
    }

    if (event.pointerType === 'touch') {
      // Only allow drawing if in draw mode
      if (this.interactionMode === INTERACTION_MODE.SCROLL) {
        // Let browser handle scroll/pan
        return;
      }
      this.activePointers.add(event.pointerId);
      if (this.activePointers.size > 1) {
        // Prevent drawing if multiple fingers are down (could be pinch/zoom)
        return;
      }

      // Simulate MouseEvent for existing handlers, ensuring coordinates are relative to canvas
      const simulatedMouseEvent = new MouseEvent('mousedown', {
        clientX: event.clientX,
        clientY: event.clientY,
        // Add other properties if needed by handlers
      });

      if (
        this.currentMode === this.drawModeConst.CHECK ||
        this.currentMode === this.drawModeConst.X ||
        this.currentMode === this.drawModeConst.FREE_TEXT ||
        this.currentMode === this.drawModeConst.DELETE
      ) {
        // Use simulated event for onCanvasClick
        this.onCanvasClick(simulatedMouseEvent);
        event.preventDefault(); // Prevent default touch actions like scrolling
        return;
      }
      // Use simulated event for onMouseDown
      this.onMouseDown(simulatedMouseEvent);
      event.preventDefault(); // Prevent default touch actions
    }
  }

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (this.isColorPickerOpen) return;

    const { isInCanvas } = this.isInCanvas(event);
    if (!isInCanvas || this.showTextDialog) {
      return;
    }

    if (event.pointerType === 'touch') {
      if (this.interactionMode === INTERACTION_MODE.SCROLL) {
        // Let browser handle scroll/pan
        return;
      }
      if (!this.activePointers.has(event.pointerId)) return; // Only track pointers that started down
      if (this.activePointers.size > 1) {
        // Prevent drawing if multiple fingers are down
        return;
      }

      // Simulate MouseEvent for existing handlers
      const simulatedMouseEvent = new MouseEvent('mousemove', {
        clientX: event.clientX,
        clientY: event.clientY,
        shiftKey: event.shiftKey, // Preserve shift key status if needed
        // Add other properties if needed by handlers
      });

      this.onMouseMove(simulatedMouseEvent);
      event.preventDefault(); // Prevent default touch actions like scrolling
    }
  }

  @HostListener('pointerup', ['$event'])
  onPointerUp(event: PointerEvent): void {
    const { isInCanvas } = this.isInCanvas(event);
    if (!isInCanvas) {
      return;
    }

    if (event.pointerType === 'touch') {
      if (this.interactionMode === INTERACTION_MODE.SCROLL) {
        // Let browser handle scroll/pan
        this.activePointers.delete(event.pointerId);
        return;
      }

      // Check if the pointer being lifted is one we were tracking
      if (!this.activePointers.has(event.pointerId)) {
        // This pointer wasn't the primary drawing pointer or wasn't tracked
        this.activePointers.delete(event.pointerId); // Clean up just in case
        return;
      }

      this.activePointers.delete(event.pointerId);

      // Simulate MouseEvent for existing handlers
      const simulatedMouseEvent = new MouseEvent('mouseup', {
        clientX: event.clientX,
        clientY: event.clientY,
        shiftKey: event.shiftKey, // Preserve shift key status
        // Add other properties if needed by handlers
      });

      // Only call mouseUp if this was the last active drawing pointer
      // However, onMouseUp itself checks start positions, so it's safe to call generally
      // if (this.activePointers.size === 0) { // Check if this was the last finger lifted
      this.onMouseUp(simulatedMouseEvent);
      event.preventDefault(); // Prevent potential default actions like focus changes
    }
  }

  @HostListener('pointercancel', ['$event'])
  onPointerCancel(event: PointerEvent): void {
    if (event.pointerType === 'touch') {
      this.activePointers.delete(event.pointerId);
    }
  }
}
