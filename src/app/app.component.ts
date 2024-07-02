import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {

  openSideBar = true;
  isDemoScreens = false;

  subscription: Subscription;

  toggleSideBar() {
    this.openSideBar = !this.openSideBar;
  }

  constructor(private router: Router) {
    // Vérifie l'écran qui va être affiché afin d'avoir la bonne couleur de background
    this.subscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isDemoScreens = event.url.includes('/ecrans-pjd') || event.url.includes('/liste-pjd') || event.url.includes('/detail-pjd');
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
