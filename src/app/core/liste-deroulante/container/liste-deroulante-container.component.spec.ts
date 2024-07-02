import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDeroulanteContainerComponent } from './liste-deroulante-container.component';

describe('ListeDeroulanteContainerComponent', () => {
  let component: ListeDeroulanteContainerComponent;
  let fixture: ComponentFixture<ListeDeroulanteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDeroulanteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDeroulanteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
