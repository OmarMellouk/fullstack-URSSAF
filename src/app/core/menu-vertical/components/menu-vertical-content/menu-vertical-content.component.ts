import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu-vertical-content',
  templateUrl: './menu-vertical-content.component.html'
})
export class MenuVerticalContentComponent {

  currentPath: string;

  constructor(private location: Location) {
    this.currentPath = this.location.path();
   }
}
