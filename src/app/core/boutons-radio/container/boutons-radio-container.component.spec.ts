import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonsRadioContainerComponent } from './boutons-radio-container.component';

describe('BoutonsRadioContainerComponent', () => {
  let component: BoutonsRadioContainerComponent;
  let fixture: ComponentFixture<BoutonsRadioContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonsRadioContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonsRadioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
