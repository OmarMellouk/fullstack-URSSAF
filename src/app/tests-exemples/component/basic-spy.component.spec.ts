import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BasicService } from '../services/basic.service';
import { InnerService } from '../services/inner.service';
import { BasicComponent } from './basic.component';

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;
  let spy: jasmine.SpyObj<InnerService>;

  beforeEach(() => {

    spy = jasmine.createSpyObj('InnerService', ['getValue']);
    spy.getValue.and.returnValue('SpyReturnedValue');

    TestBed.configureTestingModule({
      declarations: [ BasicComponent ],
      providers: [
        BasicService,
        {provide: InnerService, useValue: spy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test de l usage de l espion', () => {
    const element = fixture.nativeElement;
    const pElement = element.querySelector('p');
    expect(pElement.innerHTML).toContain('SpyReturnedValue');
  });
});
