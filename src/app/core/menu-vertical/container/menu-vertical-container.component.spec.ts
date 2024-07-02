import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVerticalContainerComponent } from './menu-vertical-container.component';

describe('MenuVerticalContainerComponent', () => {
  let component: MenuVerticalContainerComponent;
  let fixture: ComponentFixture<MenuVerticalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVerticalContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVerticalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
