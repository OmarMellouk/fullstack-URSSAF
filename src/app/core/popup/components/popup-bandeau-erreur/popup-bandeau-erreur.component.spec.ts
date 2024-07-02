import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupBandeauErreurComponent } from './popup-bandeau-erreur.component';

describe('PopupBandeauErreurComponent', () => {
  let component: PopupBandeauErreurComponent;
  let fixture: ComponentFixture<PopupBandeauErreurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupBandeauErreurComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupBandeauErreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
