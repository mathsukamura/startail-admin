
import { Component } from '@angular/core';
import { InvoiceTableComponent } from '../invoice-table/invoice-table.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { IconComponent } from '../../ui/icon/icon.component';

@Component({
  selector: 'app-invoice-main',
  imports: [
    InvoiceTableComponent,
    ButtonComponent,
    IconComponent,
],
  templateUrl: './invoice-main.component.html',
  styles: ``
})
export class InvoiceMainComponent {

}
