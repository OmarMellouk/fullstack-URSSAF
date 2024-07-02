import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconesProjetPoraComponent } from './icones-projet-pora.component';

describe('IconesProjetPoraComponent', () => {
  let component: IconesProjetPoraComponent;
  let fixture: ComponentFixture<IconesProjetPoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconesProjetPoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconesProjetPoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
