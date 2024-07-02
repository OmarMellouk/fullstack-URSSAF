import { Component } from '@angular/core';
import { ZoneLienExternes } from '@app/fullstack-components/zone-information/models/zone-information.models';

@Component({
  selector: 'app-zone-liens-externes-sample',
  templateUrl: './zone-liens-externes.component.html'
})
export class ZoneLiensExternesComponent {

  links: ZoneLienExternes[] = [
    {name: 'Exonération', url: ''},
    {name: 'Tableau récapitulatif annuel', url: ''},
    {name: 'Actions contentieuses', url: ''},
    {name: 'Archives Gesur', url: ''},
    {name: 'Suivi DSN', url: ''},
  ];
}
