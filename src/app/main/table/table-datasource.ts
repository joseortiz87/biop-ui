import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient,HttpHeaders } from  "@angular/common/http";
import { Adal4Service } from 'adal-angular4';

// TODO: Replace this with your own data model type
export interface TableItem {
  id: number;
  name: string;
  fecha: string;
  reporte: string;
  ubicacion: string;
  lat: number;
  lng: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TableItem[] = [
  {
    id: 1,
    name : "NOMBRE1",
    fecha : "2018-08-09",
    reporte : "REPORTE1",
    ubicacion: 'Calle 5 315 San Pedro Cholula,Puebla',
    lat : 19.047591661265233,
    lng : -98.20276123920678
  },
  {
    id: 2,
    name : "NOMBRE2",
    fecha : "2018-08-09",
    reporte : "REPORTE2",
    ubicacion: 'Calle 5 315 San Pedro Cholula,Puebla',
    lat : 19.04728754226811,
    lng : -98.20288989939326
  },
  {
    id: 3,
    name : "NOMBRE3",
    fecha : "2018-08-09",
    reporte : "REPORTE3",
    ubicacion: 'Calle 5 315 San Pedro Cholula,Puebla',
    lat : 19.047274865483235,
    lng : -98.20207987227076
  }
];

/**
 * Data source for the Table view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, 
              private sort: MatSort,
              private  httpClient:HttpClient,
              private adalSvc: Adal4Service) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    let userInfo = this.adalSvc.userInfo;

    return observableOf(this.getSortedData(this.data));
    /*
    const httpOptions = {
      headers: new HttpHeaders()
            .append('Content-Type','application/json') 
            .append('Authorization',`Bearer ${userInfo.token}`)
    };
              
    console.log(JSON.stringify(httpOptions.headers));
    return this.httpClient.get<TableItem[]>(`${environment.apiUrl}`,httpOptions);
    */

  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
