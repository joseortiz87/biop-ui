import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';
import { Adal4Service } from 'adal-angular4';
import { HttpClient } from  '@angular/common/http';
import { TableItem } from './table-datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableDataSource;
  datos: TableItem[];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'fecha', 'reporte', 'ubicacion'];
  title: string = 'Reporte de Incidencias';
  lat: number = 19.047533471702927;
  lng: number = -98.20287514724367;
  zoom: number = 19;

  constructor (private adalSvc: Adal4Service,private  httpClient:HttpClient){}

  ngOnInit() {
    this.dataSource = new TableDataSource(this.paginator, this.sort,this.httpClient,this.adalSvc);
    this.datos = this.dataSource.data;
  }
}
