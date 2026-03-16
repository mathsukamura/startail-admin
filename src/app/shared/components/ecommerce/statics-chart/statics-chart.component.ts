import { AfterViewInit, Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import flatpickr from 'flatpickr';
import { Instance } from 'flatpickr/dist/types/instance';
import { NgApexchartsModule, ChartComponent } from 'ng-apexcharts';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexMarkers, ApexStroke, ApexTooltip, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { ChartTabComponent } from '../../common/chart-tab/chart-tab.component';
import { ChartColorsService } from '../../../services/chart-colors.service';
import { IconComponent } from '../../ui/icon/icon.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-statics-chart',
  imports: [NgApexchartsModule, ChartTabComponent, IconComponent],
  templateUrl: './statics-chart.component.html',
})
export class StatisticsChartComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('datepicker') datepicker!: ElementRef<HTMLInputElement>;
  @ViewChild('chartRef') chartRef!: ChartComponent;
  private sub!: Subscription;

  constructor(private chartColors: ChartColorsService) {}

  ngAfterViewInit() {
    flatpickr(this.datepicker.nativeElement, {
      mode: 'range', static: true, monthSelectorType: 'static', dateFormat: 'M j',
      defaultDate: [new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), new Date()],
      onReady: (s: Date[], str: string, inst: Instance) => { (inst.element as HTMLInputElement).value = str.replace('to', '-'); },
      onChange: (s: Date[], str: string, inst: Instance) => { (inst.element as HTMLInputElement).value = str.replace('to', '-'); },
    });
  }

  public series: ApexAxisChartSeries = [
    { name: 'Sales', data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235] },
    { name: 'Revenue', data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140] },
  ];
  public chart: ApexChart = { fontFamily: 'Inter, sans-serif', height: 310, type: 'area', toolbar: { show: false } };
  public colors: string[] = ['#0f172a', '#94a3b8'];
  public stroke: ApexStroke = { curve: 'straight', width: [2, 2] };
  public fill: ApexFill = { type: 'gradient', gradient: { opacityFrom: 0.55, opacityTo: 0 } };
  public markers: ApexMarkers = { size: 0, strokeColors: '#fff', strokeWidth: 2, hover: { size: 6 } };
  public grid: ApexGrid = { xaxis: { lines: { show: false } }, yaxis: { lines: { show: true } } };
  public dataLabels: ApexDataLabels = { enabled: false };
  public tooltip: ApexTooltip = { enabled: true, x: { format: 'dd MMM yyyy' } };
  public xaxis: ApexXAxis = { type: 'category', categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], axisBorder: { show: false }, axisTicks: { show: false }, tooltip: { enabled: false } };
  public yaxis: ApexYAxis = { labels: { style: { fontSize: '12px', colors: ['#6B7280'] } }, title: { text: '', style: { fontSize: '0px' } } };
  public legend: ApexLegend = { show: false };

  ngOnInit() {
    this.sub = this.chartColors.colors$.subscribe((c) => {
      this.colors = [c.primary, c.primaryLight];
      this.chartRef?.updateOptions({ colors: [c.primary, c.primaryLight] });
    });
  }
  ngOnDestroy() { this.sub?.unsubscribe(); }
}
