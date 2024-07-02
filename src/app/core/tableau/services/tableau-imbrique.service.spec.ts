import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { TableauImbriqueService } from './tableau-imbrique.service';

describe('TableauImbriqueService', () => {
  let service: TableauImbriqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatePipe]
    });
    service = TestBed.inject(TableauImbriqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
