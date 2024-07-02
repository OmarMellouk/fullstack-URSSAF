import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauContainerComponent } from './tableau-container.component';

describe('TableauContainerComponent', () => {
  let component: TableauContainerComponent;
  let fixture: ComponentFixture<TableauContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
