import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OngletPremierNiveauComponent } from './onglet-premier-niveau.component';

describe('OngletPremierNiveauComponent', () => {
  let component: OngletPremierNiveauComponent;
  let fixture: ComponentFixture<OngletPremierNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngletPremierNiveauComponent ],
      imports: [
        NgbModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngletPremierNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
