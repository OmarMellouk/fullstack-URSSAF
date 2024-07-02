import { Injectable } from '@angular/core';

import { InnerService } from './inner.service';

export interface RestServiceData {
  code: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor(private myInnerService: InnerService) {
  }

  public getInnerValue(): string {
    return this.myInnerService.getValue();
  }
}
