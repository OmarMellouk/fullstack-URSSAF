import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTroisBoutonsComponent } from './popup-trois-boutons.component';

describe('PopupTroisBoutonsComponent', () => {
  let component: PopupTroisBoutonsComponent;
  let fixture: ComponentFixture<PopupTroisBoutonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupTroisBoutonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupTroisBoutonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
