import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleListeLongueComponent } from './double-liste-longue.component';

describe('DoubleListeLongueComponent', () => {
  let component: DoubleListeLongueComponent;
  let fixture: ComponentFixture<DoubleListeLongueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleListeLongueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleListeLongueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
