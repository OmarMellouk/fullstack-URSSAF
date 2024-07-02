import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDepliableMultiEnteteComponent } from './tableau-depliable-multi-entete.component';

describe('TableauDepliableMultiEnteteComponent', () => {
  let component: TableauDepliableMultiEnteteComponent;
  let fixture: ComponentFixture<TableauDepliableMultiEnteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauDepliableMultiEnteteComponent ],
      providers: [DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDepliableMultiEnteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
