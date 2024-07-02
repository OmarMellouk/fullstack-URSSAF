import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { InnerService } from '../services/inner.service';

export interface RestServiceData {
  code: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private myInnerService: InnerService,
              private http: HttpClient) {
  }

  public getInnerValue(): string {
    return this.myInnerService.getValue();
  }

  public getRestEndpointData(): Observable<RestServiceData> {

    return this.http.get<RestServiceData>('http://localhost:8080/test').pipe(
      tap(restData => {
        return console.log('WebService call returned data : ' + JSON.stringify(restData));
      }),
      catchError(this.handleError<any>('getRestEndpointData'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }

}
