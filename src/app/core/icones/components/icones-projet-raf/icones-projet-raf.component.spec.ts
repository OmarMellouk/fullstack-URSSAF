import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconesProjetRafComponent } from './icones-projet-raf.component';

describe('IconesProjetRafComponent', () => {
  let component: IconesProjetRafComponent;
  let fixture: ComponentFixture<IconesProjetRafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconesProjetRafComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconesProjetRafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
