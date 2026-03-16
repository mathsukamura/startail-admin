import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

import { ModalComponent } from '../../ui/modal/modal.component';
import { FormFieldComponent } from '../../form/form-field/form-field.component';
import { ModalFooterComponent } from '../../ui/modal-footer/modal-footer.component';
import { CardBaseComponent } from '../../ui/card-base/card-base.component';

@Component({
  selector: 'app-user-info-card',
  imports: [
    ModalComponent,
    FormFieldComponent,
    ModalFooterComponent,
    CardBaseComponent
],
  templateUrl: './user-info-card.component.html',
  styles: ``
})
export class UserInfoCardComponent {

  constructor(public modal: ModalService) {}

  isOpen = false;
  openModal() { this.isOpen = true; }
  closeModal() { this.isOpen = false; }

  user = {
    firstName: 'Matheus',
    lastName: 'Yuri',
    email: 'matheus.yuri.melo@gmail.com',
    phone: '+09 363 398 46',
    bio: 'Team Manager',
    social: {
      facebook: 'https://www.facebook.com/PimjoHQ',
      x: 'https://x.com/PimjoHQ',
      linkedin: 'https://www.linkedin.com/company/pimjo',
      instagram: 'https://instagram.com/PimjoHQ',
    },
  };

  handleSave() {
    console.log('Saving changes...');
    this.modal.closeModal();
  }
}
