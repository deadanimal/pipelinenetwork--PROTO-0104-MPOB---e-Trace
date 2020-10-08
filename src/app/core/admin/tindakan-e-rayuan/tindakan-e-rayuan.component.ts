import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-tindakan-e-rayuan',
  templateUrl: './tindakan-e-rayuan.component.html',
  styleUrls: ['./tindakan-e-rayuan.component.scss']
})
export class TindakanERayuanComponent implements OnInit {

  chart: any

  rows: any = [
    {
      name: "Ahmad Muizam",
      email: "muizam@serata.com.my",
      company_name: "Serata Sdn Bhd",
      date: "2020-03-13T05:50:12Z",
      amount: "4500.00",
      requested_amount: "4000.00",
      approved_amount: "0",
      type: "reduction",
      location: "Kota Kinabalu, Sabah",
      status: "In Progress",
    },
    {
      name: "Safia",
      email: "safia@palmer.com",
      company_name: "Palmer Sdn Bhd",
      date: "2019-10-08T01:26:15Z",
      amount: "13530",
      requested_amount: "10200.00",
      approved_amount: "0",
      type: "reduction",
      location: "Kajang, Selangor",
      status: "In Progress",
    },
    {
      name: "Steven Tan",
      email: "steven@palmandoil.com.my",
      company_name: "Palm and Oil Sdn Bhd",
      date: "2019-10-18T03:10:12Z",
      amount: "2300",
      requested_amount: "0.00",
      approved_amount: "0.00",
      type: "cancellation",
      location: "Kluang, Johor",
      status: "Approved",
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
  name: string;
  company_name: string;
  email: string;
  date: string;
  amount: string;
  requested_amount: string;
  approved_amount: string;
  type: string;
  location: string;
  status: string;

  viewData(row) {
    this.showModal = true; // Show-Hide Modal Check
    this.name = row.name;
    this.company_name = row.company_name;
    this.email = row.email;
    this.date = row.date;
    this.amount = row.amount;
    this.requested_amount = row.requested_amount;
    this.approved_amount = row.approved_amount;
    this.type = row.type;
    this.location = row.location;
    this.status = row.status;
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart1();
      this.getChart2();
    })
  }

  getChart1() {

    let chart = am4core.create("adminrayuanchartdiv1", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [{
      "status": "Pending",
      "total": 200
    }, {
      "status": "In Process",
      "total": 358
    }, {
      "status": "Approved",
      "total": 390
    }, {
      "status": "Rejected",
      "total": 121
    },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "status";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "total";
    series.dataFields.categoryX = "status";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    // Cursor
    chart.cursor = new am4charts.XYCursor();

  }

  getChart2() {
    let chart = am4core.create("adminrayuanchartdiv2", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        status: "Appeal for Reduction",
        total: 501.9
      },
      {
        status: "Appeal for Cancellation",
        total: 301.9
      },
    ];

    chart.innerRadius = 100;

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "total";
    series.dataFields.category = "status";
  }
}

