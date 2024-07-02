import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteErreurDonneesComponent } from './note-erreur-donnees.component';

describe('NoteErreurDonneesComponent', () => {
  let component: NoteErreurDonneesComponent;
  let fixture: ComponentFixture<NoteErreurDonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteErreurDonneesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteErreurDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
