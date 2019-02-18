import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Reporte } from '../model/models';

@Component({
  selector: 'app-reporte-form',
  templateUrl: './reporte-form.component.html',
  styleUrls: ['./reporte-form.component.css']
})
export class ReporteFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("init reporte");
  }

  incidenteSelected: boolean = false;
  title: string = 'Reporte de Incidencias';
  lat: number = 19.047533471702927;
  lng: number = -98.20287514724367;
  zoom: number = 19;
  isMapClick: boolean = false;
  isRegistro: boolean = true;
  latMarker: number;
  lngMarker: number;
  nombre = new FormControl();
  fecha = new FormControl();
  reporte = new FormControl();
  ubicacion = new FormControl();
  dependencia = new FormControl();
  incidencia = new FormControl();
  incidente = new FormControl();
  dependencias = [
    {
      name: 'Agua',
      value: 1
    },
    {
      name: 'Parques y Jardines',
      value: 2
    }
  ];
  private reporteObj : Reporte = {};
  private error;

  incidentes= [
    {value: '1',viewValue: 'Baches'},
    {value: '2',viewValue: 'Fuga de agua'},
    {value: '3',viewValue: 'Alumbrado'},
    {value: '4',viewValue: 'Semáforo'},
    {value: '5',viewValue: 'Parques y Jardínes'},
    {value: '6',viewValue:  'Seguridad Pública'},
    {value: '7',viewValue: 'Vialidad'}
  ];

  incidenteOp = [];
  incidenteMap = {
    '1' : [
      {value: '11',viewValue: 'Baches'}
    ],
    '2' : [
      {value: '21',viewValue: 'Fuga de agua'}
    ],
    '3' : [
      {value: '31',viewValue: 'Poste caído'},
      {value: '32',viewValue: 'Foco fundido'},
      {value: '33',viewValue: 'Lámpara rota'},
      {value: '34',viewValue: 'Poste a punto de caer'}
    ],
    '4' : [
      {value: '41',viewValue: 'Luces apagadas'},
      {value: '42',viewValue: 'Todas las luces encendidas al mismo tiempo'},
      {value: '43',viewValue: 'Volteado'},
      {value: '44',viewValue: 'Caído'}
    ],
    '5' : [
      {value: '51',viewValue: 'Falta de poda'},
      {value: '52',viewValue: 'Mobiliario en mal estado'},
      {value: '53',viewValue: 'Sin alumbrado'},
      {value: '54',viewValue: 'Árbol a punto de caer'}
    ],
    '6' : [
      {value: '61',viewValue: 'Robo de autopartes'},
      {value: '62',viewValue: 'Asalto'},
      {value: '63',viewValue: 'Robo de vehículo'},
      {value: '64',viewValue: 'Robo a casa habitación'}
    ],
    '7' : [
      {value: '71',viewValue: 'Choque'},
      {value: '72',viewValue: 'Obstrucción'},
      {value: '73',viewValue: 'Atropellado'}
    ]
  };
  
  datos = [
    {
      nombre : "NOMBRE1",
      fecha : "2018-08-09",
      reporte : "REPORTE1",
      lat : 19.047591661265233,
      lng : -98.20276123920678
    },
    {
      nombre : "NOMBRE2",
      fecha : "2018-08-09",
      reporte : "REPORTE2",
      lat : 19.04728754226811,
      lng : -98.20288989939326
    },
    {
      nombre : "NOMBRE3",
      fecha : "2018-08-09",
      reporte : "REPORTE3",
      lat : 19.047274865483235,
      lng : -98.20207987227076
    }
  ];
  fillcolor = "#dc3545";

  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
    this.latMarker = $event.coords.lat;
    this.lngMarker = $event.coords.lng;
    this.isMapClick = true;
    this.ubicacion.setValue("[" + this.latMarker + "," + this.lngMarker + "]" );
  }

  guardaDatos(){
    this.reporteObj =
      {
        nombre : this.nombre.value,
        entidad : '',
        municipio : '',
        dependencia : '',
        fecha : this.fecha.value,
        reporte : this.reporte.value,
        lat : this.latMarker,
        lng : this.lngMarker,
        direccion : '',
        status : ''
      };
    console.log(JSON.stringify(this.reporteObj));
    this.isRegistro = false;
  }

  seleccionIncidente(incidente){
    console.log(incidente);
    this.incidenteSelected = !this.incidenteSelected;
    this.incidenteOp = this.incidenteMap[incidente];
  }

}
