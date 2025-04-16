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
import { BUTTON_TYPE } from '@features/image-editor/constants/button-type.constant';
import { FONT_SETTING } from '@features/image-editor/constants/font-setting.constant';
import { TEXT_COLOR } from '@features/image-editor/constants/text-color.constant';
import { TEXT_SYMBOL } from '@features/image-editor/constants/text-symbol.constant';
import {
  Position,
  SelectedText,
} from '@features/image-editor/models/editor-state.model';
import { ElementType } from '@features/image-editor/models/element.model';
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
  private readonly deletionThreshold = 100; // Pixels
  private context: CanvasRenderingContext2D | null = null;
  private image: HTMLImageElement | null = null;
  private selectedText: SelectedText | null = null;
  private clickPosition: Position | null = null;
  private elements: ElementType[] = [];
  private history: ElementType[][] = [[]];
  private historyIndex: number = 0;
  readonly textColorConst = TEXT_COLOR;
  readonly textSymbolConst = TEXT_SYMBOL;
  readonly fontSettingConst = FONT_SETTING;
  readonly buttonTypeConst = {
    ...BUTTON_TYPE,
    SQUARE: 'SQUARE',
    ELLIPSE: 'ELLIPSE',
  };
  private isSquareMode = false;
  private isEllipseMode = false;
  private isLineMode = false;
  private squareStartPosition: { x: number; y: number } | null = null;
  private ellipseStartPosition: { x: number; y: number } | null = null;
  private lineStartPosition: { x: number; y: number } | null = null;
  private isColorPickerOpen = false;
  private wasSquareModeBeforeColorPicker = false;
  private wasEllipseModeBeforeColorPicker = false;
  private wasLineModeBeforeColorPicker = false;

  originalFilename = '';
  selectedColor: string = TEXT_COLOR.DEFAULT;
  fontSize = FONT_SETTING.FONT_SIZE;
  showTextDialog = false;
  customTextInput = '';
  isCustomTextMode = false;
  isDeleteMode = false;
  activeButton: (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE] | null = null;

  updateFontSize(): void {
    if (this.selectedText) {
      this.selectedText.size = this.fontSize;
      // Font size change doesn't need history update, just redraw
      // this.redrawCanvas(); // Redraw might not be needed if no text is selected or placed
    }
  }

  ngAfterViewInit(): void {
    this.context = this.canvasRef.nativeElement.getContext('2d');
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
    this.isCustomTextMode = false;
    this.isDeleteMode = false;
    this.isSquareMode = false;
    this.isEllipseMode = false;
    this.isLineMode = false;
    this.activeButton =
      symbol === this.textSymbolConst.CHECK ? BUTTON_TYPE.CHECK : BUTTON_TYPE.X;
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
    if (this.isCustomTextMode) {
      const canvas = this.canvasRef.nativeElement;
      const rect = canvas.getBoundingClientRect();
      this.clickPosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
      this.showTextDialog = true;
    } else if (this.isDeleteMode) {
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
    this.wasSquareModeBeforeColorPicker = this.isSquareMode;
    this.wasEllipseModeBeforeColorPicker = this.isEllipseMode;
    this.wasLineModeBeforeColorPicker = this.isLineMode;

    if (this.isSquareMode) {
      this.isSquareMode = false;
      this.squareStartPosition = null;
    }
    if (this.isEllipseMode) {
      this.isEllipseMode = false;
      this.ellipseStartPosition = null;
    }
    if (this.isLineMode) {
      this.isLineMode = false;
      this.lineStartPosition = null;
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
    }
  }

  private disableWasModeFlags(): void {
    this.wasSquareModeBeforeColorPicker = false;
    this.wasEllipseModeBeforeColorPicker = false;
    this.wasLineModeBeforeColorPicker = false;
  }

  enableLineMode(color: string): void {
    this.selectedColor = color;
    this.isLineMode = true;
    this.isSquareMode = false;
    this.isEllipseMode = false;
    this.isDeleteMode = false;
    this.isCustomTextMode = false;
    this.selectedText = null;
    this.activeButton = this.buttonTypeConst.LINE;
  }

  enableCustomTextMode(): void {
    this.isCustomTextMode = true;
    this.isDeleteMode = false;
    this.isSquareMode = false;
    this.isEllipseMode = false;
    this.isLineMode = false;
    this.selectedText = null;
    this.activeButton = BUTTON_TYPE.FREE_TEXT;
    this.selectedColor = TEXT_COLOR.FREE_TEXT;
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
      if (el.type === 'square') {
        return {
          ...el,
          width: Math.abs(el.width),
          height: Math.abs(el.height),
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
      if (element.type === 'text') {
        this.context.font = `${element.size}${FONT_SETTING.FONT_UNIT} ${FONT_SETTING.FONT_FAMILY}`;
        this.context.fillStyle = element.color;
        this.context.fillText(element.text, element.x, element.y);
      } else if (element.type === 'square') {
        this.context.strokeStyle = element.color;
        this.context.lineWidth = 2;
        this.context.strokeRect(
          element.x,
          element.y,
          element.width,
          element.height
        );
      } else if (element.type === 'ellipse') {
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
      } else if (element.type === 'line') {
        this.context.strokeStyle = element.color;
        this.context.lineWidth = 2;
        this.context.beginPath();
        this.context.moveTo(element.startX, element.startY);
        this.context.lineTo(element.endX, element.endY);
        this.context.stroke();
      }
    });
  }

  private resetTextInput(): void {
    this.clickPosition = null;
    this.customTextInput = '';
    this.showTextDialog = false;
  }

  toggleDeleteMode(): void {
    this.isDeleteMode = !this.isDeleteMode;
    this.activeButton = this.isDeleteMode ? this.buttonTypeConst.DELETE : null;
    this.selectedText = null;
    this.isCustomTextMode = false;
    this.isSquareMode = false;
    this.isEllipseMode = false;
    this.isLineMode = false;
  }

  enableSquareMode(color: string): void {
    this.selectedColor = color;
    this.isSquareMode = true;
    this.isEllipseMode = false;
    this.isLineMode = false;
    this.isDeleteMode = false;
    this.selectedText = null;
    this.isCustomTextMode = false;
    this.activeButton = this.buttonTypeConst.SQUARE;
  }

  enableEllipseMode(color: string): void {
    this.selectedColor = color;
    this.isEllipseMode = true;
    this.isLineMode = false;
    this.isSquareMode = false;
    this.isDeleteMode = false;
    this.selectedText = null;
    this.isCustomTextMode = false;
    this.activeButton = this.buttonTypeConst.ELLIPSE;
  }

  // Renamed and updated function
  private findNearestElement(event: MouseEvent): ElementType | null {
    if (!this.context || !this.image) return null;

    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    let closestItem: ElementType | null = null;
    let minDistance = Infinity;

    // Check all elements
    this.elements.forEach((element) => {
      let distance: number;
      let isClose = false;

      if (element.type === 'text') {
        distance = Math.sqrt(
          Math.pow(clickX - element.x, 2) + Math.pow(clickY - element.y, 2)
        );
        isClose = distance < this.deletionThreshold;
      } else if (element.type === 'square') {
        const isInside =
          clickX >= element.x &&
          clickX <= element.x + element.width &&
          clickY >= element.y &&
          clickY <= element.y + element.height;

        if (isInside) {
          const centerX = element.x + element.width / 2;
          const centerY = element.y + element.height / 2;
          distance = Math.sqrt(
            Math.pow(clickX - centerX, 2) + Math.pow(clickY - centerY, 2)
          );
          isClose = true;
        } else {
          distance = Infinity;
        }
      } else if (element.type === 'ellipse') {
        // Ellipse hit test: ((x-h)^2/rx^2) + ((y-k)^2/ry^2) <= 1
        const norm =
          Math.pow(clickX - element.x, 2) / Math.pow(element.radiusX, 2) +
          Math.pow(clickY - element.y, 2) / Math.pow(element.radiusY, 2);
        distance =
          Math.abs(norm - 1) * Math.max(element.radiusX, element.radiusY);
        isClose = norm <= 1.05; // 5% tolerance outside ellipse
      } else if (element.type === 'line') {
        // Distance from point to line segment
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

        distance = Math.sqrt(
          (clickX - xx) * (clickX - xx) + (clickY - yy) * (clickY - yy)
        );
        isClose = distance < this.deletionThreshold;
      } else {
        distance = Infinity;
      }

      if (isClose && distance < minDistance) {
        minDistance = distance;
        closestItem = element;
      }
    });

    return closestItem;
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

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    if (this.isColorPickerOpen) return;

    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const isInCanvas =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (
      this.isSquareMode &&
      this.context &&
      isInCanvas &&
      !this.isColorPickerOpen
    ) {
      this.squareStartPosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }

    if (
      this.isEllipseMode &&
      this.context &&
      isInCanvas &&
      !this.isColorPickerOpen
    ) {
      this.ellipseStartPosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }

    if (
      this.isLineMode &&
      this.context &&
      isInCanvas &&
      !this.isColorPickerOpen
    ) {
      this.lineStartPosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isColorPickerOpen) return;

    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const isInCanvas =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (
      this.isSquareMode &&
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

    if (
      this.isEllipseMode &&
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

    if (
      this.isLineMode &&
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

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent): void {
    if (this.isColorPickerOpen) return;

    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const isInCanvas =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (this.isSquareMode && this.squareStartPosition && isInCanvas) {
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
          type: 'square',
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

    if (this.isEllipseMode && this.ellipseStartPosition && isInCanvas) {
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
          type: 'ellipse',
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

    if (this.isLineMode && this.lineStartPosition && isInCanvas) {
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
          type: 'line',
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
}
