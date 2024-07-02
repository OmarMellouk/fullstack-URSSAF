import { Component, OnInit } from '@angular/core';
import { LoginService, RefreshService, OauthService, PrismeAngularConfiguration } from '@acoss/prisme-angular-intranet';
import { Router } from '@angular/router';
import { CustomPrismeConfigurationService } from '@app/app-config/custom-prisme-configuration.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html'
})
export class AuthentificationComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private oauthService: OauthService,
    private refreshService: RefreshService,
    private router: Router,
    private customPrisme: CustomPrismeConfigurationService,
    private prismeAngularConfiguration: PrismeAngularConfiguration) { }

  ngOnInit() {
    if (this.loginService.isConnecte()) {
      this.refreshService.relancerRafraichissement();
    }
  }

  isConnecte() {
    return this.loginService.isConnecte();
  }

  getUtilisateur() {
    return this.loginService.getIdentifiantUtilisateur();
  }

  /**
   * Redirection vers la mire d'authentification déléguée
   */
  login() {
    // On supprime l'enventuel conf spécifique si l'on utilise le bouton standard
    this.customPrisme.removeCustomConfiguration(this.prismeAngularConfiguration);
    window.location.href = this.oauthService.authentificationFrontUrl(this.router.url);
  }

  logout() {
    this.refreshService.stopperRafraichissementEtDeconnecter().then(() => {
      // Une fois le rafraichissement arreté et la déconnexion faite on lance une redirection sur /
      this.router.navigate(['/']);
    });
  }

}
