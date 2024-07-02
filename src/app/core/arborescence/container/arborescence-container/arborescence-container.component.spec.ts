import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArborescenceContainerComponent } from './arborescence-container.component';

describe('ArborescenceContainerComponent', () => {
  let component: ArborescenceContainerComponent;
  let fixture: ComponentFixture<ArborescenceContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArborescenceContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArborescenceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
