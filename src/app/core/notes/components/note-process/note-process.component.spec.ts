import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteProcessComponent } from './note-process.component';

describe('NoteProcessComponent', () => {
  let component: NoteProcessComponent;
  let fixture: ComponentFixture<NoteProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
