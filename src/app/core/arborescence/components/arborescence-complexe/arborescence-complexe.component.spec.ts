import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArborescenceComplexeComponent } from './arborescence-complexe.component';

describe('ArborescenceComplexeComponent', () => {
  let component: ArborescenceComplexeComponent;
  let fixture: ComponentFixture<ArborescenceComplexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArborescenceComplexeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArborescenceComplexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
