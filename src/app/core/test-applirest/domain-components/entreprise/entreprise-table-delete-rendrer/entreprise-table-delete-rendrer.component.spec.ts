import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseTableDeleteRendrerComponent } from './entreprise-table-delete-rendrer.component';

describe('EntrepriseTableDeleteRendrerComponent', () => {
  let component: EntrepriseTableDeleteRendrerComponent;
  let fixture: ComponentFixture<EntrepriseTableDeleteRendrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseTableDeleteRendrerComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseTableDeleteRendrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
