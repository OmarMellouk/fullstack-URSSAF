import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneInformationContainerComponent } from './zone-information-container.component';

describe('ZoneInformationContainerComponent', () => {
  let component: ZoneInformationContainerComponent;
  let fixture: ComponentFixture<ZoneInformationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneInformationContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneInformationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
