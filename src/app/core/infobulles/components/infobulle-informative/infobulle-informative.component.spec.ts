import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobulleInformativeComponent } from './infobulle-informative.component';

describe('InfobulleInformativeComponent', () => {
  let component: InfobulleInformativeComponent;
  let fixture: ComponentFixture<InfobulleInformativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfobulleInformativeComponent ],
      providers: [
        DatePipe
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobulleInformativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
