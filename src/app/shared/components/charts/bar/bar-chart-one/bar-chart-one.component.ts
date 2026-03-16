import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexStroke, ApexXAxis, ApexYAxis, ApexLegend, ApexGrid, ApexFill, ApexTooltip, NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import { ChartColorsService } from '../../../../services/chart-colors.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bar-chart-one',
  imports: [NgApexchartsModule],
  templateUrl: './bar-chart-one.component.html',
})
export class BarChartOneComponent implements OnInit, OnDestroy {
  @ViewChild('chartRef') chartRef!: ChartComponent;
  private sub!: Subscription;
  constructor(private chartColors: ChartColorsService) {}

  public series: ApexAxisChartSeries = [{ name: 'Sales', data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112] }];
  public chart: ApexChart = { fontFamily: 'Inter, sans-serif', type: 'bar', height: 180, toolbar: { show: false } };
  public colors: string[] = ['#0f172a'];
  public plotOptions: ApexPlotOptions = { bar: { horizontal: false, columnWidth: '39%', borderRadius: 5, borderRadiusApplication: 'end' } };
  public dataLabels: ApexDataLabels = { enabled: false };
  public stroke: ApexStroke = { show: true, width: 4, colors: ['transparent'] };
  public xaxis: ApexXAxis = { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], axisBorder: { show: false }, axisTicks: { show: false } };
  public yaxis: ApexYAxis = { title: { text: undefined } };
  public legend: ApexLegend = { show: true, position: 'top', horizontalAlign: 'left', fontFamily: 'Inter' };
  public grid: ApexGrid = { yaxis: { lines: { show: true } } };
  public fill: ApexFill = { opacity: 1 };
  public tooltip: ApexTooltip = { x: { show: false }, y: { formatter: (val: number) => `${val}` } };

  ngOnInit() {
    this.sub = this.chartColors.colors$.subscribe((c) => {
      this.colors = [c.primary];
      this.chartRef?.updateOptions({ colors: [c.primary] });
    });
  }
  ngOnDestroy() { this.sub?.unsubscribe(); }
}
