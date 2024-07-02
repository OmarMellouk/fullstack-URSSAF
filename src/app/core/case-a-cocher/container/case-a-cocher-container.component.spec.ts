import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseACocherContainerComponent } from './case-a-cocher-container.component';

describe('CaseACocherContainerComponent', () => {
  let component: CaseACocherContainerComponent;
  let fixture: ComponentFixture<CaseACocherContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseACocherContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseACocherContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
