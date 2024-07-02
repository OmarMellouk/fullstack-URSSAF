import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesOngletPremierNiveauComponent } from './badges-onglet-premier-niveau.component';

describe('BadgesOngletPremierNiveauComponent', () => {
  let component: BadgesOngletPremierNiveauComponent;
  let fixture: ComponentFixture<BadgesOngletPremierNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgesOngletPremierNiveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesOngletPremierNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
