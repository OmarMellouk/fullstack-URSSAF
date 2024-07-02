import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZonePliableDepliableComponentContainerComponent } from './zone-pliable-depliable-container.component';

describe('ZonePliableDepliableComponentContainerComponent', () => {
  let component: ZonePliableDepliableComponentContainerComponent;
  let fixture: ComponentFixture<ZonePliableDepliableComponentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonePliableDepliableComponentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonePliableDepliableComponentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
