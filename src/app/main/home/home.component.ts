import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Chart } from 'chart.js';
import { Card } from '../../shared/model/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Reporte Mensual', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1  },
          { title: 'Card 3', cols: 1, rows: 1  },
          { title: 'Card 4', cols: 1, rows: 1  }
        ];
      }

      return [
        { title: 'Reporte Mensual', cols: 2, rows: 2  },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

    ngOnInit() {

    }

  constructor(private breakpointObserver: BreakpointObserver) {}
}
