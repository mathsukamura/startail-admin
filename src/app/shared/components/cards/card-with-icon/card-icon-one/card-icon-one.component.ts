import { Component } from '@angular/core';
import { CardTitleComponent } from '../../../ui/card/card-title.component';
import { CardDescriptionComponent } from '../../../ui/card/card-description.component';
import { IconComponent } from '../../../ui/icon/icon.component';

@Component({
  selector: 'app-card-icon-one',
  imports: [
    CardTitleComponent,
    CardDescriptionComponent,
    IconComponent,
  ],
  templateUrl: './card-icon-one.component.html',
  styles: ``
})
export class CardIconOneComponent {

}
