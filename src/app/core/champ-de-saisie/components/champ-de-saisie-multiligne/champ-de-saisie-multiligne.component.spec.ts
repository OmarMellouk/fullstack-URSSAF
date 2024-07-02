import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ChampDeSaisieMultiligneComponent } from './champ-de-saisie-multiligne.component';

describe('ChampDeSaisieMultiligneComponent', () => {
  let component: ChampDeSaisieMultiligneComponent;
  let fixture: ComponentFixture<ChampDeSaisieMultiligneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampDeSaisieMultiligneComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampDeSaisieMultiligneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
