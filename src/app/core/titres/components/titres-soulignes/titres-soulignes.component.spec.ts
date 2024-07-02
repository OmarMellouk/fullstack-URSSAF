import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitresSoulignesComponent } from './titres-soulignes.component';

describe('TitresSoulignesComponent', () => {
  let component: TitresSoulignesComponent;
  let fixture: ComponentFixture<TitresSoulignesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitresSoulignesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitresSoulignesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
