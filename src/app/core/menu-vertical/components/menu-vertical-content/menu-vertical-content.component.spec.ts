import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVerticalContentComponent } from './menu-vertical-content.component';

describe('MenuVerticalContentComponent', () => {
  let component: MenuVerticalContentComponent;
  let fixture: ComponentFixture<MenuVerticalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuVerticalContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVerticalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
