import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-desmonstration-em-container',
  templateUrl: './desmonstration-rem-container.component.html'
})
export class DemonstrationRemContainerComponent implements OnDestroy {

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {}

  setFontSize(size: number): void {
    // Modifie la font size de base sur l'élément HTML
    this.renderer.setStyle(this.document.getElementsByTagName('html')[0], 'font-size', size + 'px');
  }

  ngOnDestroy(): void {
    // Retire la modification de font
    this.renderer.setStyle(this.document.getElementsByTagName('html')[0], 'font-size', '');
  }

}
