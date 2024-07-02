import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { CommunicationSPAComponent, MessageDTOVision } from './communication-spa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommunicationSPAModule } from '@acoss/communication-spa-angular';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MessageDTO } from '@acoss/communication-spa-core/dist/main/CommunicationSPAServiceExports';


@Component({
  template: `<input type="text" [(ngModel)]="user.username"/>`
})
class TestComponent {
  user = { username: 'peeskillet' };
}

describe('CommunicationSPAComponent', () => {
  let component: CommunicationSPAComponent;
  let fixture: ComponentFixture<CommunicationSPAComponent>;
  let spy: jasmine.SpyObj<CommunicationSPAModule>;

  beforeEach(waitForAsync(() => {
    spy = jasmine.createSpyObj('CommunicationSPAModule', ['subscribe', 'sendChildrenMessage',
    'sendParentMessage', 'sendBroadcastMessage', 'getUUID']);
    spy.subscribe.and.returnValue('AFakeUUID');
    spy.getUUID.and.returnValue('AFakeUUID');

    TestBed.configureTestingModule({
      declarations: [ CommunicationSPAComponent ],
      imports: [ FormsModule, ReactiveFormsModule, CommunicationSPAModule.forRoot('Simu Portail') ],
      providers: [
        {provide: CommunicationSPAModule, useValue: spy}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationSPAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Doit s enregistrer au module CommunicationSPA à la création', () => {
    expect(component).toBeTruthy();
    expect(spy.subscribe.calls.count()).toBe(1);
  });

  it('Doit utiliser sendChildMessage v1 creation des inputs', () => {
    // Given : Création d'input dans le test
    const namespace = document.createElement('input');
    const topic = document.createElement('input');
    const handlerMessage = document.createElement('input');
    namespace.value = 'namespace_value';
    topic.value = 'topic_value';
    handlerMessage.value = 'handlerMessage_value';

    // When : Appel du handler avec ces entrées
    component.addHandler(namespace, topic, handlerMessage);

    // Then : Vérification du résultat
    expect(spy.subscribe.calls.count()).toBe(2); // Le subscribe a été appelé une fois à la création
    expect(spy.subscribe).toHaveBeenCalledWith(namespace.value, topic.value, jasmine.any(Function));
    expect(spy.subscribe).toHaveBeenCalledWith(namespace.value, topic.value, jasmine.anything());
  });

  it('Doit utiliser addHandler v3 récupération des inputs via fixture sans temporisation', () => {

    // Given : Récupération des inputs dans la page
    const handlerNamespace = fixture.debugElement.query(By.css('#handlerNamespace')).nativeElement;
    const handlerTopic = fixture.debugElement.query(By.css('#handlerTopic')).nativeElement;
    const handlerMessage = fixture.debugElement.query(By.css('#handlerMessage')).nativeElement;
    // Mise à jour des valeurs d'entrée
    handlerNamespace.value = 'namespace_value';
    handlerTopic.value = 'topic_value';
    handlerMessage.value = 'handlerMessage_value';
    // Création d'évènements pour respecter le cycle de vie Angular
    handlerNamespace.dispatchEvent(new Event('input'));
    handlerTopic.dispatchEvent(new Event('input'));
    handlerMessage.dispatchEvent(new Event('input'));

    // When : Récupération du handler et génération d'un click en mode Angular
    const addHandler = fixture.debugElement.query(By.css('#addHandler')).nativeElement;
    addHandler.dispatchEvent(new Event('click')); // addHandler.nativeElement.click(); fonctionne aussi

    // Then : Vérification des résultats
    expect(spy.subscribe.calls.count()).toBe(2); // Le subscribe a été appelé une fois à la création
    expect(spy.subscribe).toHaveBeenCalledWith(handlerNamespace.value,
      handlerTopic.value, jasmine.any(Function));
    expect(spy.subscribe).toHaveBeenCalledWith(handlerNamespace.value,
      handlerTopic.value, jasmine.anything());

  });

  it('Doit utiliser addHandler v3 récupération des inputs via fixture avec tick', fakeAsync (() => {

    // Test identique au précédent mais plus propre car on ajoute la gestion de la temporalité Angular
    // dans les deux cas le test passe donc cette gestion n'est pas toujours obligatoire

    // Given : Récupération des inputs dans la page
    const handlerNamespace = fixture.debugElement.query(By.css('#handlerNamespace')).nativeElement;
    const handlerTopic = fixture.debugElement.query(By.css('#handlerTopic')).nativeElement;
    const handlerMessage = fixture.debugElement.query(By.css('#handlerMessage')).nativeElement;
    handlerNamespace.value = 'namespace_value';
    handlerTopic.value = 'topic_value';
    handlerMessage.value = 'handlerMessage_value';
    handlerNamespace.dispatchEvent(new Event('input'));
    handlerTopic.dispatchEvent(new Event('input'));
    handlerMessage.dispatchEvent(new Event('input'));

    // Demande/Attente des mises à jour Angular
    fixture.detectChanges(); // Attente que l'ensemble des mise à jour du View model soient réalisés
    tick(); // Attente de résolution de l'ensemble des promises (la MAJ du NgModel est réalisée via promise)

    // When : Récupération du handler et génération d'un click en mode Angular
    const addHandler = fixture.debugElement.query(By.css('#addHandler')).nativeElement;
    addHandler.dispatchEvent(new Event('click'));

    // Demande/Attente des mises à jour Angular
    fixture.detectChanges();
    tick();

    // Then : Vérification des résultats
    expect(spy.subscribe.calls.count()).toBe(2); // Le subscribe a été appelé une fois à la création
    expect(spy.subscribe).toHaveBeenCalledWith(handlerNamespace.value,
      handlerTopic.value, jasmine.any(Function));
    expect(spy.subscribe).toHaveBeenCalledWith(handlerNamespace.value,
      handlerTopic.value, jasmine.anything());

  }));

  it('Doit utiliser sendChildMessage v4 usage then stable', (done) => {

    // Given : Récupération des inputs dans la page
    const handlerNamespace = fixture.debugElement.query(By.css('#handlerNamespace')).nativeElement;
    const handlerTopic = fixture.debugElement.query(By.css('#handlerTopic')).nativeElement;
    const handlerMessage = fixture.debugElement.query(By.css('#handlerMessage')).nativeElement;
    handlerNamespace.value = 'namespace_value';
    handlerTopic.value = 'topic_value';
    handlerMessage.value = 'handlerMessage_value';
    handlerNamespace.dispatchEvent(new Event('input'));
    handlerTopic.dispatchEvent(new Event('input'));
    handlerMessage.dispatchEvent(new Event('input'));

    // When : Récupération du handler et génération d'un click en mode Angular
    const addHandler = fixture.debugElement.query(By.css('#addHandler')).nativeElement;
    addHandler.dispatchEvent(new Event('click'));

    // Demande/Attente des mises à jour Angular
    fixture.detectChanges();
    // Attente de fin de synchronisation de l'IHM
    fixture.whenStable().then(
      () => {
        // Then : Vérification des résultats
        expect(spy.subscribe.calls.count()).toBe(2); // Le subscribe a été appelé une fois à la création
        expect(spy.subscribe).toHaveBeenCalledWith(handlerNamespace.value,
          handlerTopic.value, jasmine.any(Function));
        expect(spy.subscribe).toHaveBeenCalledWith(handlerNamespace.value,
          handlerTopic.value, jasmine.anything());

        // Indique la finalisation du test
        done();
      }
    );
  });

  it('Doit utiliser sendMessageToChildren', () => {
    // Given : Récupération des inputs dans la page
    const namespace = fixture.debugElement.query(By.css('#messageNamespace')).nativeElement;
    const topic = fixture.debugElement.query(By.css('#messageTopic')).nativeElement;
    const message = fixture.debugElement.query(By.css('#messageMessage')).nativeElement;
    namespace.value = 'namespace_value';
    topic.value = 'topic_value';
    message.value = 'message_value';
    namespace.dispatchEvent(new Event('input'));
    topic.dispatchEvent(new Event('input'));
    message.dispatchEvent(new Event('input'));

    // When : Récupération du handler et génération d'un click en mode Angular
    const addHandler = fixture.debugElement.query(By.css('#sendMessageToChildren')).nativeElement;
    addHandler.dispatchEvent(new Event('click')); // addHandler.nativeElement.click(); fonctionne aussi

    // Then : Vérification des résultats
    expect(spy.sendChildrenMessage.calls.count()).toBe(1); // Le subscribe a été appelé une fois à la création
    expect(spy.sendChildrenMessage).toHaveBeenCalledWith(namespace.value,
      topic.value, message.value + ' from : AFakeUUID');
  });

  it('Doit utiliser sendMessageToParent', () => {
    // Given : Récupération des inputs dans la page
    const namespace = fixture.debugElement.query(By.css('#messageNamespace')).nativeElement;
    const topic = fixture.debugElement.query(By.css('#messageTopic')).nativeElement;
    const message = fixture.debugElement.query(By.css('#messageMessage')).nativeElement;
    namespace.value = 'namespace_value';
    topic.value = 'topic_value';
    message.value = 'message_value';
    namespace.dispatchEvent(new Event('input'));
    topic.dispatchEvent(new Event('input'));
    message.dispatchEvent(new Event('input'));

    // When : Récupération du handler et génération d'un click en mode Angular
    const addHandler = fixture.debugElement.query(By.css('#sendMessageToParent')).nativeElement;
    addHandler.dispatchEvent(new Event('click')); // addHandler.nativeElement.click(); fonctionne aussi

    // Then : Vérification des résultats
    expect(spy.sendParentMessage.calls.count()).toBe(1); // Le subscribe a été appelé une fois à la création
    expect(spy.sendParentMessage).toHaveBeenCalledWith(namespace.value,
      topic.value, message.value + ' from : AFakeUUID');
  });

  it('Doit utiliser sendMessageBoadcast', () => {
    // Given : Récupération des inputs dans la page
    const namespace = fixture.debugElement.query(By.css('#messageNamespace')).nativeElement;
    const topic = fixture.debugElement.query(By.css('#messageTopic')).nativeElement;
    const message = fixture.debugElement.query(By.css('#messageMessage')).nativeElement;
    namespace.value = 'namespace_value';
    topic.value = 'topic_value';
    message.value = 'message_value';
    namespace.dispatchEvent(new Event('input'));
    topic.dispatchEvent(new Event('input'));
    message.dispatchEvent(new Event('input'));

    // When : Récupération du handler et génération d'un click en mode Angular
    const addHandler = fixture.debugElement.query(By.css('#sendMessageBoadcast')).nativeElement;
    addHandler.dispatchEvent(new Event('click')); // addHandler.nativeElement.click(); fonctionne aussi

    // Then : Vérification des résultats
    expect(spy.sendBroadcastMessage.calls.count()).toBe(1); // Le subscribe a été appelé une fois à la création
    expect(spy.sendBroadcastMessage).toHaveBeenCalledWith(namespace.value,
      topic.value, message.value + ' from : AFakeUUID');
  });

 it('Vérifier l affichage des message', () => {

    // Récupération du select utilisé dans la page
    const allMessageSelect: HTMLSelectElement = fixture.debugElement.query(By.css('#allMessageSelect')).nativeElement;
    // Enregistrement du nombre d'élements
    const initialOptionsCount = allMessageSelect.options.length;

    // Création d'un message de test
    const aMessageDTO = new MessageDTO('test_namespace', 'test_topic', 'test_appname',
      null, null, 'test_uuid', 1, '1', 'test_value_object');
    const aMessageDTOVision =  new MessageDTOVision(aMessageDTO);

    // Ajout aux messages
    fixture.componentInstance.allMessages = [...fixture.componentInstance.allMessages, new MessageDTOVision(aMessageDTO) ];

    // Demande de rafraichissement IHM
    fixture.detectChanges();

    // On vérifie l'ajout d'une option
    expect(allMessageSelect.options.length).toBe(initialOptionsCount + 1);
    // Et l'affichage du message dans l'IHM (dernier message de la liste)
    expect(allMessageSelect.options[allMessageSelect.options.length - 1].label).
      toBe('(' + (allMessageSelect.options.length - 2) + ') ' + aMessageDTOVision.label);

  });

  it('Vérifier l affichage des message recus dans le select', () => {

    // Récupération du select utilisé dans la page
    const allMessageSelect: HTMLSelectElement = fixture.debugElement.query(By.css('#allMessageSelect')).nativeElement;
    // Enregistrement du nombre d'élements
    const initialOptionsCount = allMessageSelect.options.length;

    // Création d'un message de test
    const aMessageDTO = new MessageDTO('test_namespace', 'test_topic', 'test_appname',
      null, null, 'test_uuid', 1, '1', 'test_value_object');
    const aMessageDTOVision =  new MessageDTOVision(aMessageDTO);

    // Ajout aux messages
    fixture.componentInstance.allMessages = [...fixture.componentInstance.allMessages, new MessageDTOVision(aMessageDTO) ];

    // Demande de rafraichissement IHM
    fixture.detectChanges();

    // On vérifie l'ajout d'une option
    expect(allMessageSelect.options.length).toBe(initialOptionsCount + 1);
    // Et l'affichage du message dans l'IHM (dernier message de la liste)
    expect(allMessageSelect.options[allMessageSelect.options.length - 1].label).
      toBe('(' + (allMessageSelect.options.length - 2) + ') ' + aMessageDTOVision.label);

  });


  it('Vérifier l affichage des message recus dans le tableau', () => {

    // Récupération du select utilisé dans la page
    const messageTable: HTMLTableElement = fixture.debugElement.query(By.css('#theMessageTable')).nativeElement;
    // Enregistrement du nombre d'élements
    const initialTableRowCount = messageTable.rows.length;

    // Création d'un message de test
    const aMessageDTO = new MessageDTO('test_namespace', 'test_topic', 'test_appname',
      null, null, 'test_uuid', 1, '1', 'test_value_object');
    const aMessageDTOVision =  new MessageDTOVision(aMessageDTO);

    // Ajout aux messages
    fixture.componentInstance.allMessages = [...fixture.componentInstance.allMessages, new MessageDTOVision(aMessageDTO) ];

    // Demande de rafraichissement IHM
    fixture.detectChanges();

    // On vérifie l'ajout d'un row
    expect(messageTable.rows.length).toBe(initialTableRowCount + 1);
    // Et l'affichage du message dans l'IHM (dernier message de la liste)
    const lastRowElement = messageTable.rows[messageTable.rows.length - 1];
    expect(lastRowElement.cells[0].innerText).toBe(aMessageDTOVision.message.appName);
    expect(lastRowElement.cells[1].innerText).toBe(aMessageDTOVision.message.namespace);
    expect(lastRowElement.cells[2].innerText).toBe(aMessageDTOVision.message.topic);
    expect(lastRowElement.cells[3].innerText).toBe(aMessageDTOVision.valueAsString);

  });
});
