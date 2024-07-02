import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoTechniqueComponent } from './memo-technique.component';

describe('MemoTechniqueComponent', () => {
  let component: MemoTechniqueComponent;
  let fixture: ComponentFixture<MemoTechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoTechniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
