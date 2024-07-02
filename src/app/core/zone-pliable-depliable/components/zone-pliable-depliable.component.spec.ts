import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZonePliableDepliableComponent } from './zone-pliable-depliable.component';

describe('ZonePliableDepliableComponent', () => {
  let component: ZonePliableDepliableComponent;
  let fixture: ComponentFixture<ZonePliableDepliableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonePliableDepliableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonePliableDepliableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
