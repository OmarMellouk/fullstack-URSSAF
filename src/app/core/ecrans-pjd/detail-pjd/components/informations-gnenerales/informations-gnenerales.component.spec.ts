import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsGneneralesComponent } from './informations-gnenerales.component';

describe('InformationsGneneralesComponent', () => {
  let component: InformationsGneneralesComponent;
  let fixture: ComponentFixture<InformationsGneneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationsGneneralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationsGneneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
