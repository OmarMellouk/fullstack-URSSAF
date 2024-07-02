import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { WebService } from './web.service';

describe('WebService', () => {

  let webService: WebService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    webService = TestBed.inject(WebService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('Validation d un appel asynchrone via usage du done Jasmine', () => {

    const promise1 = new Promise(resolve => {
      webService.getRestEndpointData()
        .subscribe(result => {

          expect(result.code).toBe('ho');
          expect(result.message).toBe('Hallo');
          resolve('done');
        });
    });

    const mockValues = { code: 'ho' , message: 'Hallo' };
    httpMock
      .expectOne('http://localhost:8080/test')
      // return the fake response when we receive a request
      .flush(mockValues);

    return promise1;
  });

});
