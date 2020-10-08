import { NgZone } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  images = ["assets/img/theme/mpob-web.jpg", "assets/img/theme/mpob-web2.jpg", "assets/img/theme/mpob-web.jpg"]

  chart: any

  rows: any = [
    "Review of the Malaysian Oil Palm Industry 2018",
    "Oil Palm Bulletin",
    "Oil Palm Industry Economic Journal",
    "Annual Research Review 2018",
    "Malaysian Oil Palm Statistics 2018"
  ]


  constructor(
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.getCharts()
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose()
      }
    })
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getStockChart()
    })
  }

  getStockChart() {
    let chart = am4core.create("stockchart", am4charts.XYChart);

    // Add data
    chart.data = [
      { date: new Date(2019, 5, 12), value1: 50, value2: 48, previousDate: new Date(2019, 5, 5) },
      { date: new Date(2019, 5, 13), value1: 53, value2: 51, previousDate: new Date(2019, 5, 6) },
      { date: new Date(2019, 5, 14), value1: 56, value2: 58, previousDate: new Date(2019, 5, 7) },
      { date: new Date(2019, 5, 15), value1: 52, value2: 53, previousDate: new Date(2019, 5, 8) },
      { date: new Date(2019, 5, 16), value1: 48, value2: 44, previousDate: new Date(2019, 5, 9) },
      { date: new Date(2019, 5, 17), value1: 47, value2: 42, previousDate: new Date(2019, 5, 10) },
      { date: new Date(2019, 5, 18), value1: 59, value2: 55, previousDate: new Date(2019, 5, 11) }
    ]

    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value1";
    series.dataFields.dateX = "date";
    series.strokeWidth = 2;
    series.minBulletDistance = 10;
    series.tooltipText = "[bold]{date.formatDate()}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}";
    series.tooltip.pointerOrientation = "vertical";

    // Create series
    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "value2";
    series2.dataFields.dateX = "date";
    series2.strokeWidth = 2;
    series2.strokeDasharray = "3,4";
    series2.stroke = series.stroke;

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;

  }

}
