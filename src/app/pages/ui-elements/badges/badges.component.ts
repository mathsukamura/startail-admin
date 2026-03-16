import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { BadgeComponent } from '../../../shared/components/ui/badge/badge.component';

@Component({
  selector: 'app-badges',
  imports: [
    PageBreadcrumbComponent,
    ComponentCardComponent,
    BadgeComponent,
  ],
  templateUrl: './badges.component.html',
  styles: ``
})
export class BadgesComponent {

  plusIcon = `<svg class="fill-current" width="1em" height="1em" aria-hidden="true"><use href="/icons/icons.svg#icon-badge-plus" /></svg>`
}
