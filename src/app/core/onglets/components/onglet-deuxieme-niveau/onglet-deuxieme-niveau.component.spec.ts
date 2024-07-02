import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OngletDeuxiemeNiveauComponent } from './onglet-deuxieme-niveau.component';

describe('OngletDeuxiemeNiveauComponent', () => {
  let component: OngletDeuxiemeNiveauComponent;
  let fixture: ComponentFixture<OngletDeuxiemeNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngletDeuxiemeNiveauComponent ],
      imports: [
        NgbModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngletDeuxiemeNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
