import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { basicRoutes, FirstComponent, SecondComponent } from './basicroute';
import { Location } from '@angular/common';

describe('Router validation', () => {

  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(basicRoutes)],
      declarations: [
        FirstComponent,
        SecondComponent
      ]
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('Naviguer vers "" redirige vers /first', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/first');
  }));

  it('Naviguer vers "second" redirige vers /second', (done) => {
    router.navigate(['second']).finally(() => {
      expect(location.path()).toBe('/second');
      done();
    });
  });
});
