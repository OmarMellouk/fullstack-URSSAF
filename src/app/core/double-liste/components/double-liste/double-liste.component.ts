import { Component } from '@angular/core';

@Component({
  selector: 'app-double-liste',
  templateUrl: './double-liste.component.html'
})
export class DoubleListeComponent {
  listeSource = [
    'Mr. Nice',
    'Narco',
    'Bombasto',
    'Celeritas',
    'Magneta',
    'RubberMan',
    'Dynama',
    'Dr IQ',
    'Magma',
    'Tornado'
  ];

  listeDestination = [
    'IronMan'
  ];
}
