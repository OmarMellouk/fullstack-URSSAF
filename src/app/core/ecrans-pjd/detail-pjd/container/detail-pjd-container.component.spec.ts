import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPjdContainerComponent } from './detail-pjd-container.component';

describe('DetailPjdContainerComponent', () => {
  let component: DetailPjdContainerComponent;
  let fixture: ComponentFixture<DetailPjdContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPjdContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPjdContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
