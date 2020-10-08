import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-profile-detail',
  templateUrl: './update-profile-detail.component.html',
  styleUrls: ['./update-profile-detail.component.scss']
})
export class UpdateProfileDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  confirm() {
    swal.fire({
      title: "Confirmation",
      text: "Are you sure to submit this information?",
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
      text: "The information has been submitted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    })
  }
}
