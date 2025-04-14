import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BUTTON_TYPE } from '@features/image-editor/constants/button-type.constant';
import { FONT_SETTING } from '@features/image-editor/constants/font-setting.constant';
import { TEXT_COLOR } from '@features/image-editor/constants/text-color.constant';
import { TEXT_SYMBOL } from '@features/image-editor/constants/text-symbol.constant';
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
    TooltipModule
  ],
  templateUrl: './simple-image-editor.component.html',
  styleUrls: ['./simple-image-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleImageEditorComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private context: CanvasRenderingContext2D | null = null;
  private image: HTMLImageElement | null = null;
  originalFilename = '';
  private selectedText: { symbol: string; color: string; size: number } | null = null;
  private clickPosition: { x: number; y: number } | null = null;
  private texts: { text: string; color: string; x: number; y: number; size: number }[] = [];
  private history: { texts: { text: string; color: string; x: number; y: number; size: number }[] }[] = [];
  private historyIndex: number = 0;
  private readonly deletionThreshold = 100; // Pixels

  readonly textColorConst = TEXT_COLOR;
  readonly textSymbolConst = TEXT_SYMBOL;
  readonly fontSettingConst = FONT_SETTING;
  readonly buttonTypeConst = BUTTON_TYPE;
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
      this.redrawCanvas();
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
    this.texts = [];
    this.history = [];
    this.historyIndex = 0;
    reader.onload = e => {
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
    this.activeButton = symbol === this.textSymbolConst.CHECK ? BUTTON_TYPE.CHECK : BUTTON_TYPE.X;
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
        y: event.clientY - rect.top
      };
      this.showTextDialog = true;
    } else if (this.isDeleteMode) {
      const clickedItem = this.findNearestTextItem(event);
      if (clickedItem) {
        this.texts = this.texts.filter(t => t !== clickedItem);
        this.saveToHistory();
        this.redrawCanvas();
      }
      return;
    } else if (this.selectedText && this.context) {
      const canvas = this.canvasRef.nativeElement;
      const rect = canvas.getBoundingClientRect();
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;

      this.context.font = `${FONT_SETTING.FONT_SIZE}${FONT_SETTING.FONT_UNIT} ${FONT_SETTING.FONT_FAMILY}`;
      const metrics = this.context.measureText(this.selectedText.symbol);
      x -= metrics.width / 2;
      y += 10;

      this.texts.push({
        text: this.selectedText.symbol,
        color: this.selectedText.color,
        x,
        y,
        size: this.selectedText.size
      });
      this.saveToHistory();
      this.redrawCanvas();
    }
  }

  undo(): void {
    if (this.historyIndex > 0) {
      this.historyIndex--;
      this.texts = [...this.history[this.historyIndex].texts];
      this.redrawCanvas();
    }
  }

  redo(): void {
    if (this.historyIndex < this.history.length - 1) {
      this.historyIndex++;
      this.texts = [...this.history[this.historyIndex].texts];
      this.redrawCanvas();
    }
  }

  updateColor(color: string): void {
    this.selectedColor = color;
    if (this.selectedText) {
      this.selectedText.color = color;
    }
  }

  enableCustomTextMode(): void {
    this.isCustomTextMode = true;
    this.isDeleteMode = false;
    this.selectedText = null;
    this.activeButton = BUTTON_TYPE.FREE_TEXT;
    this.selectedColor = TEXT_COLOR.X;
  }

  confirmTextInput(): void {
    if (!this.clickPosition || !this.customTextInput.trim()) return;

    this.texts.push({
      text: this.customTextInput,
      color: this.selectedColor,
      x: this.clickPosition.x,
      y: this.clickPosition.y,
      size: this.fontSize
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
    this.context.drawImage(this.image, 0, 0, this.image.width, this.image.height);
    this.redrawCanvas();
  }

  private saveToHistory(): void {
    if (this.history.length === 0) {
      this.history.push({ texts: [] });
    }

    if (this.historyIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.historyIndex + 1);
    }

    this.history.push({
      texts: this.texts.map(t => ({ ...t }))
    });
    this.historyIndex = this.history.length - 1;
  }

  private redrawCanvas(): void {
    if (!this.context || !this.image) return;

    const canvas = this.canvasRef.nativeElement;
    this.context.clearRect(0, 0, canvas.width, canvas.height);
    this.context.drawImage(this.image, 0, 0, canvas.width, canvas.height);

    this.texts.forEach(textObj => {
      if (!this.context) return;
      this.context.font = `${textObj.size}${FONT_SETTING.FONT_UNIT} ${FONT_SETTING.FONT_FAMILY}`;
      this.context.fillStyle = textObj.color;
      this.context.fillText(textObj.text, textObj.x, textObj.y);
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
  }

  private findNearestTextItem(event: MouseEvent): { text: string; x: number; y: number } | null {
    if (!this.context || !this.image) return null;

    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    let closestItem: { text: string; x: number; y: number } | null = null;
    let minDistance = Infinity;

    this.texts.forEach(textObj => {
      const distance = Math.sqrt(Math.pow(clickX - textObj.x, 2) + Math.pow(clickY - textObj.y, 2));

      if (distance < this.deletionThreshold && distance < minDistance) {
        minDistance = distance;
        closestItem = textObj;
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
}
