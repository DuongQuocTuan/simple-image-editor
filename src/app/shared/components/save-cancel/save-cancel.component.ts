import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-save-cancel',
  imports: [ButtonModule],
  templateUrl: './save-cancel.component.html',
  styleUrl: './save-cancel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaveCancelComponent {
  @Input() saveButtonType: 'submit' | 'button' = 'button';
  @Input() isSubmitting = false;
  @Input() isDisabled = false;
  @Input() saveButtonLabel = 'Save';
  @Input() cancelButtonLabel = 'Cancel';

  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onSave() {
    this.save.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
