import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampDeSaisieDateContainerComponent } from './champ-de-saisie-date-container.component';

describe('ChampDeSaisieDateContainerComponent', () => {
  let component: ChampDeSaisieDateContainerComponent;
  let fixture: ComponentFixture<ChampDeSaisieDateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampDeSaisieDateContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampDeSaisieDateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
