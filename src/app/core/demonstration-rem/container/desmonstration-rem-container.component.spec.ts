import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstrationRemContainerComponent } from './desmonstration-rem-container.component';

describe('DemonstrationRemContainerComponent', () => {
  let component: DemonstrationRemContainerComponent;
  let fixture: ComponentFixture<DemonstrationRemContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonstrationRemContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemonstrationRemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
