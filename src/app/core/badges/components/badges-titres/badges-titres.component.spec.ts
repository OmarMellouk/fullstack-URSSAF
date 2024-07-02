import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesTitresComponent } from './badges-titres.component';

describe('BadgesTitresComponent', () => {
  let component: BadgesTitresComponent;
  let fixture: ComponentFixture<BadgesTitresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgesTitresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgesTitresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
