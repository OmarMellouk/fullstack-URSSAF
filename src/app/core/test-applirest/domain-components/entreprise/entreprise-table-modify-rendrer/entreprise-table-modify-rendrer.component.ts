import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EntrepriseType } from '@app/apis/applirest/api-v3/models';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-entreprise-table-modify-rendrer',
  templateUrl: './entreprise-table-modify-rendrer.component.html'
})
export class EntrepriseTableModifyRendrerComponent implements ICellRendererAngularComp, OnDestroy {

  @ViewChild('actionRenderer') actionRendererElement: ElementRef;

  params: any;
  handleFocusFn;

  constructor(private router: Router) { }

  agInit(params: any): void {
    this.params = params;

    // Envoie le focus sur la première action
    this.handleFocusFn = this.handleFocus.bind(this);
    params.eGridCell.addEventListener('focus', this.handleFocusFn);
  }

  refresh(): boolean {
    return false;
  }

  modifierEntreprise() {
    const entreprise = this.getEntreprise();
    if (entreprise) {
      this.router.navigate(['/test-applirest/modify-entreprise/' + entreprise.id]);
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
