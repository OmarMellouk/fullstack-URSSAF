import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotesService, ToastCategoryEnum } from '@app/fullstack-components/notes/services/notes.service';
import { EntrepriseV2Service } from '@app/apis/applirest/api-v2/services/entreprise-v2.service';
import { EntrepriseService } from '@app/apis/applirest/api-v3/services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entreprises-liste',
  templateUrl: './entreprises-liste.component.html',
  styleUrls: ['./entreprises-liste.component.scss']
})
export class EntreprisesListeComponent implements OnInit, OnDestroy {

  private denombrerEntreprisesV3Subscription: Subscription;
  private rechercherEntreprisesV2Subscription: Subscription;

  public erreur = false;
  public spinnerActif = true;
  public isServiceV2Up: boolean;
  public messageErreur: string;

  toastCategoryEnum: typeof ToastCategoryEnum = ToastCategoryEnum;

  constructor(
    private entrepriseService: EntrepriseService,
    private notesService: NotesService,
    private entrepriseV2Service: EntrepriseV2Service,
  ) { }

  ngOnInit() {
    this.denombrerEntreprisesFromApiV3();
    this.loadEntreprisesFromApiV2();
  }

  private denombrerEntreprisesFromApiV3() {
    this.denombrerEntreprisesV3Subscription = this.entrepriseService.denombrerEntreprises()
    .subscribe(
      () => {
        this.spinnerActif = false;
      },
      error => {
        this.handleError(error);
        this.erreur = true;
        this.spinnerActif = false;
      }
    );
  }

  private loadEntreprisesFromApiV2() {
    this.rechercherEntreprisesV2Subscription = this.entrepriseV2Service
    .rechercherEntreprises({ currentPage: 0, size: 10, simple: true }).subscribe(
      () => {
        this.spinnerActif = false;
        this.isServiceV2Up = true;
      },
      error => {
        this.isServiceV2Up = false;
        this.handleError(error);
        this.erreur = true;
        this.spinnerActif = false;
      }
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      this.messageErreur = 'Une erreur est survenue : ' + error.error.message;
    } else if (error.status === 0) {
      this.messageErreur = 'Impossible d\' accèder aux services de l\'application blanche.' +
      ' Vous devez lancer l\'application blanche pour utiliser cette page.';
    } else if (error.status === 401) {
      this.messageErreur = 'Token d\'authentification absent. Veuillez vous connecter';
    } else {
      this.messageErreur = 'Erreur de connexion au back-end';
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    this.notesService.removeAllStatic();

    this.notesService.showStatic({
      title: this.messageErreur,
      classname: 'note-erreur',
      hideClose: true,
      category: ToastCategoryEnum.ERROR
    });
  }

  ngOnDestroy() {
    this.denombrerEntreprisesV3Subscription.unsubscribe();
    this.rechercherEntreprisesV2Subscription.unsubscribe();
    this.notesService.removeAllStatic();
  }
}
