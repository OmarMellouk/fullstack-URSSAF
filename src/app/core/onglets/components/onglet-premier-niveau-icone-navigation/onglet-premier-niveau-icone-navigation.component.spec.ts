import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngletPremierNiveauIconeNavigationComponent } from './onglet-premier-niveau-icone-navigation.component';

describe('OngletPremierNiveauIconeNavigationComponent', () => {
  let component: OngletPremierNiveauIconeNavigationComponent;
  let fixture: ComponentFixture<OngletPremierNiveauIconeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngletPremierNiveauIconeNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngletPremierNiveauIconeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
