import { TestBed } from '@angular/core/testing';
import { BasicService } from './basic.service';
import { FakeInnerService } from './fake-inner.service';
import { InnerService } from './inner.service';

describe('BasicService validation via mock', () => {

  let basicService: BasicService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        { provide: InnerService, useClass: FakeInnerService }
      ]
    });
    basicService = TestBed.inject(BasicService);
  });

  it('Doit utiliser le service mocké', () => {

    expect(basicService.getInnerValue()).toBe('FakeInnerServiceValue');
  });
});

