import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArborescenceSimpleComponent } from './arborescence-simple.component';

describe('ArborescenceSimpleComponent', () => {
  let component: ArborescenceSimpleComponent;
  let fixture: ComponentFixture<ArborescenceSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArborescenceSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArborescenceSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
