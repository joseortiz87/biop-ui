import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  public doughnutChartLabels = ['Abiertos', 'Resueltos', 'En Proceso'];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';

  ngOnInit() {
    let abiertos = Math.round(Math.random()*20);
    let resultos = Math.round(Math.random()*30);
    let proceso = 100 - abiertos - resultos;
    this.doughnutChartData = [abiertos,resultos,proceso];
  }

}
