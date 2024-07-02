import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterrupteurContainerComponent } from './interrupteur-container.component';

describe('InterrupteurContainerComponent', () => {
  let component: InterrupteurContainerComponent;
  let fixture: ComponentFixture<InterrupteurContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterrupteurContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterrupteurContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
