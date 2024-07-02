/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiV2RestConfiguration as __Configuration } from '../api-v2rest-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EntrepriseV2Type } from '../models/entreprise-v2type';

/**
 * Operations concernant les entreprises
 */
@Injectable({
  providedIn: 'root',
})
class EntrepriseV2Service extends __BaseService {
  static readonly rechercherEntreprisesPath = '/entreprises';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Rechercher parmi les entreprises
   * @param params The `EntrepriseV2Service.RechercherEntreprisesParams` containing the following parameters:
   *
   * - `sort`: Criteres de tri suivant le format: sort=id:asc,denomination:desc
   *
   * - `size`: Nombre d'éléments demandés
   *
   * - `simple`: Indicateur pour ne retourner que les champs simples ou la grappe d''objet complète
   *
   * - `denomination`: Dénomination de l'entreprise
   *
   * - `currentPage`: page courante
   *
   * - `cp`: Code Postal de l'entreprise
   *
   * @return Recherche effectuée
   */
  rechercherEntreprisesResponse(params: EntrepriseV2Service.RechercherEntreprisesParams): __Observable<__StrictHttpResponse<Array<EntrepriseV2Type>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.sort || []).forEach(val => {if (val != null) __params = __params.append('sort', val.toString())});
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.simple != null) __params = __params.set('simple', params.simple.toString());
    if (params.denomination != null) __params = __params.set('denomination', params.denomination.toString());
    if (params.currentPage != null) __params = __params.set('currentPage', params.currentPage.toString());
    if (params.cp != null) __params = __params.set('cp', params.cp.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/entreprises`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EntrepriseV2Type>>;
      })
    );
  }
  /**
   * Rechercher parmi les entreprises
   * @param params The `EntrepriseV2Service.RechercherEntreprisesParams` containing the following parameters:
   *
   * - `sort`: Criteres de tri suivant le format: sort=id:asc,denomination:desc
   *
   * - `size`: Nombre d'éléments demandés
   *
   * - `simple`: Indicateur pour ne retourner que les champs simples ou la grappe d''objet complète
   *
   * - `denomination`: Dénomination de l'entreprise
   *
   * - `currentPage`: page courante
   *
   * - `cp`: Code Postal de l'entreprise
   *
   * @return Recherche effectuée
   */
  rechercherEntreprises(params: EntrepriseV2Service.RechercherEntreprisesParams): __Observable<Array<EntrepriseV2Type>> {
    return this.rechercherEntreprisesResponse(params).pipe(
      __map(_r => _r.body as Array<EntrepriseV2Type>)
    );
  }
}

module EntrepriseV2Service {

  /**
   * Parameters for rechercherEntreprises
   */
  export interface RechercherEntreprisesParams {

    /**
     * Criteres de tri suivant le format: sort=id:asc,denomination:desc
     */
    sort?: Array<string>;

    /**
     * Nombre d'éléments demandés
     */
    size?: number;

    /**
     * Indicateur pour ne retourner que les champs simples ou la grappe d''objet complète
     */
    simple?: boolean;

    /**
     * Dénomination de l'entreprise
     */
    denomination?: string;

    /**
     * page courante
     */
    currentPage?: number;

    /**
     * Code Postal de l'entreprise
     */
    cp?: string;
  }
}

export { EntrepriseV2Service }
