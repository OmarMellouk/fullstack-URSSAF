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

import { AdresseType } from '../models/adresse-type';
import { EntrepriseType } from '../models/entreprise-type';
import { ResultatCreationType } from '../models/resultat-creation-type';


/**
 * Operations concernant les entreprises
 */
@Injectable({
  providedIn: 'root',
})
export class EntrepriseService extends BaseService {
  constructor(
    config: ApiV3RestConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation rechercherEntreprises
   */
  static readonly RechercherEntreprisesPath = '/entreprises';

  /**
   * Rechercher parmi les entreprises.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rechercherEntreprises()` instead.
   *
   * This method doesn't expect any request body.
   */
  rechercherEntreprises$Response(params?: {

    /**
     * Denomination de l&#x27;entreprise
     */
    denomination?: string;

    /**
     * Code Postal de l&#x27;entreprise
     */
    cp?: string;

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

    /**
     * Indicateur pour ne retourner que les champs simples ou l&#x27;objet complet
     */
    simple?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<EntrepriseType>>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.RechercherEntreprisesPath, 'get');
    if (params) {
      rb.query('denomination', params.denomination, {});
      rb.query('cp', params.cp, {});
      rb.query('sort', params.sort, {"style":"form","explode":false});
      rb.query('currentPage', params.currentPage, {});
      rb.query('size', params.size, {});
      rb.query('simple', params.simple, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<EntrepriseType>>;
      })
    );
  }

  /**
   * Rechercher parmi les entreprises.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rechercherEntreprises$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rechercherEntreprises(params?: {

    /**
     * Denomination de l&#x27;entreprise
     */
    denomination?: string;

    /**
     * Code Postal de l&#x27;entreprise
     */
    cp?: string;

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

