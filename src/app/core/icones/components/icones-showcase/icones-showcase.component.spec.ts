import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconesShowcaseComponent } from './icones-showcase.component';

describe('IconesShowcaseComponent', () => {
  let component: IconesShowcaseComponent;
  let fixture: ComponentFixture<IconesShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconesShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconesShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
