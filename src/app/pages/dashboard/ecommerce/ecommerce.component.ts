import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlySalesChartComponent } from '../../../shared/components/ecommerce/monthly-sales-chart/monthly-sales-chart.component';
import { MonthlyTargetComponent } from '../../../shared/components/ecommerce/monthly-target/monthly-target.component';
import { StatisticsChartComponent } from '../../../shared/components/ecommerce/statics-chart/statics-chart.component';
import { DemographicCardComponent } from '../../../shared/components/ecommerce/demographic-card/demographic-card.component';
import { RecentOrdersComponent } from '../../../shared/components/ecommerce/recent-orders/recent-orders.component';
import { IconComponent } from '../../../shared/components/ui/icon/icon.component';

@Component({
  selector: 'app-ecommerce',
  imports: [
    CommonModule,
    MonthlySalesChartComponent,
    MonthlyTargetComponent,
    StatisticsChartComponent,
    DemographicCardComponent,
    RecentOrdersComponent,
    IconComponent,
  ],
  templateUrl: './ecommerce.component.html',
})
export class EcommerceComponent {
  activeTab = 'overview';

  analyticsStats = [
    { label: 'Page Views', value: '48,293', change: '+12.5% from last month' },
    { label: 'Bounce Rate', value: '32.4%', change: '-2.1% from last month' },
    { label: 'Avg. Session', value: '4m 32s', change: '+8.3% from last month' },
    { label: 'Conversions', value: '1,429', change: '+18.7% from last month' },
  ];
}
