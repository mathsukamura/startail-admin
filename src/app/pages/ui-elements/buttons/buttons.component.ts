import { Component } from '@angular/core';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ButtonComponent } from '../../../shared/components/ui/button/button.component';

@Component({
  selector: 'app-buttons',
  imports: [
    ComponentCardComponent,
    PageBreadcrumbComponent,
    ButtonComponent,
  ],
  templateUrl: './buttons.component.html',
  styles: ``
})
export class ButtonsComponent {

  boxIcon = `<svg width="1em" height="1em" class="size-5 fill-current" aria-hidden="true"><use href="/icons/icons.svg#icon-button-box" /></svg>`
}
