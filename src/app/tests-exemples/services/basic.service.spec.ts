import { TestBed } from '@angular/core/testing';
import { BasicService } from './basic.service';

describe('BasicService validation', () => {
  let basicService: BasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    basicService = TestBed.inject(BasicService);
  });

  it('Doit avoir été créé', () => {
    expect (basicService).toBeTruthy();
  });

  it('Doit utiliser par defaut le vrai service', () => {
    expect (basicService.getInnerValue()).toEqual('InnerServiceTrueValue');
  });
});

