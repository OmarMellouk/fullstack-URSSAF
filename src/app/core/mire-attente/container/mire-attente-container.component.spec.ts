import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MireAttenteContainerComponent } from './mire-attente-container.component';

describe('MireAttenteContainerComponent', () => {
  let component: MireAttenteContainerComponent;
  let fixture: ComponentFixture<MireAttenteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MireAttenteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MireAttenteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
