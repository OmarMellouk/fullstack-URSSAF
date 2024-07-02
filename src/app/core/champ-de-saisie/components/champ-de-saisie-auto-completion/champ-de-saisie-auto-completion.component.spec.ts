import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ChampDeSaisieAutoCompletionComponent } from './champ-de-saisie-auto-completion.component';

describe('ChampDeSaisieAutoCompletionComponent', () => {
  let component: ChampDeSaisieAutoCompletionComponent;
  let fixture: ComponentFixture<ChampDeSaisieAutoCompletionComponent>;

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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
