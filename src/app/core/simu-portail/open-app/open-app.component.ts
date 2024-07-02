import { PrismeAngularConfiguration } from '@acoss/prisme-angular-intranet';
import { Component, ComponentFactoryResolver,
  ComponentRef, EventEmitter, Input,
  Output, ViewContainerRef, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFrameComponent } from '../iframe/iframe.component';
import { TokenDTO } from '../habilitation-pss/habilitation-pss.component';

export class WebMessageWindows {

  constructor(public iframe: ComponentRef<IFrameComponent>,
              public token: string) {
    }
}

@Component({
  selector: 'app-open-app',
  templateUrl: './open-app.component.html'
})
export class OpenAppComponent implements OnDestroy {

  public static URL_FRAGMENT = 'url_fragment';
  public static WEB_MESSAGE = 'web_message';
  public staticClassReference = OpenAppComponent;

  public allMessageWindows: WebMessageWindows[] = [];

  @Input()
  public allToken: TokenDTO;
  @Input()
  allComponentUUID: string[];

  @Output()
  public openApplication = new EventEmitter();

  public showOpener = true;

  public myGroup = new FormGroup({
    hauteurInput: new FormControl('1050'),
    largeurInput: new FormControl('1680'),
    selectHabilitation: new FormControl(),
    selectHabilitationTransfer: new FormControl(),
    urlInput: new FormControl( location.protocol + '//' + location.host + location.pathname + '/guarded?param=' + (new Date()).getTime())
 });

 private iframeUUID: string;

  constructor(private factoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private prismeAngularConfiguration: PrismeAngularConfiguration) {
  }

  public habilitationInfoPopup(): void {
    // NOSONAR as discussed with Rodolphe, we will skip this line because the alert is needed on the usecase
    alert(JSON.stringify(this.myGroup.getRawValue().selectHabilitation));
  }

  private onSubmit(): void {
    this.addDynamicComponent();
  }

  private addDynamicComponent(): void {
    const factory = this.factoryResolver.resolveComponentFactory(IFrameComponent);
    const component = factory.create(this.viewContainerRef.injector);
    let url = this.myGroup.value.urlInput;

    // Passage des variables en scope local pour permettre le fonctionnement de la closure
    const allToken = this.allMessageWindows;
    const jetonReadyTopic = this.prismeAngularConfiguration.jetonReadyTopic;
    const jetonMessageTopic = this.prismeAngularConfiguration.jetonMessageTopic;

    // Fonction de reception des messages ready
    function receiveHandshakeMessage(e) {
      if (typeof e.data.topic === 'string' && e.data.topic === jetonReadyTopic) {
        for (const info of allToken) {
          if (e.source === info.iframe.instance.getIframe().nativeElement.contentWindow) {

            const messageTokenJWT = {
              topic : jetonMessageTopic,
              token_type : 'jwt',
              token_value : info.token
            };
            console.log('** Envoi Token via Web Message **');
            console.log(JSON.stringify(messageTokenJWT));
            info.iframe.instance.getIframe().nativeElement.contentWindow.postMessage(messageTokenJWT, '*');
          }
        }
      }
    }
    if (this.myGroup.value.selectHabilitationTransfer === OpenAppComponent.URL_FRAGMENT) {
      url = url + '#access_token=' + (this.myGroup.value.selectHabilitation as TokenDTO).value;
    } else if (this.myGroup.value.selectHabilitationTransfer === OpenAppComponent.WEB_MESSAGE) {
      url = url + '#' + this.prismeAngularConfiguration.waitWebMessageURLFragment;
      this.allMessageWindows.push(new WebMessageWindows(component, (this.myGroup.value.selectHabilitation as TokenDTO).value));
      window.addEventListener('message', receiveHandshakeMessage, false);
    }
    // Mise en place de la réucupération de l'UUID
    const allComponentUUIDClosure = this.allComponentUUID;
    const instanceClosure = component.instance;
    const thisClosure = this;
    component.instance.uuidDefinedPromise.then(() => {
      allComponentUUIDClosure.push(instanceClosure.uuid);
      thisClosure.iframeUUID = instanceClosure.uuid;
    });

    // Définition et ouverture de l'IFrame
    component.instance.setURL(url, this.myGroup.value.largeurInput, this.myGroup.value.hauteurInput);
    component.instance.setHandshakeTimeout('30');
    this.viewContainerRef.insert(component.hostView);
    this.openApplication.emit(this.myGroup.value.urlInput);
    this.showOpener = false;
  }

  private sendAuthMessage(mymessage: any, targetOrigin: Window) {

    Array.prototype.forEach.call(document.getElementsByTagName('iframe'),

    function(element) {

      const obj = JSON.parse(JSON.stringify(mymessage));
      element.contentWindow.postMessage(obj, targetOrigin);
    });
  }

  ngOnDestroy(): void {
    // Si l'uuid a été définie (une iframe ouverte)
    if (this.iframeUUID && this.allComponentUUID) {
      for (let i = 0; i < this.allComponentUUID.length; i++) {
        if (this.allComponentUUID[i] === this.iframeUUID) {
          this.allComponentUUID.splice(i, 1);
        }
      }
    }
  }

}
