import { Component } from '@angular/core';
import { ZoneLienExternes } from '@app/fullstack-components/zone-information/models/zone-information.models';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html'
})
export class RightMenuComponent {

  links: ZoneLienExternes[] = [
    {name: 'Exonération', url: ''},
    {name: 'Tableau récapitulatif annuel', url: ''},
    {name: 'Actions contentieuses', url: ''},
    {name: 'NAIA', url: ''},
    {name: 'Archives Gesur', url: ''}
  ];
}
