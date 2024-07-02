import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BasicService } from '../services/basic.service';
import { FakeInnerService } from '../services/fake-inner.service';
import { InnerService } from '../services/inner.service';
import { BasicComponent } from './basic.component';

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [ BasicComponent ],
      providers: [{provide: InnerService, useClass: FakeInnerService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test de la bonne activation du mock', () => {
    const element = fixture.nativeElement;
    const pElement = element.querySelector('p');
    expect(pElement.innerHTML).toContain('FakeInnerServiceValue');
  });

});
