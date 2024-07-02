import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeInnerService {

  public getValue(): string {
    return 'FakeInnerServiceValue';
  }
}
