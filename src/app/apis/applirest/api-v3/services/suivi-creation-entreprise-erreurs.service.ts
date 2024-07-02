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

import { SuiviCreationEntrepriseErreurType } from '../models/suivi-creation-entreprise-erreur-type';

@Injectable({
  providedIn: 'root',
})
export class SuiviCreationEntrepriseErreursService extends BaseService {
  constructor(
    config: ApiV3RestConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation recupererSuiviCreationEntrepriseErreurs
   */
  static readonly RecupererSuiviCreationEntrepriseErreursPath = '/suiviCreationEntrepriseErreurs';

  /**
   * Lister les erreurs de suivi de création d'entreprise.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recupererSuiviCreationEntrepriseErreurs()` instead.
   *
   * This method doesn't expect any request body.
   */
  recupererSuiviCreationEntrepriseErreurs$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<SuiviCreationEntrepriseErreurType>>> {

    const rb = new RequestBuilder(this.rootUrl, SuiviCreationEntrepriseErreursService.RecupererSuiviCreationEntrepriseErreursPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SuiviCreationEntrepriseErreurType>>;
      })
    );
  }

  /**
   * Lister les erreurs de suivi de création d'entreprise.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `recupererSuiviCreationEntrepriseErreurs$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recupererSuiviCreationEntrepriseErreurs(params?: {
    context?: HttpContext
  }
): Observable<Array<SuiviCreationEntrepriseErreurType>> {

    return this.recupererSuiviCreationEntrepriseErreurs$Response(params).pipe(
      map((r: StrictHttpResponse<Array<SuiviCreationEntrepriseErreurType>>) => r.body as Array<SuiviCreationEntrepriseErreurType>)
    );
  }

}
