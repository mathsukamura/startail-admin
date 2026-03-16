import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { AreaChartOneComponent } from '../../../shared/components/charts/area/area-chart-one/area-chart-one.component';

@Component({
  selector: 'app-area-chart',
  standalone: true,
  imports: [PageBreadcrumbComponent, ComponentCardComponent, AreaChartOneComponent],
  template: `
    <app-page-breadcrumb pageTitle="Area Chart" />
    <div class="space-y-6">
      <app-component-card title="Area Chart 1">
        <app-area-chart-one />
      </app-component-card>
    </div>
  `,
})
export class AreaChartComponent {}
