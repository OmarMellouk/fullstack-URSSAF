import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableauPieceAnnuelleComponent } from './tableau-piece-annuelle.component';

describe('TableauPieceAnnuelleComponent', () => {
  let component: TableauPieceAnnuelleComponent;
  let fixture: ComponentFixture<TableauPieceAnnuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauPieceAnnuelleComponent ],
      providers: [
        DatePipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauPieceAnnuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
