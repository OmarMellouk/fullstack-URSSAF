import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupProgressionComponent } from './popup-progression.component';

describe('PopupProgressionComponent', () => {
  let component: PopupProgressionComponent;
  let fixture: ComponentFixture<PopupProgressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupProgressionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
