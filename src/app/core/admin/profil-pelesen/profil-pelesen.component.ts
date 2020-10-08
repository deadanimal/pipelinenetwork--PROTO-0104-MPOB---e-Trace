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
  selector: 'app-profil-pelesen',
  templateUrl: './profil-pelesen.component.html',
  styleUrls: ['./profil-pelesen.component.scss']
})
export class ProfilPelesenComponent implements OnInit {

  chart: any

  rows: any = [
    {
      company_name: "Serata Sdn Bhd",
      contact_number:"0344556677",
      license_no: "MD-2893",
      license_status: "active",
      location: "Kota Kinabalu, Sabah",
      status: "Supplier"
    },
    {
      company_name: "Palmer Sdn Bhd",
      contact_number:"034458888",
      license_no: "MD-2344",
      license_status: "active",
      location: "Kajang, Selangor",
      status: "Dealer"
    },
    {
      company_name: "Palm and Oil Sdn Bhd",
      contact_number:"030012566",
      license_no: "MD-W343",
      license_status: "active",
      location: "Kluang, Johor",
      status: "Dealer"
    },
    {
      company_name: "Maju Tani Sdn Bhd",
      contact_number:"034433047",
      license_no: "MD-2893",
      license_status: "active",
      location: "Kota Kinabalu, Sabah",
      status: "Supplier"
    },
    {
      company_name: "Mega Sdn Bhd",
      contact_number:"0344550987",
      license_no: "MD-2344",
      license_status: "active",
      location: "Kajang, Selangor",
      status: "Dealer"
    },
    {
      company_name: "Big Enterprise",
      contact_number:"0092856677",
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
  contact_number:string;
  license_no: string;
  license_status: string;
  location: string;
  status: string;

  viewData(row) {
    this.showModal = true; // Show-Hide Modal Check
    this.company_name = row.company_name;
    this.contact_number=row.contact_number;
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


}

