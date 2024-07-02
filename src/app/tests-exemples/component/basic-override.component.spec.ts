import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
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
      providers: [{provide: InnerService, useValue: spy}]
    });
    TestBed.overrideComponent(BasicComponent,
    { remove: {
        templateUrl: './basic.component.html'
        },
      add: {
        template: '<h1>{{basicService.getInnerValue()}}</h1>'
        }
    });
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test de l usage de l espion', () => {
    const element = fixture.nativeElement;
    const pElement = element.querySelector('h1');
    expect(pElement.innerHTML).toContain('SpyReturnedValue');
  });
});
