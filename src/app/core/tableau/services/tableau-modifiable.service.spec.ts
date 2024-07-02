import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { TableauModifiableService } from './tableau-modifiable.service';

describe('TableauModifiableService', () => {
  let service: TableauModifiableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatePipe]
    });
    service = TestBed.inject(TableauModifiableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});