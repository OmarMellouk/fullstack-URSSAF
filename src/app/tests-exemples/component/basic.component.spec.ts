import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BasicService } from '../services/basic.service';
import { InnerService } from '../services/inner.service';
import { BasicComponent } from './basic.component';

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [ BasicComponent ],
      providers: [
        BasicService
      ]
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

  it('Test de l"affichage avec le contenu de InnerService par defaut', () => {
    const element = fixture.nativeElement;
    const pElement = element.querySelector('p');
    expect(pElement.innerHTML).toContain('InnerServiceTrueValue');
  });

  it('Test dque le contenu est bien mis à jour suite à la MAJ de la valeur de l InnerService', () => {
    // Given
    const myInnerService = TestBed.inject(InnerService);
    myInnerService.setValue('NewInnerServiceValue');

    // When
    fixture.detectChanges();

    // Then
    const element = fixture.nativeElement;
    const pElement = element.querySelector('p');
    expect(pElement.innerHTML).toContain('NewInnerServiceValue');
  });
});
