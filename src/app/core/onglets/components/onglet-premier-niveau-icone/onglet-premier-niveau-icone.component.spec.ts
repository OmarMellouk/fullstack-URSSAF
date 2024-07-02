import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OngletPremierNiveauIconeComponent } from './onglet-premier-niveau-icone.component';

describe('OngletPremierNiveauIconeComponent', () => {
  let component: OngletPremierNiveauIconeComponent;
  let fixture: ComponentFixture<OngletPremierNiveauIconeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngletPremierNiveauIconeComponent ],
      imports: [
        NgbModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngletPremierNiveauIconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
