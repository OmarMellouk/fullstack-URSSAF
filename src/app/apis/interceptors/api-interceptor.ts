import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {v4} from 'uuid';

/**
 * Classe permettant d''ajouter des éléments dans le header.
 * Actuellement seul le champs "urssaf.id" est ajouter.
 * Il permet d''ajouter un uuid qui permet de faire la trace de bout en bout dans les différentes applications
 */
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // On ajoute les champs dans la requête
    request = request.clone({
      setHeaders: {
        'recouv.id': v4()
      }
    });

    // On renvoi la requête modifié en loggant en cas d'erreur
    return next.handle(request).pipe(
      tap(x => x, err => {
        // Handle this err
        console.error(`Erreur lors de l'envoi de la requête, code = ${err.status}`);
      })
    );
  }
}
