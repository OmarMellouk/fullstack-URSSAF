import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InnerService {

  private theValue = 'InnerServiceTrueValue';

  public getValue(): string {
    return this.theValue;
  }

  public setValue(newValue: string): void {
    this.theValue = newValue;
  }
}
