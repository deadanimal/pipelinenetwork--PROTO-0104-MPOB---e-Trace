import { BsModalRef } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-e-aduan',
  templateUrl: './e-aduan.component.html',
  styleUrls: ['./e-aduan.component.scss']
})
export class EAduanComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit() {
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to submit this complaint?",
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
      text: "The complaint has been submitted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    })
  }
}
