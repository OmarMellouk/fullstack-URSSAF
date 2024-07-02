import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleListeContainerComponent } from './double-liste-container.component';

describe('DoubleListeContainerComponent', () => {
  let component: DoubleListeContainerComponent;
  let fixture: ComponentFixture<DoubleListeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleListeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleListeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
