import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemonstrationRemComponent } from './desmonstration-rem.component';

describe('DemonstrationRemComponent', () => {
  let component: DemonstrationRemComponent;
  let fixture: ComponentFixture<DemonstrationRemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemonstrationRemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemonstrationRemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
