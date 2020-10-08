import { Component, OnInit, OnDestroy, NgZone, TemplateRef } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_dataviz);

@Component({
  selector: 'app-e-aduan',
  templateUrl: './e-aduan.component.html',
  styleUrls: ['./e-aduan.component.scss']
})
export class EAduanComponent implements OnInit {


  chart: any
  clicked: any = true
  clicked1: any = false

  rows: any = [
    {
      complainer_name: "Ahmad Muizam",
      company_name: "Serata Sdn Bhd",
      email: "muizam@gmail.com",
      date: "2020-03-13T05:50:12Z",
      type: "Employment",
      complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location: "Kota Kinabalu, Sabah",
      status:"Pending",
    },
    {
      complainer_name: "Safia",
      email: "safia@gmail.com",
      company_name: "Palmer Sdn Bhd",
      date: "2019-10-08T01:26:15Z",
      type: "Licensing",
      complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location: "Kajang, Selangor",
      status:"In Progress",
    },
    {
      complainer_name: "Steven Tan",
      email: "steven@gmail.com",
      company_name: "Palm and Oil Sdn Bhd",
      date: "2019-10-18T03:10:12Z",
      type: "Compound/Enforcement",
      complaint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      location: "Kluang, Johor",
      status:"Closed",
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
  complainer_name: string;
  company_name: string;
  email: string;
  date: string;
  type:string;
  complaint: string;
  location: string;
  status:string;

  viewData(row) {
    this.showModal = true; // Show-Hide Modal Check
    this.complainer_name=row.complainer_name;
    this.company_name = row.company_name;
    this.email=row.email;
    this.date = row.date;
    this.type=row.type;
    this.complaint = row.complaint;
    this.location = row.location;
    this.status=row.status;
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getChart();
    })
  }

  getChart() {
    let chart = am4core.create('adminaduanchartdiv', am4charts.XYChart)
    chart.colors.step = 2;

    chart.legend = new am4charts.Legend()
    chart.legend.position = 'top'
    chart.legend.paddingBottom = 20
    chart.legend.labels.template.maxWidth = 95

    let xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    xAxis.dataFields.category = 'year'
    xAxis.renderer.cellStartLocation = 0.1
    xAxis.renderer.cellEndLocation = 0.9
    xAxis.renderer.grid.template.location = 0;

    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;

    function createSeries(value, name) {
      let series = chart.series.push(new am4charts.ColumnSeries())
      series.dataFields.valueY = value
      series.dataFields.categoryX = 'year'
      series.name = name

      series.events.on("hidden", arrangeColumns);
      series.events.on("shown", arrangeColumns);

      let bullet = series.bullets.push(new am4charts.LabelBullet())
      bullet.interactionsEnabled = false
      bullet.dy = 30;
      bullet.label.text = '{valueY}'
      bullet.label.fill = am4core.color('#ffffff')

      return series;
    }

    chart.data = [
      {
        year: '2017',
        first: 40,
        second: 55,
        third: 60
      },
      {
        year: '2018',
        first: 30,
        second: 78,
        third: 69
      },
      {
        year: '2019',
        first: 27,
        second: 40,
        third: 45
      },
      {
        year: '2020',
        first: 50,
        second: 33,
        third: 22
      }
    ]


    createSeries('first', 'Pending');
    createSeries('second', 'In Progress');
    createSeries('third', 'Closed');

    function arrangeColumns() {

      let series = chart.series.getIndex(0);

      let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
      if (series.dataItems.length > 1) {
        let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
        let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
        let delta = ((x1 - x0) / chart.series.length) * w;
        if (am4core.isNumber(delta)) {
          let middle = chart.series.length / 2;

          let newIndex = 0;
          chart.series.each(function (series) {
            if (!series.isHidden && !series.isHiding) {
              series.dummyData = newIndex;
              newIndex++;
            }
            else {
              series.dummyData = chart.series.indexOf(series);
            }
          })
          let visibleCount = newIndex;
          let newMiddle = visibleCount / 2;

          chart.series.each(function (series) {
            let trueIndex = chart.series.indexOf(series);
            let newIndex = series.dummyData;

            let dx = (newIndex - trueIndex + middle - newMiddle) * delta

            series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
            series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
          })
        }
      }
    }
  }
}
