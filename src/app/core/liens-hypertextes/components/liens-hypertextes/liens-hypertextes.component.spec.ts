import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiensHypertextesComponent } from './liens-hypertextes.component';

describe('LiensHypertextesComponent', () => {
  let component: LiensHypertextesComponent;
  let fixture: ComponentFixture<LiensHypertextesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiensHypertextesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiensHypertextesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
