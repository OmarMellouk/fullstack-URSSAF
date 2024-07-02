import { TestBed } from '@angular/core/testing';
import { BasicService } from './basic.service';
import { InnerService } from './inner.service';

describe('BasicService validation via espion', () => {

  let basicService: BasicService;
  let innerServiceSpy: jasmine.SpyObj<InnerService>;

  beforeEach(() => {

    const spy = jasmine.createSpyObj('InnerService', ['getValue']);

    TestBed.configureTestingModule({
      providers: [
        BasicService,
        { provide: InnerService, useValue: spy }]
    });
    basicService = TestBed.inject(BasicService);
    innerServiceSpy = TestBed.inject(InnerService) as jasmine.SpyObj<InnerService>;
  });

  it('Doit utiliser le service mocké', () => {
    const spyReturnedValue = 'SpyValue';
    innerServiceSpy.getValue.and.returnValue(spyReturnedValue);

    expect(basicService.getInnerValue()).toBe(spyReturnedValue);
    expect(innerServiceSpy.getValue.calls.count()).toBe(1);
  });

});

