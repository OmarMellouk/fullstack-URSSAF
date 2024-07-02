import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAvertissementComponent } from './note-avertissement.component';

describe('NoteAvertissementComponent', () => {
  let component: NoteAvertissementComponent;
  let fixture: ComponentFixture<NoteAvertissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteAvertissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteAvertissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
