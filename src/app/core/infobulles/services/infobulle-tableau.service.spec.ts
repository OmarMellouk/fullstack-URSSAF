import { DatePipe } from '@angular/common';
import { TestBed } from '@angular/core/testing';

import { InfobulleTableauService } from './infobulle-tableau.service';

describe('InfobulleTableauService', () => {
  let service: InfobulleTableauService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DatePipe
      ]
    });
    service = TestBed.inject(InfobulleTableauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
