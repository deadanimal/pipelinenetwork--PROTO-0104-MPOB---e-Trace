import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import swal from 'sweetalert2';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-tindakan-e-mahkamah',
  templateUrl: './tindakan-e-mahkamah.component.html',
  styleUrls: ['./tindakan-e-mahkamah.component.scss']
})
export class TindakanEMahkamahComponent implements OnInit {

  chart: any

  rows: any = [
    {
      company_name: "Serata Sdn Bhd",
      license_no: "D-3456",
      date: "2020-03-13T05:50:12Z",
      offence: "Expired license",
      location: "Kota Kinabalu, Sabah",
      status: "In Progress",
    },
    {
      license_no: "D-3226",
      company_name: "Palmer Sdn Bhd",
      date: "2019-10-08T01:26:15Z",
      offence: "Weighing scale fraud",
      location: "Kajang, Selangor",
      status: "In Progress",
    },
    {
      license_no: "D-1116",
      company_name: "Palm and Oil Sdn Bhd",
      date: "2019-10-18T03:10:12Z",
      offence: "Expired license",
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
  license_no:string;
  date: string;
  offence: string;
  location: string;
  status: string;

  viewData(row) {
    this.showModal = true; // Show-Hide Modal Check
    this.license_no = row.license_no;
    this.company_name = row.company_name;
    this.date = row.date;
    this.offence = row.offence;
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
      this.getChart2();
    })
  }

  getChart2() {
    let chart = am4core.create("adminmahkamahchartdiv2", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.legend = new am4charts.Legend();

    chart.data = [
      {
        status: "Pending",
        total: 101.9
      },
      {
        status: "In Progress",
        total: 501.9
      },
      {
        status: "Approved",
        total: 301.9
      },
      {
        status: "Rejected",
        total: 101.9
      },
    ];

    chart.innerRadius = 100;

    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "total";
    series.dataFields.category = "status";
  }
}


