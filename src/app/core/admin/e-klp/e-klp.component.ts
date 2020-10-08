import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';


@Component({
  selector: 'app-e-klp',
  templateUrl: './e-klp.component.html',
  styleUrls: ['./e-klp.component.scss']
})
export class EKlpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
    })
  }
}
