import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesWizardComponent } from './badges-wizard.component';

describe('BadgesWizardComponent', () => {
  let component: BadgesWizardComponent;
  let fixture: ComponentFixture<BadgesWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgesWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
