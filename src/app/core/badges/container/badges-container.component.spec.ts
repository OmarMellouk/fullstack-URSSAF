import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesContainerComponent } from './badges-container.component';

describe('BadgesContainerComponent', () => {
  let component: BadgesContainerComponent;
  let fixture: ComponentFixture<BadgesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
