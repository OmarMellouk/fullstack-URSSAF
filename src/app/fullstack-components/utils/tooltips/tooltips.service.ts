import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TooltipsService {

  /**
   * Active un tooltip si le texte est plus grand que la zone dédiée
   */
  shouldDisplayTooltips(element: ElementRef): boolean {
    // Active un tooltip si le texte est plus grand que la zone dédiée
    const elementOffsetWidth: number = (element.nativeElement as HTMLElement).offsetWidth;
    const elementScrollWidth: number = (element.nativeElement as HTMLElement).scrollWidth;

    if (elementScrollWidth > elementOffsetWidth) {
      return true;
    } else {
      return false;
    }
  }
}
