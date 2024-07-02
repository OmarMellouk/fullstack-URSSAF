import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngletDeuxiemeNiveauNavigationComponent } from './onglet-deuxieme-niveau-navigation.component';

describe('OngletDeuxiemeNiveauNavigationComponent', () => {
  let component: OngletDeuxiemeNiveauNavigationComponent;
  let fixture: ComponentFixture<OngletDeuxiemeNiveauNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngletDeuxiemeNiveauNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngletDeuxiemeNiveauNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
