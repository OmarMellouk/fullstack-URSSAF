import { Component } from '@angular/core';

@Component({
  selector: 'app-bases-assujetties-et-cotisants',
  templateUrl: './bases-assujetties-et-cotisants.component.html',
  styleUrls: ['./bases-assujetties-et-cotisants.component.scss']
})
export class BasesAssujettiesEtCotisantsComponent {

  opened = false;

  isOpened(isOpened: boolean): void {
    this.opened = isOpened;
  }

}
