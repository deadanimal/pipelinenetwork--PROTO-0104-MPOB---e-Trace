import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-notis',
  templateUrl: './e-notis.component.html',
  styleUrls: ['./e-notis.component.scss']
})
export class ENotisComponent implements OnInit {

  images = ["assets/img/theme/mpob-web2.jpg", "assets/img/theme/mpob-web3.jpg", "assets/img/theme/mpob-web4.jpg", "assets/img/theme/mpob-web5.jpg"]

  rows: any = [
    "Review of the Malaysian Oil Palm Industry 2018",
    "Oil Palm Bulletin",
    "Oil Palm Industry Economic Journal",
    "Annual Research Review 2018",
    "Malaysian Oil Palm Statistics 2018"
  ]

  constructor() { }

  ngOnInit() {
  }

}
