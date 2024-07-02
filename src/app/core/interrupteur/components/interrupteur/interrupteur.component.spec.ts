import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { InterrupteurComponent } from './interrupteur.component';

describe('InterrupteurComponent', () => {
  let component: InterrupteurComponent;
  let fixture: ComponentFixture<InterrupteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterrupteurComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterrupteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
