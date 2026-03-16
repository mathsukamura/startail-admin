import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

import { ModalComponent } from '../../ui/modal/modal.component';
import { FormFieldComponent } from '../../form/form-field/form-field.component';
import { ModalFooterComponent } from '../../ui/modal-footer/modal-footer.component';
import { CardBaseComponent } from '../../ui/card-base/card-base.component';

@Component({
  selector: 'app-user-address-card',
  imports: [
    ModalComponent,
    FormFieldComponent,
    ModalFooterComponent,
    CardBaseComponent
],
  templateUrl: './user-address-card.component.html',
  styles: ``
})
export class UserAddressCardComponent {

  constructor(public modal: ModalService) {}

  isOpen = false;
  openModal() { this.isOpen = true; }
  closeModal() { this.isOpen = false; }

  address = {
    country: 'Brazil.',
    cityState: 'Imperatriz, Maranhão, Brazil.',
    postalCode: '65919282',
    taxId: 'AS4568384',
  };

  handleSave() {
    console.log('Saving changes...');
    this.modal.closeModal();
  }
}