    /**
     * Indicateur pour ne retourner que les champs simples ou l&#x27;objet complet
     */
    simple?: boolean;
    context?: HttpContext
  }
): Observable<Array<EntrepriseType>> {

    return this.rechercherEntreprises$Response(params).pipe(
      map((r: StrictHttpResponse<Array<EntrepriseType>>) => r.body as Array<EntrepriseType>)
    );
  }

  /**
   * Path part for operation creerEntreprise
   */
  static readonly CreerEntreprisePath = '/entreprises';

  /**
   * Creer une entreprise.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `creerEntreprise()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  creerEntreprise$Response(params: {
    context?: HttpContext

    /**
     * Donnees de l'entreprise
     */
    body: EntrepriseType
  }
): Observable<StrictHttpResponse<ResultatCreationType>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.CreerEntreprisePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ResultatCreationType>;
      })
    );
  }

  /**
   * Creer une entreprise.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `creerEntreprise$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  creerEntreprise(params: {
    context?: HttpContext

    /**
     * Donnees de l'entreprise
     */
    body: EntrepriseType
  }
): Observable<ResultatCreationType> {

    return this.creerEntreprise$Response(params).pipe(
      map((r: StrictHttpResponse<ResultatCreationType>) => r.body as ResultatCreationType)
    );
  }

  /**
   * Path part for operation denombrerEntreprises
   */
  static readonly DenombrerEntreprisesPath = '/entreprises/count';

  /**
   * Compter le nombre d'entreprises.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `denombrerEntreprises()` instead.
   *
   * This method doesn't expect any request body.
   */
  denombrerEntreprises$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.DenombrerEntreprisesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Compter le nombre d'entreprises.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `denombrerEntreprises$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  denombrerEntreprises(params?: {
    context?: HttpContext
  }
): Observable<number> {

    return this.denombrerEntreprises$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation recupererEntreprise
   */
  static readonly RecupererEntreprisePath = '/entreprises/{idEntreprise}';

  /**
   * Recuperer les donnees d'une entreprise par son id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recupererEntreprise$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  recupererEntreprise$Json$Response(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Indicateur pour ne retourner que les champs simples ou la grappe d&#x27;objet complète
     */
    simple?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<EntrepriseType>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.RecupererEntreprisePath, 'get');
    if (params) {
      rb.path('idEntreprise', params.idEntreprise, {});
      rb.query('simple', params.simple, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EntrepriseType>;
      })
    );
  }

  /**
   * Recuperer les donnees d'une entreprise par son id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `recupererEntreprise$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recupererEntreprise$Json(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Indicateur pour ne retourner que les champs simples ou la grappe d&#x27;objet complète
     */
    simple?: boolean;
    context?: HttpContext
  }
): Observable<EntrepriseType> {

    return this.recupererEntreprise$Json$Response(params).pipe(
      map((r: StrictHttpResponse<EntrepriseType>) => r.body as EntrepriseType)
    );
  }

  /**
   * Recuperer les donnees d'une entreprise par son id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recupererEntreprise$Pdf()` instead.
   *
   * This method doesn't expect any request body.
   */
  recupererEntreprise$Pdf$Response(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Indicateur pour ne retourner que les champs simples ou la grappe d&#x27;objet complète
     */
    simple?: boolean;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<EntrepriseType>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.RecupererEntreprisePath, 'get');
    if (params) {
      rb.path('idEntreprise', params.idEntreprise, {});
      rb.query('simple', params.simple, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'txt/pdf',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<EntrepriseType>;
      })
    );
  }

  /**
   * Recuperer les donnees d'une entreprise par son id.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `recupererEntreprise$Pdf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recupererEntreprise$Pdf(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Indicateur pour ne retourner que les champs simples ou la grappe d&#x27;objet complète
     */
    simple?: boolean;
    context?: HttpContext
  }
): Observable<EntrepriseType> {

    return this.recupererEntreprise$Pdf$Response(params).pipe(
      map((r: StrictHttpResponse<EntrepriseType>) => r.body as EntrepriseType)
    );
  }

  /**
   * Path part for operation modifierEntreprise
   */
  static readonly ModifierEntreprisePath = '/entreprises/{idEntreprise}';

  /**
   * Modifier toutes les données d'une entreprise. Tous les champs sont mis à jour (ie, si le champ adresse est mis à null, l'adresse sera supprimée).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierEntreprise()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierEntreprise$Response(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;
    context?: HttpContext

    /**
     * Donnees de l'entreprise, doit contenir la date de dernière mise à jour pour gérer la concurrence d'accès
     */
    body: EntrepriseType
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.ModifierEntreprisePath, 'put');
    if (params) {
      rb.path('idEntreprise', params.idEntreprise, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Modifier toutes les données d'une entreprise. Tous les champs sont mis à jour (ie, si le champ adresse est mis à null, l'adresse sera supprimée).
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `modifierEntreprise$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierEntreprise(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;
    context?: HttpContext

    /**
     * Donnees de l'entreprise, doit contenir la date de dernière mise à jour pour gérer la concurrence d'accès
     */
    body: EntrepriseType
  }
): Observable<void> {

    return this.modifierEntreprise$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation supprimerEntreprise
   */
  static readonly SupprimerEntreprisePath = '/entreprises/{idEntreprise}';

  /**
   * Supprimer une entreprise.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerEntreprise()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerEntreprise$Response(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.SupprimerEntreprisePath, 'delete');
    if (params) {
      rb.path('idEntreprise', params.idEntreprise, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Supprimer une entreprise.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `supprimerEntreprise$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerEntreprise(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.supprimerEntreprise$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation modifierPartiellementEntreprise
   */
  static readonly ModifierPartiellementEntreprisePath = '/entreprises/{idEntreprise}';

  /**
   * Modifier certaines donnees d'une entreprise.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierPartiellementEntreprise()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierPartiellementEntreprise$Response(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;
    context?: HttpContext

    /**
     * Donnees de l'entreprise, doit contenir la date de dernière mise a jour pour gérer la concurrence d'accès
     */
    body: EntrepriseType
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.ModifierPartiellementEntreprisePath, 'patch');
    if (params) {
      rb.path('idEntreprise', params.idEntreprise, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Modifier certaines donnees d'une entreprise.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `modifierPartiellementEntreprise$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierPartiellementEntreprise(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;
    context?: HttpContext

    /**
     * Donnees de l'entreprise, doit contenir la date de dernière mise a jour pour gérer la concurrence d'accès
     */
    body: EntrepriseType
  }
): Observable<void> {

    return this.modifierPartiellementEntreprise$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation rechercherAdressesEntreprise
   */
  static readonly RechercherAdressesEntreprisePath = '/entreprises/{idEntreprise}/adresses';

  /**
   * Recuperer les adresses d'une entreprise.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rechercherAdressesEntreprise$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  rechercherAdressesEntreprise$Json$Response(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Code Postal de l&#x27;adresse
     */
    cp?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<AdresseType>>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.RechercherAdressesEntreprisePath, 'get');
    if (params) {
      rb.path('idEntreprise', params.idEntreprise, {});
      rb.query('cp', params.cp, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AdresseType>>;
      })
    );
  }

  /**
   * Recuperer les adresses d'une entreprise.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rechercherAdressesEntreprise$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rechercherAdressesEntreprise$Json(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Code Postal de l&#x27;adresse
     */
    cp?: string;
    context?: HttpContext
  }
): Observable<Array<AdresseType>> {

    return this.rechercherAdressesEntreprise$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AdresseType>>) => r.body as Array<AdresseType>)
    );
  }

  /**
   * Recuperer les adresses d'une entreprise.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rechercherAdressesEntreprise$Pdf()` instead.
   *
   * This method doesn't expect any request body.
   */
  rechercherAdressesEntreprise$Pdf$Response(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Code Postal de l&#x27;adresse
     */
    cp?: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<AdresseType>>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.RechercherAdressesEntreprisePath, 'get');
    if (params) {
      rb.path('idEntreprise', params.idEntreprise, {});
      rb.query('cp', params.cp, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'txt/pdf',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AdresseType>>;
      })
    );
  }

  /**
   * Recuperer les adresses d'une entreprise.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rechercherAdressesEntreprise$Pdf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rechercherAdressesEntreprise$Pdf(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Code Postal de l&#x27;adresse
     */
    cp?: string;
    context?: HttpContext
  }
): Observable<Array<AdresseType>> {

    return this.rechercherAdressesEntreprise$Pdf$Response(params).pipe(
      map((r: StrictHttpResponse<Array<AdresseType>>) => r.body as Array<AdresseType>)
    );
  }

  /**
   * Path part for operation rajouterAdresseEntreprise
   */
  static readonly RajouterAdresseEntreprisePath = '/entreprises/{idEntreprise}/adresses';

  /**
   * Ajouter une adresse a une entreprise.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rajouterAdresseEntreprise()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rajouterAdresseEntreprise$Response(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;
    context?: HttpContext

    /**
     * Donnees de l'adresse
     */
    body: AdresseType
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.RajouterAdresseEntreprisePath, 'post');
    if (params) {
      rb.path('idEntreprise', params.idEntreprise, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Ajouter une adresse a une entreprise.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `rajouterAdresseEntreprise$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  rajouterAdresseEntreprise(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;
    context?: HttpContext

    /**
     * Donnees de l'adresse
     */
    body: AdresseType
  }
): Observable<string> {

    return this.rajouterAdresseEntreprise$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation recupererAdresseEntreprise
   */
  static readonly RecupererAdresseEntreprisePath = '/entreprises/{idEntreprise}/adresses/{idAdresse}';

  /**
   * Recuperer les donnees d'une adresse.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recupererAdresseEntreprise$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  recupererAdresseEntreprise$Json$Response(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Identifiant de l&#x27;adresse
     */
    idAdresse: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AdresseType>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.RecupererAdresseEntreprisePath, 'get');
    if (params) {
      rb.path('idEntreprise', params.idEntreprise, {});
      rb.path('idAdresse', params.idAdresse, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdresseType>;
      })
    );
  }

  /**
   * Recuperer les donnees d'une adresse.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `recupererAdresseEntreprise$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recupererAdresseEntreprise$Json(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Identifiant de l&#x27;adresse
     */
    idAdresse: number;
    context?: HttpContext
  }
): Observable<AdresseType> {

    return this.recupererAdresseEntreprise$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AdresseType>) => r.body as AdresseType)
    );
  }

  /**
   * Recuperer les donnees d'une adresse.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recupererAdresseEntreprise$Pdf()` instead.
   *
   * This method doesn't expect any request body.
   */
  recupererAdresseEntreprise$Pdf$Response(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Identifiant de l&#x27;adresse
     */
    idAdresse: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<AdresseType>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.RecupererAdresseEntreprisePath, 'get');
    if (params) {
      rb.path('idEntreprise', params.idEntreprise, {});
      rb.path('idAdresse', params.idAdresse, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'txt/pdf',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AdresseType>;
      })
    );
  }

  /**
   * Recuperer les donnees d'une adresse.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `recupererAdresseEntreprise$Pdf$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  recupererAdresseEntreprise$Pdf(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Identifiant de l&#x27;adresse
     */
    idAdresse: number;
    context?: HttpContext
  }
): Observable<AdresseType> {

    return this.recupererAdresseEntreprise$Pdf$Response(params).pipe(
      map((r: StrictHttpResponse<AdresseType>) => r.body as AdresseType)
    );
  }

  /**
   * Path part for operation modifierAdresse
   */
  static readonly ModifierAdressePath = '/entreprises/{idEntreprise}/adresses/{idAdresse}';

  /**
   * Modifier les donnees d'une adresse.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierAdresse()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierAdresse$Response(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Identifiant de l&#x27;adresse
     */
    idAdresse: number;
    context?: HttpContext

    /**
     * Donnees de l'adresse'
     */
    body: AdresseType
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.ModifierAdressePath, 'put');
    if (params) {
      rb.path('idEntreprise', params.idEntreprise, {});
      rb.path('idAdresse', params.idAdresse, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Modifier les donnees d'une adresse.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `modifierAdresse$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierAdresse(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Identifiant de l&#x27;adresse
     */
    idAdresse: number;
    context?: HttpContext

    /**
     * Donnees de l'adresse'
     */
    body: AdresseType
  }
): Observable<void> {

    return this.modifierAdresse$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation supprimerAdresse
   */
  static readonly SupprimerAdressePath = '/entreprises/{idEntreprise}/adresses/{idAdresse}';

  /**
   * Supprimer une adresse.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `supprimerAdresse()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerAdresse$Response(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Identifiant de l&#x27;adresse
     */
    idAdresse: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.SupprimerAdressePath, 'delete');
    if (params) {
      rb.path('idEntreprise', params.idEntreprise, {});
      rb.path('idAdresse', params.idAdresse, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Supprimer une adresse.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `supprimerAdresse$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  supprimerAdresse(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Identifiant de l&#x27;adresse
     */
    idAdresse: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.supprimerAdresse$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation modifierPartiellementAdresse
   */
  static readonly ModifierPartiellementAdressePath = '/entreprises/{idEntreprise}/adresses/{idAdresse}';

  /**
   * Modifier certaines donnees d'une adresse.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `modifierPartiellementAdresse()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierPartiellementAdresse$Response(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Identifiant de l&#x27;adresse
     */
    idAdresse: number;
    context?: HttpContext

    /**
     * Données de l'adresse
     */
    body: AdresseType
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EntrepriseService.ModifierPartiellementAdressePath, 'patch');
    if (params) {
      rb.path('idEntreprise', params.idEntreprise, {});
      rb.path('idAdresse', params.idAdresse, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Modifier certaines donnees d'une adresse.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `modifierPartiellementAdresse$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  modifierPartiellementAdresse(params: {

    /**
     * Identifiant de l&#x27;entreprise
     */
    idEntreprise: number;

    /**
     * Identifiant de l&#x27;adresse
     */
    idAdresse: number;
    context?: HttpContext

    /**
     * Données de l'adresse
     */
    body: AdresseType
  }
): Observable<void> {

    return this.modifierPartiellementAdresse$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
