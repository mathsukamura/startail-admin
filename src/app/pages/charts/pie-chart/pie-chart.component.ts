import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { PieChartOneComponent } from '../../../shared/components/charts/pie/pie-chart-one/pie-chart-one.component';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [PageBreadcrumbComponent, ComponentCardComponent, PieChartOneComponent],
  template: `
    <app-page-breadcrumb pageTitle="Pie Chart" />
    <div class="space-y-6">
      <app-component-card title="Pie Chart 1">
        <app-pie-chart-one />
      </app-component-card>
    </div>
  `,
})
export class PieChartComponent {}
