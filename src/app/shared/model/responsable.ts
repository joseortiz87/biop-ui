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
import { Direccion } from './direccion';


export interface Responsable { 
    id?: number;
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    puesto?: string;
    telefono?: string;
    direccion?: Direccion;
}
