import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntreprisesListeComponent } from './entreprises-liste.component';
import { EntrepriseService } from '@app/apis/applirest/api-v3/services';
import { of, throwError } from 'rxjs';
import { EntrepriseV2Service } from '@app/apis/applirest/api-v2/services';

describe('EntreprisesListeComponent', () => {

  let component: EntreprisesListeComponent;
  let fixture: ComponentFixture<EntreprisesListeComponent>;

  let testEntreprisesTotalNumber: any;
  let testEntreprisesV2List: any;

  let entrepriseServiceSpy: any;
  let entrepriseV2ServiceSpy: any;
  let denombrerEntreprisesWithSuccessSpy: any;
  let rechercherEntreprisesV2WithSuccessSpy: any;

  beforeEach(() => {
    testEntreprisesTotalNumber = 30;
    testEntreprisesV2List = [{'dateCreation': '2022-08-16T06:57:03.533069+02:00', 'dateMaj': '2022-08-16T04:57:03.578+00:00', 'utilisateur': 'AC750G5000@cn=USR_READ_NAT_APP_FUST,ou=FUST,ou=Applications,ou=Technique,dc=recouv', 'id': 458, 'siren': '123456789', 'denomination': 'Entreprise1', 'activite': 'Activité', 'naf': '99X', 'dateFondation': '2022-08-16', 'activerSuivi': null, 'adresses': null, 'attestations': null}];
    // Create a fake EntrepriseService object to mock method denombrerEntreprises()
    entrepriseServiceSpy = jasmine.createSpyObj('EntrepriseService', ['denombrerEntreprises']);
    denombrerEntreprisesWithSuccessSpy = entrepriseServiceSpy.denombrerEntreprises.and.returnValue(of(testEntreprisesTotalNumber));
    // Create a fake EntrepriseV2Service object to mock method rechercherEntreprises()
    entrepriseV2ServiceSpy = jasmine.createSpyObj('EntrepriseV2Service', ['rechercherEntreprises']);
    rechercherEntreprisesV2WithSuccessSpy = entrepriseV2ServiceSpy.rechercherEntreprises.and.returnValue(of(testEntreprisesV2List));

    // Initializing environment for unit testing
    TestBed.configureTestingModule({
      declarations: [EntreprisesListeComponent],
      providers: [
        {provide: EntrepriseService, useValue: entrepriseServiceSpy},
        {provide: EntrepriseV2Service, useValue: entrepriseV2ServiceSpy},
      ]
    });

    fixture = TestBed.createComponent(EntreprisesListeComponent);
    component = fixture.componentInstance;
  });


  it('should call method denombrerEntreprises on component initialization', () => {
    // Detecter l'initialisation du component (exécution de la méthode OnInit())
    fixture.detectChanges();
    // Vérifier l'exécution de la méthode denombrerEntreprises() après l'initialisation du component
    expect(denombrerEntreprisesWithSuccessSpy.calls.any())
      .withContext('denombrerEntreprises called')
      .toBe(true);
    // Vérifier le résultat en cas de succès
    expect(component.erreur).toBe(false);
    expect(component.spinnerActif).toBe(false);
  });


  it('should throw error when calling method denombrerEntreprises', () => {
    const denombrerEntreprisesWithFailureSpy = entrepriseServiceSpy.denombrerEntreprises.and.returnValue(throwError({status: 404}));
    // Detecter l'initialisation du component (exécution de la méthode OnInit())
    fixture.detectChanges();
    // Vérifier l'exécution de la méthode denombrerEntreprises() après l'initialisation du component
    expect(denombrerEntreprisesWithFailureSpy.calls.any())
      .withContext('denombrerEntreprises called')
      .toBe(true);
    // Vérifier le résultat en cas d'échec
    expect(component.erreur).toBe(true);
    expect(component.spinnerActif).toBe(false);
  });


  it('should call method recherchrerEntreprises on component initialization', () => {
    // Detecter l'initialisation du component onInit()
    fixture.detectChanges();
    // Vérifier l'exécution de la méthode rechercherEntreprises() après l'initialisation du component
    expect(rechercherEntreprisesV2WithSuccessSpy.calls.any())
      .withContext('rechercherEntreprises called')
      .toBe(true);
    // Vérifier le résultat en cas de succès
    expect(component.isServiceV2Up).toBe(true);
    expect(component.erreur).toBe(false);
    expect(component.spinnerActif).toBe(false);
  });


  it('should throw error when calling method recherchrerEntreprises', () => {
    const rechercherEntreprisesV2WithFailureSpy = entrepriseV2ServiceSpy.rechercherEntreprises.and.returnValue(throwError({status: 404}));
    // Detecter l'initialisation du component onInit()
    fixture.detectChanges();
    // Vérifier l'exécution de la méthode rechercherEntreprises() après l'initialisation du component
    expect(rechercherEntreprisesV2WithFailureSpy.calls.any())
      .withContext('rechercherEntreprises called')
      .toBe(true);
    // Vérifier le résultat en cas d'échec
    expect(component.isServiceV2Up).toBe(false);
    expect(component.erreur).toBe(true);
    expect(component.spinnerActif).toBe(false);
  });

});
