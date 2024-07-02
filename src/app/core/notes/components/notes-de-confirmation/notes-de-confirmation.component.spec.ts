import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesDeConfirmationComponent } from './notes-de-confirmation.component';

describe('NotesDeConfirmationComponent', () => {
  let component: NotesDeConfirmationComponent;
  let fixture: ComponentFixture<NotesDeConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesDeConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesDeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
