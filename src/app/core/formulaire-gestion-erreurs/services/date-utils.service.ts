import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DateUtilsService {

  constructor(private datePipe: DatePipe) { }

  /**
   * Met à jour la date à afficher au format dd/MM/yyyy en fonction de la saisie utilisateur
   */
  getDateToDisplay(ngbDate: NgbDate): string {
    if (ngbDate) {
      const date = new Date(ngbDate.year + '-' + ngbDate.month + '-' + ngbDate.day);
      return this.datePipe.transform(date, 'dd/MM/yyyy');
    }

    return '';
  }
}
