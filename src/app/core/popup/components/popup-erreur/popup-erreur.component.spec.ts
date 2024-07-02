import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupErreurComponent } from './popup-erreur.component';

describe('PopupErreurComponent', () => {
  let component: PopupErreurComponent;
  let fixture: ComponentFixture<PopupErreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupErreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupErreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
