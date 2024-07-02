import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngletPremierNiveauNavigationComponent } from './onglet-premier-niveau-navigation.component';

describe('OngletPremierNiveauNavigationComponent', () => {
  let component: OngletPremierNiveauNavigationComponent;
  let fixture: ComponentFixture<OngletPremierNiveauNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngletPremierNiveauNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngletPremierNiveauNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
