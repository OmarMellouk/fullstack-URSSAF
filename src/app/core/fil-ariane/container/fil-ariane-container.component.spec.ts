import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilArianeContainerComponent } from './fil-ariane-container.component';

describe('FilArianeContainerComponent', () => {
  let component: FilArianeContainerComponent;
  let fixture: ComponentFixture<FilArianeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilArianeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilArianeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
