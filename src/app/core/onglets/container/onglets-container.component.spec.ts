import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngletsContainerComponent } from './onglets-container.component';

describe('OngletsContainerComponent', () => {
  let component: OngletsContainerComponent;
  let fixture: ComponentFixture<OngletsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngletsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngletsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
