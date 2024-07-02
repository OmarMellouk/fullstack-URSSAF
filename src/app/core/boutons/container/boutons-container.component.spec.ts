import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonsContainerComponent } from './boutons-container.component';

describe('BoutonsContainerComponent', () => {
  let component: BoutonsContainerComponent;
  let fixture: ComponentFixture<BoutonsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoutonsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
