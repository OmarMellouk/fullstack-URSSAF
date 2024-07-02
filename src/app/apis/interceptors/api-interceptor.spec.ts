import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {EntrepriseService} from '@app/apis/applirest/api-v3/services/entreprise.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiInterceptor} from '@app/apis/interceptors/api-interceptor';


describe('Test api-interceptor', () => {

  let service: EntrepriseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      // On doit ajouter l'intercepteur API
      providers: [{
          provide: HTTP_INTERCEPTORS,
          useClass: ApiInterceptor,
          multi: true,
        }]
    });
    service = TestBed.inject(EntrepriseService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should add a recouv.id header', () => {
    // On teste sur une requête entreprise, mais l'intercepteur intercepte n'importe quelle requête
    service.denombrerEntreprises().subscribe(response => {
      expect(response).toBeTruthy();
    });
    // On vérifie qu'une requête est bien envoyée
    const httpRequest = httpMock.expectOne(`${service.rootUrl}/entreprises/count`);

    // On vérifie que cette requête a bien un champ recouv.id dans le header
    expect(httpRequest.request.headers.has('recouv.id')).toEqual(true);
  });

});
