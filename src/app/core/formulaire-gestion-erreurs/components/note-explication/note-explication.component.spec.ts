import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteExplicationComponent } from './note-explication.component';

describe('NoteExplicationComponent', () => {
  let component: NoteExplicationComponent;
  let fixture: ComponentFixture<NoteExplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteExplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteExplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
