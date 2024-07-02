import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobullesComponent } from './infobulles.component';

describe('InfobullesComponent', () => {
  let component: InfobullesComponent;
  let fixture: ComponentFixture<InfobullesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfobullesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobullesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
