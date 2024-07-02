import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexteEtLabelValeurComponent } from './texte-et-label-valeur.component';

describe('TexteEtLabelValeurComponent', () => {
  let component: TexteEtLabelValeurComponent;
  let fixture: ComponentFixture<TexteEtLabelValeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexteEtLabelValeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexteEtLabelValeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
