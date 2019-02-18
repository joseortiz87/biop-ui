import { Component, OnInit,Input } from '@angular/core';
import { Card } from '../../shared/model/models';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos','Sept','Oct','Nov','Dic'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
  ];
  public labels = [
    'Baches',
    'Fuga de agua',
    'Alumbrado',
    'Semáforo',
    'Parques y Jardínes',
    'Seguridad Pública',
    'Vialidad',
  ];

  ngOnInit() {
    this.labels.forEach(element => {
      let dataarr = [];
      this.barChartLabels.forEach(label => {
        dataarr.push(Math.round(Math.random()*500));
      })
      let objData = {data: dataarr, label:element };
      this.barChartData.push(objData);
    });
  }

}
