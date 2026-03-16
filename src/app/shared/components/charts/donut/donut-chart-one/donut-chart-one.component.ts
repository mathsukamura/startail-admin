import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexLegend, ApexDataLabels, ApexPlotOptions, ApexTooltip, ApexStroke, NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import { ChartColorsService } from '../../../../services/chart-colors.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-donut-chart-one',
  standalone: true,
  imports: [NgApexchartsModule],
  template: `
    <div class="max-w-full">
      <apx-chart #chartRef [series]="series" [chart]="chart" [labels]="labels" [colors]="colors"
        [legend]="legend" [dataLabels]="dataLabels" [plotOptions]="plotOptions"
        [tooltip]="tooltip" [stroke]="stroke"></apx-chart>
    </div>
  `,
})
export class DonutChartOneComponent implements OnInit, OnDestroy {
  @ViewChild('chartRef') chartRef!: ChartComponent;
  private sub!: Subscription;
  constructor(private chartColors: ChartColorsService) {}

  public series: ApexNonAxisChartSeries = [35, 30, 20, 15];
  public chart: ApexChart = { fontFamily: 'Inter, sans-serif', type: 'donut', height: 310, toolbar: { show: false } };
  public labels: string[] = ['Sales', 'Marketing', 'Support', 'Development'];
  public colors: string[] = ['#0f172a', '#334155', '#64748b', '#cbd5e1'];
  public legend: ApexLegend = { show: true, position: 'bottom', fontFamily: 'Inter' };
  public dataLabels: ApexDataLabels = { enabled: false };
  public plotOptions: ApexPlotOptions = { pie: { donut: { size: '65%', labels: { show: true, total: { show: true, label: 'Total', fontFamily: 'Inter', fontWeight: 600 } } } } };
  public tooltip: ApexTooltip = { enabled: true };
  public stroke: ApexStroke = { width: 2, colors: ['#ffffff'] };

  ngOnInit() {
    this.sub = this.chartColors.colors$.subscribe((c) => {
      this.colors = c.set;
      this.stroke = { width: 2, colors: [c.muted === '#334155' ? '#1e293b' : '#ffffff'] };
      this.chartRef?.updateOptions({ colors: c.set, stroke: this.stroke });
    });
  }
  ngOnDestroy() { this.sub?.unsubscribe(); }
}
