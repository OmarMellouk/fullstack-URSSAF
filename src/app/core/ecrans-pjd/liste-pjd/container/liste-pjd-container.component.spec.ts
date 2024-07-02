import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListePjdContainerComponent } from './liste-pjd-container.component';

describe('ListePjdContainerComponent', () => {
  let component: ListePjdContainerComponent;
  let fixture: ComponentFixture<ListePjdContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePjdContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePjdContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
