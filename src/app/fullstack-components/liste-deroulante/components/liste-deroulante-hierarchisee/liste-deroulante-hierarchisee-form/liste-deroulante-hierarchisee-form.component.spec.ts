import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListeDeroulanteHierarchiseeFormComponent } from './liste-deroulante-hierarchisee-form.component';

describe('ListeDeroulanteHierarchiseeFormComponent', () => {
  let component: ListeDeroulanteHierarchiseeFormComponent;
  let fb: FormBuilder;
  let fixture: ComponentFixture<ListeDeroulanteHierarchiseeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDeroulanteHierarchiseeFormComponent ],
      imports: [
        ReactiveFormsModule,
        NgbModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDeroulanteHierarchiseeFormComponent);
    fb = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;

    component.form = fb.group({
      test: [false, null]
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
