import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss']
})
export class OverviewPageComponent implements OnInit {
  title = 'Browser market shares at a specific website';
  type = 'PieChart';
  data = [
    ['Firefox', 45.0],
    ['IE', 26.8],
    ['Chrome', 12.8],
    ['Safari', 8.5],
    ['Opera', 6.2],
    ['Others', 0.7]
  ];
  columnNames = ['Browser', 'Percentage'];
  options = {
  };
  width = 750;
  height = 500;
/*  doughnutChartLabels = ['Angular', 'React', 'Vue'];
  doughnutChartData;
  doughnutChartType = 'doughnut';

  barChartOptions = {
    scaleShowVerticalLine: false,
    responsive: true
  };

  barChartLabels = ['2010', '2011', '2012', '2013', '2014', '2015'];
  barChartType = 'bar';
  barChartLegend = true;
  angulr =  [40, 30, 27, 56, 38];
  react = [26, 40, 23, 54, 32];
  vue = [15, 23, 10, 30, 22];
  pia =  [40, 40, 20];
  // angular = [40, 30, 27, 56, 38];
  // react = [26, 40, 23, 54, 32];
  // vue = [15, 23, 10, 30, 22];
  barChartData;*/
  constructor() { }

  ngOnInit() {
/*    this.barChartData = [
      {data: this.angulr, label: 'Angular'},
      {data: this.react, label: 'React'},
      {data: this.vue, label: 'Vue'}
    ];
    this.doughnutChartData = this.pia;*/
  }


}
