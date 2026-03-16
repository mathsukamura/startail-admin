import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexPlotOptions, ApexDataLabels, ApexStroke, ApexLegend, ApexYAxis, ApexGrid, ApexFill, ApexTooltip, ChartComponent } from 'ng-apexcharts';
import { ChartColorsService, ChartColors } from '../../../services/chart-colors.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-monthly-sales-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './monthly-sales-chart.component.html',
})
export class MonthlySalesChartComponent implements OnInit, OnDestroy {
  @ViewChild('chartRef') chartRef!: ChartComponent;
  private sub!: Subscription;

  constructor(private chartColors: ChartColorsService) {}

  public series: ApexAxisChartSeries = [
    { name: 'Sales', data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112] },
  ];
  public chart: ApexChart = { fontFamily: 'Inter, sans-serif', type: 'bar', height: 300, toolbar: { show: false } };
  public xaxis: ApexXAxis = { categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], axisBorder: { show: false }, axisTicks: { show: false } };
  public plotOptions: ApexPlotOptions = { bar: { horizontal: false, columnWidth: '39%', borderRadius: 5, borderRadiusApplication: 'end' } };
  public dataLabels: ApexDataLabels = { enabled: false };
  public stroke: ApexStroke = { show: true, width: 4, colors: ['transparent'] };
  public legend: ApexLegend = { show: false };
  public yaxis: ApexYAxis = { title: { text: undefined } };
  public grid: ApexGrid = { yaxis: { lines: { show: true } } };
  public fill: ApexFill = { opacity: 1 };
  public tooltip: ApexTooltip = { x: { show: false }, y: { formatter: (val: number) => `${val}` } };
  public colors: string[] = ['#0f172a'];

  ngOnInit() {
    this.sub = this.chartColors.colors$.subscribe((c) => {
      this.colors = [c.primary];
      this.chartRef?.updateOptions({ colors: [c.primary] });
    });
  }

  ngOnDestroy() { this.sub?.unsubscribe(); }
}
