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
  selector: 'app-e-ffb-directory',
  templateUrl: './e-ffb-directory.component.html',
  styleUrls: ['./e-ffb-directory.component.scss']
})
export class EFfbDirectoryComponent implements OnInit {

  chart: any

  rows: any = [
    {
      company_name: "Serata Sdn Bhd",
      license_no: "MD-2893",
      license_status: "active",
      location: "Kota Kinabalu, Sabah",
      status: "Supplier"
    },
    {
      company_name: "Palmer Sdn Bhd",
      license_no: "MD-2344",
      license_status: "active",
      location: "Kajang, Selangor",
      status: "Dealer"
    },
    {
      company_name: "Palm and Oil Sdn Bhd",
      license_no: "MD-W343",
      license_status: "active",
      location: "Kluang, Johor",
      status: "Dealer"
    },
    {
      company_name: "Maju Tani Sdn Bhd",
      license_no: "MD-2893",
      license_status: "active",
      location: "Kota Kinabalu, Sabah",
      status: "Supplier"
    },
    {
      company_name: "Mega Sdn Bhd",
      license_no: "MD-2344",
      license_status: "active",
      location: "Kajang, Selangor",
      status: "Dealer"
    },
    {
      company_name: "Big Enterprise",
      license_no: "MD-W343",
      license_status: "active",
      location: "Kluang, Johor",
      status: "Dealer"
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
  license_status: string;
  location: string;
  status: string;

  viewData(row) {
    this.showModal = true; // Show-Hide Modal Check
    this.company_name = row.company_name;
    this.license_no = row.license_no;
    this.license_status=row.license_status;
    this.location = row.location;
    this.status = row.status;
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
    this.showModalPayment = false;
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getPieChart()
    })
  }

  getPieChart() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("piechartdiv6", am4charts.PieChart);

    // Add data
    chart.data = [{
      "status": "Supplier",
      "percent": 30.7,
    }, {
      "status": "Dealer",
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


}
