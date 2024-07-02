import { TestBed } from '@angular/core/testing';

import { FakeInnerService } from './fake-inner.service';

describe('FakeInnerService', () => {
  let service: FakeInnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeInnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
