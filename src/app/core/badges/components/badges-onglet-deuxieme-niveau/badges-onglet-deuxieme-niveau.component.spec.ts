import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesOngletDeuxiemeNiveauComponent } from './badges-onglet-deuxieme-niveau.component';

describe('BadgesOngletDeuxiemeNiveauComponent', () => {
  let component: BadgesOngletDeuxiemeNiveauComponent;
  let fixture: ComponentFixture<BadgesOngletDeuxiemeNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgesOngletDeuxiemeNiveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesOngletDeuxiemeNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
