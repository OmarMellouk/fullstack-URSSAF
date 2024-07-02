import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteErreurComponent } from './note-erreur.component';

describe('NoteErreurComponent', () => {
  let component: NoteErreurComponent;
  let fixture: ComponentFixture<NoteErreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteErreurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteErreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
