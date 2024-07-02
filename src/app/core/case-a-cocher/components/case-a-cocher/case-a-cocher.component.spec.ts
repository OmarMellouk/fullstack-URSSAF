import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CaseACocherComponent } from './case-a-cocher.component';

describe('CaseACocherComponent', () => {
  let component: CaseACocherComponent;
  let fixture: ComponentFixture<CaseACocherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseACocherComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseACocherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
