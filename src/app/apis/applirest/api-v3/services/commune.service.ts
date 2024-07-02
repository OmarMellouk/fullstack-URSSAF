/* eslint-disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiV3RestConfiguration } from '../api-v-3-rest-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CommuneType } from '../models/commune-type';


/**
 * Operations concernant les communes
 */
@Injectable({
  providedIn: 'root',
})
export class CommuneService extends BaseService {
  constructor(
    config: ApiV3RestConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation rechercherCommunes
   */
  static readonly RechercherCommunesPath = '/communes';

  /**
   * Rechercher parmi les communes avec pagination.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rechercherCommunes()` instead.
   *
   * This method doesn't expect any request body.
   */
  rechercherCommunes$Response(params?: {

    /**
     * Criteres de tri
     */
    sort?: Array<string>;

    /**
     * page courante
     */
    currentPage?: number;

    /**
     * Nombre d&#x27;éléments demandés
     */
    size?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<CommuneType>>> {

    const rb = new RequestBuilder(this.rootUrl, CommuneService.RechercherCommunesPath, 'get');
    if (params) {
      rb.query('sort', params.sort, {"style":"form","explode":false});
      rb.query('currentPage', params.currentPage, {});
      rb.query('size', params.size, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CommuneType>>;
      })
    );
  }

  /**
   * Rechercher parmi les communes avec pagination.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rechercherCommunes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rechercherCommunes(params?: {

    /**
     * Criteres de tri
     */
    sort?: Array<string>;

    /**
     * page courante
     */
    currentPage?: number;

    /**
     * Nombre d&#x27;éléments demandés
     */
    size?: number;
    context?: HttpContext
  }
): Observable<Array<CommuneType>> {

    return this.rechercherCommunes$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CommuneType>>) => r.body as Array<CommuneType>)
    );
  }

}
