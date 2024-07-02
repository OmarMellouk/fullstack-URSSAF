import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfobulleAdditionnellesComponent } from './infobulle-additionnelles.component';

describe('InfobulleAdditionnellesComponent', () => {
  let component: InfobulleAdditionnellesComponent;
  let fixture: ComponentFixture<InfobulleAdditionnellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfobulleAdditionnellesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfobulleAdditionnellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
