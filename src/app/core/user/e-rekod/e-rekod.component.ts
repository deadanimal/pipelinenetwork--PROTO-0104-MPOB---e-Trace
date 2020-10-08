
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
  selector: 'app-e-rekod',
  templateUrl: './e-rekod.component.html',
  styleUrls: ['./e-rekod.component.scss']
})
export class ERekodComponent implements OnInit {

  chart: any

  rows: any = [
    {
      name: "Record 1",
      date: "2020-03-13T05:50:12Z",
      status: "Up Coming",
      location: "Kluang, Johor",
      note: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },
    {
      name: "Record 2",
      date: "2019-10-08T01:26:15Z",
      status: "Up Coming",
      location: "Kajang, Selangor",
      note:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      name: "Record 3",
      date: "2019-10-08T01:26:15Z",
      status: "completed",
      location: "Kota Kinabalu, Sabah",
      note: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"
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
  name: string;
  date: string;
  status: string;
  location: string;
  note: string;

  viewData(row) {
    this.showModal = true; // Show-Hide Modal Check
    this.name = row.name;
    this.date = row.date;
    this.status = row.status;
    this.location = row.location;
    this.note = row.note;
  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }

  getCharts() {
    this.zone.runOutsideAngular(() => {
      this.getPieChart()
      this.getGantChart()
    })
  }

  getPieChart() {
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("piechartdiv2", am4charts.PieChart);

    // Add data
    chart.data = [{
      "status": "UpComing",
      "percent": 10.7,
    }, {
      "status": "Completed",
      "percent": 90.3,
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

  getGantChart() {
    let chart = am4core.create("gantchartdiv2", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.paddingRight = 30;
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd HH:mm";

    let colorSet = new am4core.ColorSet();
    colorSet.saturation = 0.4;

    chart.data = [{
      "category": "Activity #1",
      "start": "2016-01-01",
      "end": "2016-01-14",
      "color": colorSet.getIndex(0).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Activity #1",
      "start": "2016-01-16",
      "end": "2016-01-27",
      "color": colorSet.getIndex(0).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Activity #1",
      "start": "2016-02-05",
      "end": "2016-04-18",
      "color": colorSet.getIndex(0).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Activity #1",
      "start": "2016-04-18",
      "end": "2016-04-30",
      "color": colorSet.getIndex(0).brighten(1.2),
      "task": "Testing and QA"
    }, {
      "category": "Activity #2",
      "start": "2016-01-08",
      "end": "2016-01-10",
      "color": colorSet.getIndex(2).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Activity #2",
      "start": "2016-01-12",
      "end": "2016-01-15",
      "color": colorSet.getIndex(2).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Activity #2",
      "start": "2016-01-16",
      "end": "2016-02-05",
      "color": colorSet.getIndex(2).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Activity #2",
      "start": "2016-02-10",
      "end": "2016-02-18",
      "color": colorSet.getIndex(2).brighten(1.2),
      "task": "Testing and QA"
    }, {
      "category": "Activity #3",
      "start": "2016-01-02",
      "end": "2016-01-08",
      "color": colorSet.getIndex(4).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Activity #3",
      "start": "2016-01-08",
      "end": "2016-01-16",
      "color": colorSet.getIndex(4).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Activity #3",
      "start": "2016-01-19",
      "end": "2016-03-01",
      "color": colorSet.getIndex(4).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Activity #3",
      "start": "2016-03-12",
      "end": "2016-04-05",
      "color": colorSet.getIndex(4).brighten(1.2),
      "task": "Testing and QA"
    }, {
      "category": "Activity #4",
      "start": "2016-01-01",
      "end": "2016-01-19",
      "color": colorSet.getIndex(6).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Activity #4",
      "start": "2016-01-19",
      "end": "2016-02-03",
      "color": colorSet.getIndex(6).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Activity #4",
      "start": "2016-03-20",
      "end": "2016-04-25",
      "color": colorSet.getIndex(6).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Activity #4",
      "start": "2016-04-27",
      "end": "2016-05-15",
      "color": colorSet.getIndex(6).brighten(1.2),
      "task": "Testing and QA"
    }, {
      "category": "Activity #5",
      "start": "2016-01-01",
      "end": "2016-01-12",
      "color": colorSet.getIndex(8).brighten(0),
      "task": "Gathering requirements"
    }, {
      "category": "Activity #5",
      "start": "2016-01-12",
      "end": "2016-01-19",
      "color": colorSet.getIndex(8).brighten(0.4),
      "task": "Producing specifications"
    }, {
      "category": "Activity #5",
      "start": "2016-01-19",
      "end": "2016-03-01",
      "color": colorSet.getIndex(8).brighten(0.8),
      "task": "Development"
    }, {
      "category": "Activity #5",
      "start": "2016-03-08",
      "end": "2016-03-30",
      "color": colorSet.getIndex(8).brighten(1.2),
      "task": "Testing and QA"
    }];

    chart.dateFormatter.dateFormat = "yyyy-MM-dd";
    chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.inversed = true;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 70;
    dateAxis.baseInterval = { count: 1, timeUnit: "day" };
    // dateAxis.max = new Date(2018, 0, 1, 24, 0, 0, 0).getTime();
    //dateAxis.strictMinMax = true;
    dateAxis.renderer.tooltipLocation = 0;

    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.columns.template.height = am4core.percent(70);
    series1.columns.template.tooltipText = "{task}: [bold]{openDateX}[/] - [bold]{dateX}[/]";

    series1.dataFields.openDateX = "start";
    series1.dataFields.dateX = "end";
    series1.dataFields.categoryY = "category";
    series1.columns.template.propertyFields.fill = "color"; // get color from data
    series1.columns.template.propertyFields.stroke = "color";
    series1.columns.template.strokeOpacity = 1;

    chart.scrollbarX = new am4core.Scrollbar();

  }
}
