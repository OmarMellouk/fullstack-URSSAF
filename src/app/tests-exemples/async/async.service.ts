import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  public getPromise(): Promise<string> {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('the_result');
      }, 300);
    });
  }

}
