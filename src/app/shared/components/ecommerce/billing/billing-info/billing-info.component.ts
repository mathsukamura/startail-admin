import { Component } from '@angular/core';
import { ModalComponent } from '../../../ui/modal/modal.component';
import { ButtonComponent } from '../../../ui/button/button.component';
import { IconComponent } from '../../../ui/icon/icon.component';

@Component({
  selector: 'app-billing-info',
  imports: [
    ModalComponent,
    ButtonComponent,
    IconComponent,
  ],
  templateUrl: './billing-info.component.html',
  host: {
    class: 'rounded-2xl border border-gray-200 bg-white xl:w-2/6 dark:border-gray-800 dark:bg-white/[0.03]',
  },
})
export class BillingInfoComponent {

  isOpen = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  handleSave ()  {
    console.log("Saving changes...");
    this.closeModal();
  };
}
