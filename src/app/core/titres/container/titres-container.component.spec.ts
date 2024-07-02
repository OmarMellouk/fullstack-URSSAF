import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitresContainerComponent } from './titres-container.component';

describe('TitresContainerComponent', () => {
  let component: TitresContainerComponent;
  let fixture: ComponentFixture<TitresContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitresContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitresContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
