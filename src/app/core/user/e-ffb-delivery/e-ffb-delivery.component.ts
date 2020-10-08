import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_spiritedaway from "@amcharts/amcharts4/themes/spiritedaway";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

import swal from 'sweetalert2';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_spiritedaway);

@Component({
  selector: 'app-e-ffb-delivery',
  templateUrl: './e-ffb-delivery.component.html',
  styleUrls: ['./e-ffb-delivery.component.scss']
})
export class EFfbDeliveryComponent implements OnInit {

  chart: any

  rows: any = [
    {
      company_name: "Serata Sdn Bhd",
      date: "2020-03-13T05:50:12Z",
      license_no: "MD-2893",
      quantity: "10 Tonne",
      price: "78344.00",
      location: "Kota Kinabalu, Sabah",
      status: "Pending"
    },
    {
      company_name: "Palmer Sdn Bhd",
      date: "2019-10-08T01:26:15Z",
      license_no: "MD-2344",
      quantity: "5 Tonne",
      price: "56344.00",
      location: "Kajang, Selangor",
      status: "Delivered"
    },
    {
      company_name: "Palm and Oil Sdn Bhd",
      date: "2019-10-08T01:26:15Z",
      license_no: "MD-W343",
      quantity: "3 Tonne",
      price: "23444.00",
      location: "Kluang, Johor",
      status: "Delivered"
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
  company_name: string;
  license_no: string;
  date: string;
  quantity: string;
  price:string;
  location: string;
  status: string;

  viewData(row) {
    this.showModal = true; // Show-Hide Modal Check
    this.company_name = row.company_name;
    this.license_no = row.license_no;
    this.date = row.date;
    this.quantity = row.quantity;
    this.price=row.price;
    this.location = row.location;
    this.status = row.status;
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
    this.showModalPayment = false;
  }

  create() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to create this entry? A delivery note will be generated.",
      type: "info",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-dark",
      confirmButtonText: "Confirm",
      showCancelButton: true,
      cancelButtonClass: "btn btn-danger",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.value) {
        this.deliveryNote()
      }
    })
  }

  deliveryNote(){
    swal.fire({
      title: "Success",
      text: "Delivery note generated!",
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
      this.getPieChart()
      this.getBarChart()
    })
  }

  getPieChart() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("piechartdiv5", am4charts.PieChart);

    // Add data
    chart.data = [{
      "status": "Pending",
      "percent": 30.7,
    }, {
      "status": "Delivered",
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

    let chart = am4core.create("barchartdiv5", am4charts.XYChart);
    chart.scrollbarX = new am4core.Scrollbar();

    // Add data
    chart.data = [{
      "month": "Jan",
      "total": 3
    }, {
      "month": "Feb",
      "total": 8
    }, {
      "month": "March",
      "total": 7
    }, {
      "month": "April",
      "total": 11
    }, {
      "month": "May",
      "total": 12
    }, {
      "month": "Jun",
      "total": 8
    }, {
      "month": "July",
      "total": 3
    }, {
      "month": "Aug",
      "total": 1
    }, {
      "month": "Sept",
      "total": 3
    }, {
      "month": "Oct",
      "total": 9
    }, {
      "month": "Nov",
      "total": 13
    }, {
      "month": "Dec",
      "total": 15
    }];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
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
    series.dataFields.categoryX = "month";
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
