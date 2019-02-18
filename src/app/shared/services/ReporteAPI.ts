/**
 * REST API
 * OpenAPI spec version: 0.1.0
 * Contact: joseortiz87@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs';
import { map } from 'rxjs/operators';

import * as models                                           from '../model/models';
import { Configuration }                                     from './configuration';

import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ReporteApi {

    protected basePath = environment.apiUrl + '/v1';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http,  
                @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        /*
        if (false) {
          this.defaultHeaders.append('Content-Type', 'application/json');
          this.defaultHeaders.append('Authorization', 'Bearer ');
        }
        */
    }

    /**
     * 
     */
    public getReportes(extraHttpRequestParams?: any): Observable<Array<models.Reporte>> {
        return this.getReportesWithHttpInfo(extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            }));
    }

        /**
     * 
     */
    public postReporte(reporte?: models.Reporte,extraHttpRequestParams?: any): Observable<models.Reporte> {
        return this.postReporteWithHttpInfo(reporte,extraHttpRequestParams)
            .pipe(map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json() || {};
                }
            }));
    }

    /**
     * 
     */
    public getReportesWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/reportes';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (api_key) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

        /**
     * 
     */
    public postReporteWithHttpInfo(reporte?: models.Reporte,extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + '/reporte';

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (api_key) required
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            search: queryParameters,
            withCredentials:this.configuration.withCredentials,
            body: reporte
        });
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }
}
