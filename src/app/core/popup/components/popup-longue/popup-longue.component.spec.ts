import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupLongueComponent } from './popup-longue.component';

describe('PopupLongueComponent', () => {
  let component: PopupLongueComponent;
  let fixture: ComponentFixture<PopupLongueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupLongueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupLongueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
