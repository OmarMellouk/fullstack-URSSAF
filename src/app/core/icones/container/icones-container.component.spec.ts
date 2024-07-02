import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconesContainerComponent } from './icones-container.component';

describe('IconesContainerComponent', () => {
  let component: IconesContainerComponent;
  let fixture: ComponentFixture<IconesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
