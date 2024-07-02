import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngletsDetailComponent } from './onglets-detail.component';

describe('OngletsDetailComponent', () => {
  let component: OngletsDetailComponent;
  let fixture: ComponentFixture<OngletsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OngletsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OngletsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
