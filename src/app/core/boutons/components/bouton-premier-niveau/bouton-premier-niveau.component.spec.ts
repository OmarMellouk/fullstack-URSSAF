import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonPremierNiveauComponent } from './bouton-premier-niveau.component';

describe('BoutonPremierNiveauComponent', () => {
  let component: BoutonPremierNiveauComponent;
  let fixture: ComponentFixture<BoutonPremierNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonPremierNiveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonPremierNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
