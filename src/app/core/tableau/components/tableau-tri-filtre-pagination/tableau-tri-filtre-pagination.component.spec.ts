import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauTriFiltrePaginationComponent } from './tableau-tri-filtre-pagination.component';

describe('TableauTriFiltrePaginationComponent', () => {
  let component: TableauTriFiltrePaginationComponent;
  let fixture: ComponentFixture<TableauTriFiltrePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauTriFiltrePaginationComponent ],
      providers: [DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauTriFiltrePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
