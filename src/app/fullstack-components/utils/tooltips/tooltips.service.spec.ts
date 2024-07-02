import { TestBed } from '@angular/core/testing';

import { TooltipsService } from './tooltips.service';

describe('TooltipsService', () => {
  let service: TooltipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TooltipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
