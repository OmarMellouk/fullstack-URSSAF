import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauListePiecesComponent } from './tableau-liste-pieces.component';

describe('TableauListePiecesComponent', () => {
  let component: TableauListePiecesComponent;
  let fixture: ComponentFixture<TableauListePiecesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauListePiecesComponent ],
      providers: [
        DatePipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauListePiecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
