import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis, ApexStroke, ApexFill, ApexGrid, ApexDataLabels, ApexTooltip, ApexLegend, NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import { ChartColorsService } from '../../../../services/chart-colors.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-area-chart-one',
  standalone: true,
  imports: [NgApexchartsModule],
  template: `
    <div class="max-w-full overflow-x-auto custom-scrollbar">
      <div class="min-w-[600px] xl:min-w-full">
        <apx-chart #chartRef [series]="series" [chart]="chart" [colors]="colors" [stroke]="stroke" [fill]="fill"
          [grid]="grid" [dataLabels]="dataLabels" [tooltip]="tooltip" [xaxis]="xaxis" [yaxis]="yaxis" [legend]="legend"></apx-chart>
      </div>
    </div>
  `,
})
export class AreaChartOneComponent implements OnInit, OnDestroy {
  @ViewChild('chartRef') chartRef!: ChartComponent;
  private sub!: Subscription;
  constructor(private chartColors: ChartColorsService) {}

  public series: ApexAxisChartSeries = [
    { name: 'Revenue', data: [30, 40, 35, 50, 49, 60, 70, 91, 85, 95, 110, 100] },
    { name: 'Expenses', data: [20, 30, 25, 35, 30, 40, 45, 55, 50, 60, 65, 70] },
  ];
  public chart: ApexChart = { fontFamily: 'Inter, sans-serif', height: 310, type: 'area', toolbar: { show: false } };
  public colors: string[] = ['#0f172a', '#94a3b8'];
  public stroke: ApexStroke = { curve: 'smooth', width: [2, 2] };
  public fill: ApexFill = { type: 'gradient', gradient: { opacityFrom: 0.4, opacityTo: 0 } };
  public grid: ApexGrid = { xaxis: { lines: { show: false } }, yaxis: { lines: { show: true } } };
  public dataLabels: ApexDataLabels = { enabled: false };
  public tooltip: ApexTooltip = { enabled: true };
  public xaxis: ApexXAxis = { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], axisBorder: { show: false }, axisTicks: { show: false } };
  public yaxis: ApexYAxis = { labels: { style: { fontSize: '12px', colors: ['#64748b'] } } };
  public legend: ApexLegend = { show: true, position: 'top', horizontalAlign: 'left', fontFamily: 'Inter' };

  ngOnInit() {
    this.sub = this.chartColors.colors$.subscribe((c) => {
      this.colors = [c.primary, c.primaryLight];
      this.chartRef?.updateOptions({ colors: [c.primary, c.primaryLight] });
    });
  }
  ngOnDestroy() { this.sub?.unsubscribe(); }
}
