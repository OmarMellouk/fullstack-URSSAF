import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauModifiableComponent } from './tableau-modifiable.component';

describe('TableauModifiableComponent', () => {
  let component: TableauModifiableComponent;
  let fixture: ComponentFixture<TableauModifiableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauModifiableComponent ],
      providers: [DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauModifiableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
