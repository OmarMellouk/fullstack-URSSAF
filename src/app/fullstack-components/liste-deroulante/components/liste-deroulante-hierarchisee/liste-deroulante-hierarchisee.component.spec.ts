import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ListeDeroulanteHierarchiseeComponent } from './liste-deroulante-hierarchisee.component';

describe('ListeDeroulanteHierarchiseeComponent', () => {
  let component: ListeDeroulanteHierarchiseeComponent;
  let fixture: ComponentFixture<ListeDeroulanteHierarchiseeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDeroulanteHierarchiseeComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDeroulanteHierarchiseeComponent);
    component = fixture.componentInstance;
    component.form = component['fb'].group({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
