import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiensHypertextesContainerComponent } from './liens-hypertextes-container.component';

describe('LiensHypertextesContainerComponent', () => {
  let component: LiensHypertextesContainerComponent;
  let fixture: ComponentFixture<LiensHypertextesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiensHypertextesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiensHypertextesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
