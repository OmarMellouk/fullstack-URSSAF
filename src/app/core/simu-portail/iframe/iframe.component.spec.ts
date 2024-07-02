import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IFrameComponent, SafePipe } from './iframe.component';
import { CommunicationSPAModule } from '@acoss/communication-spa-angular';

describe('IFrameComponent', () => {
  let component: IFrameComponent;
  let fixture: ComponentFixture<IFrameComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IFrameComponent, SafePipe ],
      imports: [CommunicationSPAModule.forRoot('Simu Portail')]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
