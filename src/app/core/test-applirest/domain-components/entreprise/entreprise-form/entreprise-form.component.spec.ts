import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrepriseFormComponent, slashValidator } from './entreprise-form.component';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateMockModule } from '@hetznercloud/ngx-translate-mock';
import { ChampDeSaisieDateModule } from '@app/core/champ-de-saisie-date/champ-de-saisie-date.module';
import { EntrepriseService } from '@app/apis/applirest/api-v3/services';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

describe('EntrepriseFormComponent', () => {
  let component: EntrepriseFormComponent;
  let fixture: ComponentFixture<EntrepriseFormComponent>;
  const fakeEntreprise = {
    denomination: 'Mon entreprise',
    siren: '123456789',
    activite: 'Prestations informatiques',
    naf: '123',
    dateCreation: '2020-12-12'
  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateMockModule, ReactiveFormsModule, ChampDeSaisieDateModule],
      declarations: [EntrepriseFormComponent],
      providers: [
        {
          provide: EntrepriseService, useValue: {
            recupererEntreprise$Json: (id: number) => of(fakeEntreprise), modifierEntreprise: () => of(fakeEntreprise)
          }
        },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: (id: number) => 1 } } } }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EntrepriseFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test slashValidator avec slash', () => {
    expect (slashValidator(new FormControl('/'))).not.toEqual(null);
  });

  it('test slashValidator avec backslash', () => {
    expect (slashValidator(new FormControl('\\'))).not.toEqual(null);
  });

  it('test slashValidator avec texte sans slash', () => {
    expect (slashValidator(new FormControl('texte sans slash'))).toEqual(null);
  });

  it('test onSubmit appel creerEntreprise', () => {
    component.edition = false;
    spyOn(component, 'creerEntreprise');
    component.onSubmit();
    expect(component.creerEntreprise).toHaveBeenCalledTimes(1);
  });

  it('test onSubmit appel modifieEntreprise', () => {
    component.edition = true;
    spyOn(component, 'modifierEntreprise');
    component.onSubmit();
    expect(component.modifierEntreprise).toHaveBeenCalledTimes(1);
  });

});
