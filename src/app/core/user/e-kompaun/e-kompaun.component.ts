
import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_spiritedaway from "@amcharts/amcharts4/themes/spiritedaway";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';


am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_spiritedaway);

@Component({
  selector: 'app-e-kompaun',
  templateUrl: './e-kompaun.component.html',
  styleUrls: ['./e-kompaun.component.scss']
})
export class EKompaunComponent implements OnInit {

  chart: any

  rows: any = [
    {
      id: "34",
      name: "Compound 1",
      date: "2020-03-13T05:50:12Z",
      amount: "50000.00",
      location: "Kota Kinabalu, Sabah",
      status: "pending"
    },
    {
      id: "56",
      name: "Compound 2",
      date: "2019-10-08T01:26:15Z",
      amount: "34777.00",
      location: "Kajang, Selangor",
      status: "pending"
    },
    {
      id: "78",
      name: "Compound 3",
      date: "2019-10-08T01:26:15Z",
      amount: "40939.00",
      location: "Kluang, Johor",
      status: "completed"
    }
  ]

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog"
  };

  constructor(
    private zone: NgZone,
    private modalService: BsModalService
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

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
  }

  showModal: boolean;
  showModalPayment: boolean;
  id: string;
  name: string;
  date: string;
  amount: string;
  location: string;
  status: string;

  viewData(row) {
    this.showModal = true; // Show-Hide Modal Check
    this.id = row.id;
    this.name = row.name;
    this.date = row.date;
    this.amount = row.amount;
    this.location = row.location;
    this.status = row.status;
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
    this.showModalPayment = false;
  }

  OpenModalPayment() {
    this.showModalPayment = true;
    this.showModal = false;
  }
  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getPieChart()
      this.getBarChart()
    })
  }

  getPieChart() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("piechartdiv1", am4charts.PieChart);

    // Add data
    chart.data = [{
      "status": "Pending",
      "percent": 30.7,
    }, {
      "status": "Completed",
      "percent": 70.3,
    }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "percent";
    pieSeries.dataFields.category = "status";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
  }

  getBarChart() {
    let chart = am4core.create("barchartdiv1", am4charts.XYChart);

    // Export
    chart.exporting.menu = new am4core.ExportMenu();

    // Data for both series
    let data = [{
      "year": "2009",
      "total": 23.5,
      "payment": 21.1
    }, {
      "year": "2010",
      "total": 26.2,
      "payment": 30.5
    }, {
      "year": "2011",
      "total": 30.1,
      "payment": 34.9
    }, {
      "year": "2012",
      "total": 29.5,
      "payment": 31.1
    }, {
      "year": "2013",
      "total": 30.6,
      "payment": 28.2,
      "lineDash": "5,5",
    }, {
      "year": "2014",
      "total": 34.1,
      "payment": 32.9,
      "strokeWidth": 1,
      "columnDash": "5,5",
      "fillOpacity": 0.2,
      "additional": "(projection)"
    }];

    /* Create axes */
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "year";
    categoryAxis.renderer.minGridDistance = 30;

    /* Create value axis */
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    /* Create series */
    let columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = "Total amount to pay";
    columnSeries.dataFields.valueY = "total";
    columnSeries.dataFields.categoryX = "year";

    columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
    columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
    columnSeries.columns.template.propertyFields.stroke = "stroke";
    columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
    columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
    columnSeries.tooltip.label.textAlign = "middle";

    let lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = "Payement made";
    lineSeries.dataFields.valueY = "payment";
    lineSeries.dataFields.categoryX = "year";

    lineSeries.stroke = am4core.color("#fdd400");
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.strokeDasharray = "lineDash";
    lineSeries.tooltip.label.textAlign = "middle";

    let bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color("#fdd400"); // tooltips grab fill from parent by default
    bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
    let circle = bullet.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color("#fff");
    circle.strokeWidth = 3;

    chart.data = data;

  }

}
