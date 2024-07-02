import { TestBed } from '@angular/core/testing';
import { AsyncService } from './async.service';

describe('WebService async', () => {

  let theAsyncService: AsyncService;

  beforeEach(() => {

    TestBed.configureTestingModule({});
    theAsyncService = TestBed.inject(AsyncService);
  });

  it('Validation d un appel asynchrone via usage du done Jasmine', (done) => {
    theAsyncService.getPromise().then(value => {
        expect(value).toBe('the_result');
        done();
    });
  });

  it('Validation de plusieurs éléments asynchrones via promise', () => {

    const promise1 = new Promise(resolve => {

      theAsyncService.getPromise().then(value => {
        expect(value).toBe('the_result');
        resolve('done');
      });
    });

    const promise2 = new Promise(resolve => {

      theAsyncService.getPromise().then(value => {
        expect(value).toBe('the_result');
        resolve('done');
      });
    });

    return Promise.all([promise1, promise2]);
  });

});
