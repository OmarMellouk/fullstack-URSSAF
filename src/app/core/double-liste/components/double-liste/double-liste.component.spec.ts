import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleListeComponent } from './double-liste.component';

describe('DoubleListeComponent', () => {
  let component: DoubleListeComponent;
  let fixture: ComponentFixture<DoubleListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
