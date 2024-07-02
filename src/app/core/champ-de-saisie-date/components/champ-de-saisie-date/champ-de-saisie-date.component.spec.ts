import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ChampDeSaisieDateComponent } from './champ-de-saisie-date.component';

describe('ChampDeSaisieDateComponent', () => {
  let component: ChampDeSaisieDateComponent;
  let fixture: ComponentFixture<ChampDeSaisieDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampDeSaisieDateComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampDeSaisieDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
