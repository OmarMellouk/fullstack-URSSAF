import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  template: 'First'
})
export class FirstComponent {
}

@Component({
  template: 'Second'
})
export class SecondComponent {
}

@Component({
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
}

// routes
export const basicRoutes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full'},
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent }
];
