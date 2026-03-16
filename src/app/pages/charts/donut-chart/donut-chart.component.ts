import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { DonutChartOneComponent } from '../../../shared/components/charts/donut/donut-chart-one/donut-chart-one.component';

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [PageBreadcrumbComponent, ComponentCardComponent, DonutChartOneComponent],
  template: `
    <app-page-breadcrumb pageTitle="Donut Chart" />
    <div class="space-y-6">
      <app-component-card title="Donut Chart 1">
        <app-donut-chart-one />
      </app-component-card>
    </div>
  `,
})
export class DonutChartComponent {}
