import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampDeSaisieContainerComponent } from './champ-de-saisie-container.component';

describe('ChampDeSaisieContainerComponent', () => {
  let component: ChampDeSaisieContainerComponent;
  let fixture: ComponentFixture<ChampDeSaisieContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampDeSaisieContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampDeSaisieContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
