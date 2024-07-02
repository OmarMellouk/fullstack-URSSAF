import { Component, Input } from '@angular/core';
import { CommunicationSPAModule } from '@acoss/communication-spa-angular';
import { MessageHandler, MessageDTO } from '@acoss/communication-spa-core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

export class MessageDTOVision {

  public label: string;
  public message: MessageDTO;
  public valueAsString: string;

  constructor(message: MessageDTO) {
    this.label = message.namespace + ':' + message.topic + ':' + message.value + ':' + message.senderUUID;
    this.message = message;
    if (message.value) {
      this.valueAsString = JSON.stringify(message.value);
    }
  }
}

@Component({
  selector: 'app-communication-spa',
  templateUrl: './communication-spa.component.html'
})
export class CommunicationSPAComponent {

  @Input()
  allComponentUUID: string[];

  private UUID!: string;

  private subscriptionUUID: Subscription;

  private handshakeActif: string;
  private handshakeVisible: boolean;

  // Promise à laquelle seront attachés les messages d'init et qui sera résolue à finalisation du Handshake
  public readonly fragmentPromise!: Promise<void>;
  public fragmentResolver!: () => void; // Fonction de résolution de la promise handshakeFinishedPromise

  public allMessages: MessageDTOVision[] = [];
  public selectedMessage: MessageDTOVision;
  public selectedUUID: string;

  public newUUIDSubject: Subject<any> = new Subject<any>();


  constructor(private communicationSPAModule: CommunicationSPAModule, private modalService: NgbModal) {
    const storeMessages: MessageHandler = (payload: any, message: MessageDTO): void => {

      this.allMessages = [...this.allMessages, new MessageDTOVision(message)];
    };
    communicationSPAModule.subscribe('.*', '.*', storeMessages);
  }

  public onMessageSelect(value: any) {
    this.selectedMessage = value;
  }

  public addHandler(namespace: HTMLInputElement, topic: HTMLInputElement, handlerMessage: HTMLInputElement) {
    const handleLogs: MessageHandler = (payload: any, message: MessageDTO): void => {
      let text = '';
      text += '******   Match on ' + this.communicationSPAModule.getUUID() + ' ******\n';
      text += 'appName   : \'' + message.appName + '\'\n';
      text += 'from      : \'' + message.senderUUID + '\'\n';
      text += 'namespace : \'' + message.namespace + '\'\n';
      text += 'topic     : \'' + message.topic + '\'\n';
      text += 'scope     : \'' + message.scope + '\'\n';
      text += 'value     : \'' + message.value + '\'\n';
      text += '**********************************************************';
      console.log(text);
    };
    this.communicationSPAModule.subscribe(namespace.value, topic.value, handleLogs);

  }

  public sendMessageToChildren(messageNamespace: HTMLInputElement, messageTopic: HTMLInputElement, messageMessage: HTMLInputElement) {

    this.communicationSPAModule.sendChildrenMessage(messageNamespace.value, messageTopic.value,
      messageMessage.value + ' from : ' + this.communicationSPAModule.getUUID());
  }

  public sendMessageToParent(messageNamespace: HTMLInputElement, messageTopic: HTMLInputElement, messageMessage: HTMLInputElement) {

    this.communicationSPAModule.sendParentMessage(messageNamespace.value, messageTopic.value,
      messageMessage.value + ' from : ' + this.communicationSPAModule.getUUID());
  }

  public sendMessageBoadcast(messageNamespace: HTMLInputElement, messageTopic: HTMLInputElement, messageMessage: HTMLInputElement) {

    this.communicationSPAModule.sendBroadcastMessage(messageNamespace.value, messageTopic.value,
      messageMessage.value + ' from : ' + this.communicationSPAModule.getUUID());
  }

  public sendChildMessage(messageNamespace: HTMLInputElement,
    messageTopic: HTMLInputElement, messageMessage: HTMLInputElement) {

    this.communicationSPAModule.sendChildMessage(messageNamespace.value, messageTopic.value,
      messageMessage.value + ' from : ' + this.communicationSPAModule.getUUID(), this.selectedUUID);
  }

  public sendChildInitMessage(messageNamespace: HTMLInputElement,
    messageTopic: HTMLInputElement, messageMessage: HTMLInputElement) {
    this.communicationSPAModule.sendChildInitMessage(messageNamespace.value, messageTopic.value,
      messageMessage.value + ' from : ' + this.communicationSPAModule.getUUID(), this.selectedUUID);
  }

  public sendReplyMessage(messageNamespace: HTMLInputElement, messageTopic: HTMLInputElement,
    messageMessage: HTMLInputElement, originMessage: MessageDTO) {
    this.communicationSPAModule.sendReplyMessage(messageNamespace.value, messageTopic.value,
      messageMessage.value + ' reply from : ' + this.communicationSPAModule.getUUID(), originMessage);
  }

  public shareParentVisionUUID(newLabel: string, newUUID: string) {
    this.newUUIDSubject.next({label : newLabel, uuidParent: newUUID, uuidReel: ''});
  }

}
