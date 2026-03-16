import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { InputFieldComponent } from '../input/input-field.component';

@Component({
  selector: 'app-form-field',
  imports: [LabelComponent, InputFieldComponent],
  template: `
    <div>
      <app-label [for]="id">{{ label }}</app-label>
      <app-input-field
        [type]="type"
        [id]="id"
        [placeholder]="placeholder"
        [value]="value"
        [disabled]="disabled"
        [error]="error"
        [success]="success"
        [hint]="hint"
        [className]="inputClassName"
        (valueChange)="valueChange.emit($event)"
      />
    </div>
  `,
})
export class FormFieldComponent {
  @Input() label = '';
  @Input() type = 'text';
  @Input() id = '';
  @Input() placeholder = '';
  @Input() value: string | number = '';
  @Input() disabled = false;
  @Input() error = false;
  @Input() success = false;
  @Input() hint?: string;
  @Input() inputClassName = '';

  @Output() valueChange = new EventEmitter<string | number>();
}
