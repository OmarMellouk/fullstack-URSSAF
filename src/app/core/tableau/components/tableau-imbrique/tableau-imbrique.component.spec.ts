import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauImbriqueComponent } from './tableau-imbrique.component';

describe('TableauImbriqueComponent', () => {
  let component: TableauImbriqueComponent;
  let fixture: ComponentFixture<TableauImbriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauImbriqueComponent ],
      providers: [DatePipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauImbriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
