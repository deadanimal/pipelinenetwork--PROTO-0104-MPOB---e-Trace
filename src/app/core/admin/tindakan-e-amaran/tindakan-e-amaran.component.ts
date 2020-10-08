
import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-tindakan-e-amaran',
  templateUrl: './tindakan-e-amaran.component.html',
  styleUrls: ['./tindakan-e-amaran.component.scss']
})
export class TindakanEAmaranComponent implements OnInit {

  chart: any

  rows: any = [
    {
      company_name: "Serata Sdn Bhd",
      contact_number: "03-98377784",
      date: "2020-03-13T05:50:12Z",
      note: "Vestibulum dictum neque eros, ut auctor nisi cursus non. Aenean ornare augue non arcu pharetra egestas. Nunc ut pretium quam. Pellentesque at velit nec sapien hendrerit gravida. Nullam quis mollis neque. Donec sollicitudin sapien vel tellus sollicitudin porta. Praesent ex lectus, eleifend quis velit et, viverra imperdiet ex.",
      location: "Kota Kinabalu, Sabah",
      status: "In Progress",
    },
    {
      company_name: "Palmer Sdn Bhd",
      contact_number: "03-88887784",
      date: "2019-10-08T01:26:15Z",
      note: "Vestibulum dictum neque eros, ut auctor nisi cursus non. Aenean ornare augue non arcu pharetra egestas. Nunc ut pretium quam. Pellentesque at velit nec sapien hendrerit gravida. Nullam quis mollis neque. Donec sollicitudin sapien vel tellus sollicitudin porta. Praesent ex lectus, eleifend quis velit et, viverra imperdiet ex.",
      location: "Kajang, Selangor",
      status: "In Progress",
    },
    {
      company_name: "Palm and Oil Sdn Bhd",
      contact_number: "03-43217000",
      date: "2019-10-18T03:10:12Z",
      note:"Vestibulum dictum neque eros, ut auctor nisi cursus non. Aenean ornare augue non arcu pharetra egestas. Nunc ut pretium quam. Pellentesque at velit nec sapien hendrerit gravida. Nullam quis mollis neque. Donec sollicitudin sapien vel tellus sollicitudin porta. Praesent ex lectus, eleifend quis velit et, viverra imperdiet ex.",
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
  company_name: string;
  contact_number: string;
  date: string;
  note: string;
  location: string;
  status: string;

  viewData(row) {
    this.showModal = true; // Show-Hide Modal Check
    this.company_name = row.company_name;
    this.contact_number=row.contact_number;
    this.date = row.date;
    this.note = row.note;
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
    })
  }

  getChart1() {

    let chart = am4core.create("adminamaranchartdiv", am4charts.XYChart);
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


