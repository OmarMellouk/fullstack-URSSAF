import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { TableauDetailService } from './tableau-detail.service';

describe('TableauDetailService', () => {
  let service: TableauDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DatePipe
      ]
    });
    service = TestBed.inject(TableauDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
