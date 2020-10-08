
import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import swal from 'sweetalert2';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-tindakan-e-kompaun',
  templateUrl: './tindakan-e-kompaun.component.html',
  styleUrls: ['./tindakan-e-kompaun.component.scss']
})
export class TindakanEKompaunComponent implements OnInit {


  chart: any

  rows: any = [
    {
      name: "Ahmad Muizam",
      email: "muizam@serata.com.my",
      company_name: "Serata Sdn Bhd",
      date: "2020-03-13T05:50:12Z",
      amount: "4500.00",
      location: "Kota Kinabalu, Sabah",
      status: "In Progress",
    },
    {
      name: "Safia",
      email: "safia@palmer.com",
      company_name: "Palmer Sdn Bhd",
      date: "2019-10-08T01:26:15Z",
      amount: "13530.00",
      location: "Kajang, Selangor",
      status: "In Progress",
    },
    {
      name: "Steven Tan",
      email: "steven@palmandoil.com.my",
      company_name: "Palm and Oil Sdn Bhd",
      date: "2019-10-18T03:10:12Z",
      amount: "2300.00",
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
  location: string;
  status: string;

  viewData(row) {
    this.showModal = true; // Show-Hide Modal Check
    this.name = row.name;
    this.company_name = row.company_name;
    this.email = row.email;
    this.date = row.date;
    this.amount = row.amount;
    this.location = row.location;
    this.status = row.status;
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to update this data?",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-dark",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.register()
      }
    })
  }

  register() {
    swal.fire({
      title: "Success",
      text: "Successfully updated!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    }).then((result) => {
      if (result.value) {
        this.modal.hide()
      }
    })
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart();
    })
  }

  getChart() {

    let chart = am4core.create("adminkompaunchartdiv", am4charts.XYChart);
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
}
