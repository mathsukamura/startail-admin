import { Component } from '@angular/core';
import { BadgeComponent } from '../../ui/badge/badge.component';
import { CardBaseComponent } from '../../ui/card-base/card-base.component';
import { IconComponent } from '../../ui/icon/icon.component';

@Component({
  selector: 'app-ecommerce-metrics',
  imports: [BadgeComponent, CardBaseComponent, IconComponent],
  templateUrl: './ecommerce-metrics.component.html'
})
export class EcommerceMetricsComponent {
}
