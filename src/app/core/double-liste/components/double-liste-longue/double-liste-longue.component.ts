import { Component } from '@angular/core';

@Component({
  selector: 'app-double-liste-longue',
  templateUrl: './double-liste-longue.component.html'
})
export class DoubleListeLongueComponent {

  listeSource = [
    'Narco',
    'Mr. Nice',
    'Bombasto',
    'Magneta',
    'Celeritas',
    'Magma',
    'RubberMan',
    'Dynama',
    'Tornado',
    'Dr IQ'
  ];

  listeDestination = [
    'IronMan'
  ];
}
