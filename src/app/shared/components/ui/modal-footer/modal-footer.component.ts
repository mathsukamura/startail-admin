import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal-footer',
  imports: [CommonModule, ButtonComponent],
  template: `
    <div [ngClass]="'flex items-center gap-3 ' + className">
      <app-button size="sm" variant="outline" (btnClick)="cancel.emit()">
        {{ cancelText }}
      </app-button>
      <app-button size="sm" (btnClick)="confirm.emit()">
        {{ confirmText }}
      </app-button>
    </div>
  `,
})
export class ModalFooterComponent {
  @Input() cancelText = 'Close';
  @Input() confirmText = 'Save Changes';
  @Input() className = 'mt-6 justify-end';

  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
}
