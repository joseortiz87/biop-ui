/**
 * BigOp REST API
 * Bienvenido a la documentacion de _BigOp API_._BigOp API_ te permite crear reportes ciudadanos que se canalizaran a las dependencias responsables en un proceso automatico.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: joseortiz81@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Incidencia } from './incidencia';
import { Point } from './point';


export interface Reporte { 
    id?: number;
    description?: string;
    coordenadas?: Point;
    entidad?: string;
    municipio?: string;
    direccion?: string;
    colonia?: string;
    zipcode?: string;
    incidencia?: Incidencia;

    nombre?: string;
    dependencia?: string;
    fecha?: Date;
    reporte?: string;
    lat?: number;
    lng?: number;
    status?: string;
}
