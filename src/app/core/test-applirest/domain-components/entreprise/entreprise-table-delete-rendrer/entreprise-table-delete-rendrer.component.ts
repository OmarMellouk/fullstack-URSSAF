import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { EntrepriseType } from '@app/apis/applirest/api-v3/models';
import { EntrepriseService } from '@app/apis/applirest/api-v3/services';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-entreprise-table-delete-rendrer',
  templateUrl: './entreprise-table-delete-rendrer.component.html'
})
export class EntrepriseTableDeleteRendrerComponent implements ICellRendererAngularComp, OnDestroy {

  @ViewChild('actionRenderer') actionRendererElement: ElementRef;

  params: any;
  modalRef: NgbModalRef;
  handleFocusFn;

  constructor(private entrepriseService: EntrepriseService, private modalService: NgbModal) { }

  agInit(params: any): void {
    this.params = params;

    // Envoie le focus sur la première action
    this.handleFocusFn = this.handleFocus.bind(this);
    params.eGridCell.addEventListener('focus', this.handleFocusFn);
  }

  refresh(): boolean {
    return false;
  }

  demanderSuppression(modal) {
    this.modalRef = this.modalService.open(modal);

    this.modalRef.dismissed.pipe(take(1)).subscribe((numButton: number) => {
      if (numButton === 0 || numButton === 2) {
        this.modalRef.close();
      } else if (numButton === 1) {
        this.supprimerEntreprise();
      }
    });
  }

  supprimerEntreprise() {
    this.modalService.dismissAll();
    const entreprise = this.getEntreprise();
    if (entreprise) {
      this.entrepriseService.supprimerEntreprise({ idEntreprise: entreprise.id }).subscribe(
        () => {
          this.params.api.updateRowData({ remove: [entreprise] });
        },
        error => {
          console.error('error : ' + error);
        }
      );
    }
  }

  private getEntreprise(): EntrepriseType {
    return this.params.data;
  }

  /**
   * Envoie le focus sur la première action lorsque la cellule est focus
   */
  handleFocus(): void {
    this.actionRendererElement?.nativeElement.focus();
  }

  ngOnDestroy(): void {
    this.params.eGridCell.removeEventListener('focus', this.handleFocusFn);
  }
}
