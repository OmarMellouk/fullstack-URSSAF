import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonDeuxiemeNiveauComponent } from './bouton-deuxieme-niveau.component';

describe('BoutonDeuxiemeNiveauComponent', () => {
  let component: BoutonDeuxiemeNiveauComponent;
  let fixture: ComponentFixture<BoutonDeuxiemeNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonDeuxiemeNiveauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonDeuxiemeNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
