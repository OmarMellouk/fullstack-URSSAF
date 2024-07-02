import { Component, EventEmitter, Output } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  language = '';

  @Output()
  toggle = new EventEmitter<boolean>();

  toggleSideBar() {
    this.toggle.emit();
  }

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
    this.changementlangue(navigator.language.slice(0, 2));
  }

  public changementlangue(lang: string) {
    this.translate.use(lang);
  }
}
