import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { TableauSimpleService } from './tableau-simple.service';

describe('TableauSimpleService', () => {
  let service: TableauSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatePipe]
    });
    service = TestBed.inject(TableauSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
