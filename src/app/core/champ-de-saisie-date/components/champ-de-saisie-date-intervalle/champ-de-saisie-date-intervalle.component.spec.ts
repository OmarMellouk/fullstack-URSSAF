import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ChampDeSaisieDateIntervalleComponent } from './champ-de-saisie-date-intervalle.component';

describe('ChampDeSaisieDateIntervalleComponent', () => {
  let component: ChampDeSaisieDateIntervalleComponent;
  let fixture: ComponentFixture<ChampDeSaisieDateIntervalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampDeSaisieDateIntervalleComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampDeSaisieDateIntervalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
