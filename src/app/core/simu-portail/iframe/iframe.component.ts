import { AfterViewInit, Component, ElementRef, Pipe, PipeTransform, ViewChild, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommunicationSPAModule } from '@acoss/communication-spa-angular';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html'
})
export class IFrameComponent implements AfterViewInit {

  // Certains navigateurs (=Firefox) bloquent le chargement si l'URL est identique au parent
  // sur plusieurs niveaux, on ajouter donc un paramettre bullshit pour contourner le pb
  public iframeUrl: string = 'http://localhost:4200/index.html?bullshitparam=' + (new Date()).getTime();

  private timeout: string;

  public width: string;
  public height: string;
  public uuidDefinedPromise!: Promise<void>; // Promise permettant de savoir que l'uuid a été défini
  public uuidDefinedResolver!: () => void; // Fonction de résolution de la promise uuidDefinedPromise

  public uuid: string;

  @Output()
  public newComponentUUID = new EventEmitter<string>();

  @ViewChild('framedetector') private theIFrame: ElementRef;


  constructor(private communicationService: CommunicationSPAModule) {
    this.uuidDefinedPromise = new Promise((resolve): void => {
      // rien à faire, la promise sera résolue lorsque l'uuid aura été défini
      this.uuidDefinedResolver = () => {
        resolve();
      };
    });
  }

  public setURL(anURL: string, aWidth: string, aHeight: string) {
    const splittedURL = anURL.split('#');
    let final: string;
    for (const urlSegment of splittedURL) {
      if (!final) {
        final = urlSegment;
      } else {
        final += '#' + urlSegment;
      }
    }
    this.iframeUrl = final;
    this.width = aWidth + 'px';
    this.height = aHeight + 'px';
  }

  public setHandshakeTimeout(timeoutValue: string) {
    this.timeout = timeoutValue;
  }

  public getIframe(): ElementRef {
    return this.theIFrame;
  }

  public ngAfterViewInit() {
    this.uuid = this.communicationService.addChildComponent(
      this.theIFrame.nativeElement.contentWindow,
        parseInt(this.timeout, 10) * 1000,
          // NOSONAR as discussed with Rodolphe, we will skip this line because the alert is needed on the usecase
          () => {
alert('ERREUR : Le handshake Communication SPA non réalisé après ' + this.timeout + ' secondes'
        );
    });
    this.uuidDefinedResolver();
  }
}
