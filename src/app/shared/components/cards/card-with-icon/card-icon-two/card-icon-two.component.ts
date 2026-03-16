import { Component } from '@angular/core';
import { CardTitleComponent } from '../../../ui/card/card-title.component';
import { CardDescriptionComponent } from '../../../ui/card/card-description.component';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../../ui/icon/icon.component';

@Component({
  selector: 'app-card-icon-two',
  imports: [
    CardTitleComponent,
    CardDescriptionComponent,
    RouterModule,
    IconComponent,
],
  templateUrl: './card-icon-two.component.html',
  styles: ``
})
export class CardIconTwoComponent {

}
