import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ApexNonAxisChartSeries, ApexChart, ApexPlotOptions, ApexFill, ApexStroke, NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import { ChartColorsService } from '../../../services/chart-colors.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-monthly-target',
  imports: [NgApexchartsModule],
  templateUrl: './monthly-target.component.html',
  host: { class: 'contents' },
})
export class MonthlyTargetComponent implements OnInit, OnDestroy {
  @ViewChild('chartRef') chartRef!: ChartComponent;
  private sub!: Subscription;

  constructor(private chartColors: ChartColorsService) {}

  public series: ApexNonAxisChartSeries = [75.55];
  public chart: ApexChart = { fontFamily: 'Inter, sans-serif', type: 'radialBar', height: 260, sparkline: { enabled: true } };
  public plotOptions: ApexPlotOptions = {
    radialBar: {
      startAngle: -85, endAngle: 85,
      hollow: { size: '80%' },
      track: { background: '#e2e8f0', strokeWidth: '100%', margin: 5 },
      dataLabels: { name: { show: false }, value: { fontSize: '30px', fontWeight: '600', offsetY: -40, color: '#0f172a', formatter: (val: number) => `${val}%` } },
    },
  };
  public fill: ApexFill = { type: 'solid', colors: ['#0f172a'] };
  public stroke: ApexStroke = { lineCap: 'round' };
  public labels: string[] = ['Progress'];
  public colors: string[] = ['#0f172a'];

  ngOnInit() {
    this.sub = this.chartColors.colors$.subscribe((c) => {
      this.colors = [c.primary];
      this.fill = { type: 'solid', colors: [c.primary] };
      this.plotOptions = {
        ...this.plotOptions,
        radialBar: {
          ...this.plotOptions.radialBar,
          track: { ...this.plotOptions.radialBar!.track, background: c.track },
          dataLabels: { ...this.plotOptions.radialBar!.dataLabels, value: { ...(this.plotOptions.radialBar!.dataLabels!.value as any), color: c.primary } },
        },
      };
      this.chartRef?.updateOptions({ colors: [c.primary], fill: this.fill, plotOptions: this.plotOptions });
    });
  }
  ngOnDestroy() { this.sub?.unsubscribe(); }
}
