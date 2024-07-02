import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { TableauDepliableMultiEnteteService } from './tableau-depliable-multi-entete.service';

describe('TableauDepliableMultiEnteteService', () => {
  let service: TableauDepliableMultiEnteteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatePipe]
    });
    service = TestBed.inject(TableauDepliableMultiEnteteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
