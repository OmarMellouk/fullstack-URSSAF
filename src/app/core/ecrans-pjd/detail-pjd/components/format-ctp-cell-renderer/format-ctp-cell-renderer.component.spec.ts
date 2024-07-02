import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatCtpCellRendererComponent } from './format-ctp-cell-renderer.component';

describe('FormatCtpCellRendererComponent', () => {
  let component: FormatCtpCellRendererComponent;
  let fixture: ComponentFixture<FormatCtpCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatCtpCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatCtpCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
