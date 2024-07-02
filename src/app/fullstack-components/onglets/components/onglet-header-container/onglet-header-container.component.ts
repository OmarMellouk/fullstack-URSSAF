import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-onglet-header-container',
  templateUrl: './onglet-header-container.component.html'
})
export class OngletHeaderContainerComponent {

  @ViewChild(TemplateRef) template: TemplateRef<OngletHeaderContainerComponent>;

}
