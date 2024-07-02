import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { TableauTriFiltrePaginationService } from './tableau-tri-filtre-pagination.service';

describe('TableauTriFiltrePaginationService', () => {
  let service: TableauTriFiltrePaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatePipe]
    });
    service = TestBed.inject(TableauTriFiltrePaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
