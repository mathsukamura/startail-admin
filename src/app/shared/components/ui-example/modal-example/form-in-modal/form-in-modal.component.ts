import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from '../../../ui/modal/modal.component';
import { ComponentCardComponent } from '../../../common/component-card/component-card.component';
import { ButtonComponent } from '../../../ui/button/button.component';
import { FormFieldComponent } from '../../../form/form-field/form-field.component';
import { ModalFooterComponent } from '../../../ui/modal-footer/modal-footer.component';

@Component({
  selector: 'app-form-in-modal',
  imports: [
    CommonModule,
    ModalComponent,
    ComponentCardComponent,
    ButtonComponent,
    FormFieldComponent,
    ModalFooterComponent
  ],
  templateUrl: './form-in-modal.component.html',
  styles: ``
})
export class FormInModalComponent {

  isOpen = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  handleSave() {
    console.log('Saving changes...');
    this.closeModal();
  }
}
