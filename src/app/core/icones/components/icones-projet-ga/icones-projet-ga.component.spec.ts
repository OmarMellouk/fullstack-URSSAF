import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconesProjetGaComponent } from './icones-projet-ga.component';

describe('IconesProjetGaComponent', () => {
  let component: IconesProjetGaComponent;
  let fixture: ComponentFixture<IconesProjetGaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconesProjetGaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconesProjetGaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
