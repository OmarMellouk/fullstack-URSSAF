import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesAssujettiesEtCotisantsComponent } from './bases-assujetties-et-cotisants.component';

describe('BasesAssujettiesEtCotisantsComponent', () => {
  let component: BasesAssujettiesEtCotisantsComponent;
  let fixture: ComponentFixture<BasesAssujettiesEtCotisantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasesAssujettiesEtCotisantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasesAssujettiesEtCotisantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
