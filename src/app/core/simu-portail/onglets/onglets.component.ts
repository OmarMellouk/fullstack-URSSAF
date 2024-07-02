import { Component, AfterViewInit, ElementRef, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { CommunicationSPAModule } from '@acoss/communication-spa-angular';
import { OngletTypeEnum } from '@app/fullstack-components/onglets/components/onglet/onglet.component';
import { OngletPremierNiveau } from '@app/fullstack-components/onglets/models/onglets.models';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

export class TokenDTO {
  constructor(public label: string,
              public value: string) {
    }
}

@Component({
  selector: 'app-onglets',
  templateUrl: './onglets.component.html'
})
export class OngletsComponent implements AfterViewInit, AfterViewChecked {

  @ViewChild('ulElement') ulElement: ElementRef;

  private allToken: TokenDTO[] = [];
  private allComponentUUID: string[] = [];

  ongletTypeEnum: typeof OngletTypeEnum = OngletTypeEnum;

  active = 0;
  staticTabs = 2;

  onglets: OngletPremierNiveau[] = [
    {label: 'Habilitation PSS'},
    {label: 'Messages'},
    {label: '+ ajouter application'}
  ];

  // Navigation
  nativeElement: HTMLElement;
  maxScrollLeft: number;
  navScroll = 150;
  disableLeftNavigation = false;
  disableRightNavigation = false;
  disableCloseButton = false;

  constructor(private communicationSPAModule: CommunicationSPAModule, private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.communicationSPAModule.applicationReadyActivateCommunication();
  }

  updateApplicationTabs(value: string): void {
    this.onglets[this.active].label = value;
    this.onglets[this.active].canClose = true;

    const onglet: OngletPremierNiveau = {label: '+ ajouter application'};
    this.onglets.push(onglet);
  }

  getAllToken(): TokenDTO[] {
    return this.allToken;
  }

  getAllComponentUUID(): string[] {
    return this.allComponentUUID;
  }

  /**
   * Supprime l'onglet passé en paramètre
   */
  closeTab(index: number): void {
    this.onglets.splice(index, 1);
  }

  /**
   * NAVIGATION
   * Ici le composant :
   * src\app\fullstack-components\onglets\components\onglet\onglet.component.ts
   * N'est pas utilisé afin de pouvoir activer [destroyOnHide]="false"
   * L'activation de [destroyOnHide]="false" avec l'utilisation de ng-content ne fonctionne pas
   */

  /**
   * Une fois que la vue est chargée, vérifie le status des icônes de navigation
   */
  ngAfterViewChecked(): void {
    this.setNativeElement();
    this.checkLimits();
    this.checkCloseButton();
    // Force la détection de changement pour éviter l'erreur : ExpressionChangedAfterItHasBeenCheckedError
    this.cd.detectChanges();
  }

  /**
   * Met à jour l'onglet actif
   */
  navChange(value: NgbNavChangeEvent): void {
    this.active = value.nextId;
  }

  /**
   * Récupère l'élément ul après le chargement
   */
   setNativeElement(): void {
    this.nativeElement = (this.ulElement.nativeElement as HTMLElement);
    this.maxScrollLeft = this.nativeElement.scrollWidth - this.nativeElement.clientWidth;
  }

  /**
   * Scroll à gauche si possible et vérifie le status des icônes de navigation
   */
  scrollLeft(): void {
    if (0 < this.nativeElement.scrollLeft) {
      const currentScroll = this.nativeElement.scrollLeft;
      this.nativeElement.scroll({left: currentScroll - this.navScroll});
      this.checkLimits();
    }
  }

  /**
   * Scroll à droite si possible et vérifie le status des icônes de navigation
   */
  scrollRight(): void {
    if (this.maxScrollLeft > this.nativeElement.scrollLeft) {
      const currentScroll = this.nativeElement.scrollLeft;
      this.nativeElement.scroll({left: currentScroll + this.navScroll});
      this.checkLimits();
    }
  }

  /**
   * Vérifie le statut des icônes de navigation
   */
  checkLimits(): void {
    this.disableRightNavigation = false;
    this.disableLeftNavigation = false;

    if (this.nativeElement.scrollLeft === this.maxScrollLeft) {
      this.disableRightNavigation = true;
    }

    if (this.nativeElement.scrollLeft === 0) {
      this.disableLeftNavigation = true;
    }
  }

  /**
   * Ferme tous les onglets qui peuvent être fermés
   * Puis envoie un message avec la nouvelle liste d'onglets
   */
  closeAllTabs(): void {
    this.onglets = this.onglets.filter((onglet: OngletPremierNiveau) => !onglet.canClose);
  }

  /**
   * Vérifie le statut du bouton permettant de fermer tous les onglets
   */
  checkCloseButton(): void {
    this.disableCloseButton = !this.onglets.find((tab: OngletPremierNiveau) => tab.canClose);
  }

}
