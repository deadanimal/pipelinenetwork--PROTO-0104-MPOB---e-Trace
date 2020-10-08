import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import swal from 'sweetalert2';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.scss']
})
export class MytaskComponent implements OnInit, OnDestroy {

  chart: any

  rows: any = [
    {
      id:"1",
      task_name: "Testing",
      date: "2020-03-13T05:50:12Z",
      note: "Cras tincidunt, tortor ultricies auctor fermentum, tellus augue semper augue, sed tincidunt felis enim eget sem. Suspendisse pulvinar sem ut turpis malesuada varius. Phasellus eget dui nec lacus aliquam cursus ac at nisl. Pellentesque malesuada nisl eu aliquam luctus. Morbi ut tristique ex, vitae convallis ligula. Fusce at ornare neque. Sed enim metus, consequat vitae erat nec, eleifend aliquet magna.",
      status: "pending"
    },
    {
      id:"2",
      task_name: "Development",
      date: "2019-10-08T01:26:15Z",
      note: "Cras tincidunt, tortor ultricies auctor fermentum, tellus augue semper augue, sed tincidunt felis enim eget sem. Suspendisse pulvinar sem ut turpis malesuada varius. Phasellus eget dui nec lacus aliquam cursus ac at nisl. Pellentesque malesuada nisl eu aliquam luctus. Morbi ut tristique ex, vitae convallis ligula. Fusce at ornare neque. Sed enim metus, consequat vitae erat nec, eleifend aliquet magna.",
      status: "In Progress"
    },
    {
      id:"3",
      task_name: "Design",
      date: "019-10-08T01:26:15Z",
      note: "Cras tincidunt, tortor ultricies auctor fermentum, tellus augue semper augue, sed tincidunt felis enim eget sem. Suspendisse pulvinar sem ut turpis malesuada varius. Phasellus eget dui nec lacus aliquam cursus ac at nisl. Pellentesque malesuada nisl eu aliquam luctus. Morbi ut tristique ex, vitae convallis ligula. Fusce at ornare neque. Sed enim metus, consequat vitae erat nec, eleifend aliquet magna.",
      status: "Completed"
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
  task_name: string;
  date: string;
  note: string;
  status: string;

  viewData(row) {
    this.showModal = true; // Show-Hide Modal Check
    this.id = row.id;
    this.task_name = row.task_name;
    this.date = row.date;
    this.note = row.note;
    this.status = row.status;
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
    this.showModalPayment = false;
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

  deleteData(row) {

    let modalText = row.id + " " + row.task_name;

    swal.fire({
      title: "Tasks Details",
      text: modalText,
      showCancelButton: true,
      buttonsStyling: false,
      confirmButtonClass: 'btn btn-danger',
      confirmButtonText: 'Yes',
      cancelButtonClass: 'btn btn-secondary'
    }).then((result) => {
      if (result.value) {
        // Show confirmation
        swal.fire({
          title: 'Deleted!',
          text: 'The record has been deleted.',
          type: 'success',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-dark'
        });
      }
    })
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getPieChart()
    })
  }


  getPieChart() {
    let chart = am4core.create("piechartdiv6", am4charts.PieChart);

    // Add data
    chart.data = [{
      "status": "Pending",
      "total": 501.9
    }, {
      "status": "In-Progress",
      "total": 301.9
    }, {
      "status": "Completed",
      "total": 201.1
    },
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "total";
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
