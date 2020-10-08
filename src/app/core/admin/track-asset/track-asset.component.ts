import { Component, OnInit, AfterViewInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as L from 'leaflet';
import 'mapbox-gl-leaflet';
import swal from 'sweetalert2';



am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-track-asset',
  templateUrl: './track-asset.component.html',
  styleUrls: ['./track-asset.component.scss']
})
export class TrackAssetComponent implements OnInit, AfterViewInit {

  chart: any
  private map: L.Map;

  icon = {
    icon: L.icon({
      iconSize: [32, 32],
      iconAnchor: [13, 0],
      iconUrl: '/assets/img/logo/marker.png',
    })
  };

  constructor(
    private zone: NgZone,
  ) { }

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement>;

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

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getPieChart()
      this.getChart()
    })
  }

  alertmsg() {
    swal.fire({
      title: "Success",
      text: "Successfully send signal to driver",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close"
    }).then((result) => {
    })
  }


  getPieChart() {
    let chart = am4core.create("trackchartdiv1", am4charts.PieChart);

    // Add data
    chart.data = [{
      "status": "Active",
      "total": 501.9
    }, {
      "status": "Non-active",
      "total": 301.9
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

  getChart() {
    let chart = am4core.create("trackchartdiv2", am4charts.XYChart);

    // Add data
    chart.data = [{
      "state": "Selangor",
      "total": 27
    }, {
      "state": "Perak",
      "total": 11
    }, {
      "state": "Johor",
      "total": 18
    }, {
      "state": "Pahang",
      "total": 31
    }, {
      "state": "Kedah",
      "total": 20
    }, {
      "state": "Perlis",
      "total": 3
    }, {
      "state": "Sabah",
      "total": 36
    },
    ];

    // Create axes

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "state";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;

    categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {

      return dy;
    });

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "total";
    series.dataFields.categoryX = "state";
    series.name = "Number of Lorry";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    series.columns.template.fillOpacity = .8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
  }

  ngAfterViewInit(): void {
    // var map = L.map('map', {
    //   center: [3.139003, 101.686852],
    //   zoom: 13
    // });

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    // }).addTo(map);
    // L.control.scale().addTo(map);

    const map = L.map('map').setView([3.0836354, 101.604402], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
      minZoom: 9,
    }).addTo(map);

    const coordinates = {
      Latitude: {
        '0': 3.184624,
        '1': 3.0836354,
        '2': 3.0429652,
        '3': 2.9948629,
        '4': 3.057648
      },
      Longitude: {
        '0': 101.535965,
        '1': 101.604402,
        '2': 101.370616,
        '3': 101.5234179,
        '4': 101.5594272
      },
      Description: {
        '0': '<b>Track No: QMA1234 </b><br>Coordinate: 3.127887, 101.604402 <br>Location: Subang Bestari<br>Driver Name: Amzar <br>Job ID: 2324 <br><br><button class="btn btn-sm btn-warning" type="button">Send signal</button>',
        '1': '<b>Track No: BCD7789 </b><br>Coordinate: 3.0836354, 101.594490 <br>Location: Petaling Jaya<br>Driver Name: Fizi <br>Job ID: 2324 <br><br><button class="btn btn-sm btn-warning" type="button">Send signal</button>',
        '2': '<b>Track No: VVR5532 </b><br>Coordinate: 3.0429652, 101.370616 <br>Location: Klang<br>Driver Name: Yus <br>Job ID: 2324 <br><br><button class="btn btn-sm btn-warning" type="button">Send signal</button>',
        '3': '<b>Track No: KRT2001 </b><br>Coordinate: 2.9948629, 101.5234179 <br>Location: Kota Kemuning<br>Driver Name: Syafiq <br>Job ID: 2324 <br><br><button class="btn btn-sm btn-warning" type="button">Send signal</button>',
        '4': '<b>Track No: MMU3300 </b><br>Coordinate: 3.057648, 101.5594272 <br>Location: USJ Height<br>Driver Name: Fadhli <br>Job ID: 2324 <br><br><button class="btn btn-sm btn-warning" type="button">Send signal</button>',
      },
    };

    for (let i = 0; i < Object.keys(coordinates.Latitude).length; i += 1) {
      const marker = L.marker([
        coordinates.Latitude[i.toString()],
        coordinates.Longitude[i.toString()],
      ], this.icon);
      marker.bindPopup(coordinates.Description[i.toString()]);

      marker.addTo(map);
    }

    // marker.on('mouseover', function (e) {
    //   this.openPopup();
    // });
    // marker.on('mouseout', function (e) {
    //   this.closePopup();
    // });


  }

}
