import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { ChampDeSaisieAutoCompletionComponent } from './champ-de-saisie-auto-completion.component';

describe('ChampDeSaisieAutoCompletionComponent', () => {
  let component: ChampDeSaisieAutoCompletionComponent;
  let fixture: ComponentFixture<ChampDeSaisieAutoCompletionComponent>;
  let fb: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampDeSaisieAutoCompletionComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampDeSaisieAutoCompletionComponent);
    fb = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;
    component.form = fb.control(null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
