import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobulleClassiqueComponent } from './infobulle-classique.component';

describe('InfobulleClassiqueComponent', () => {
  let component: InfobulleClassiqueComponent;
  let fixture: ComponentFixture<InfobulleClassiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfobulleClassiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobulleClassiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
