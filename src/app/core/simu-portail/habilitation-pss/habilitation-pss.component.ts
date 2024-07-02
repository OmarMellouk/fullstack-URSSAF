import { Component, Input } from '@angular/core';
import { LoginService, OauthService, RefreshService,
  PrismeAngularConfiguration, EnvironmentConfigFromApp } from '@acoss/prisme-angular-intranet';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import * as pako from 'pako';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CustomPrismeConfigurationService } from '@app/app-config/custom-prisme-configuration.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InformationsComponent } from '../informations/informations.component';

export class TokenDTO {

  constructor(public requestURL: string,
              public requestScope: string,
              public resquest: string,
              public response: string,
              public droitsFront: string,
              public value: string) {
    }
}

export class EnvironmentConfigFromAppDTO implements EnvironmentConfigFromApp {
  label?: string;
  prismeUrlBaseEndpoint?: string;
  prismeAuthzEndpoint?: string;
  prismeTokenEndpoint?: string;
  prismeKeysEndpoint?: string;
  prismeUserEndpoint?: string;
  prismeIss: string;
  prismeScopeBack: string;
  prismeClientSecret: string;
  prismeClientId: string;
  prismeCodeApp: string;
  prismeScopeFront: string;
  applicationUri: string;
  prismeRefreshTokensInterval: number;
  iFrameRenouvellement: string;
  pageApresConnexion?: string;
  chargerUserInfosFront: boolean;
  chargerUserInfosBack: boolean;
  jetonReadyTopic: string;
  jetonMessageTopic: string;
  waitWebMessageURLFragment: string;
}

@Component({
  selector: 'app-habilitation-pss',
  templateUrl: './habilitation-pss.component.html',
  styleUrls: ['./habilitation-pss.component.scss']
})
export class HabilitationPSSComponent {

  @Input()
  allToken: TokenDTO[];

  private jwtHelper: JwtHelperService;

  private selectedPreset: EnvironmentConfigFromAppDTO;
  private allPresets: EnvironmentConfigFromAppDTO[] = [];
  private activePreset: EnvironmentConfigFromAppDTO;

  constructor(private loginService: LoginService,
              private oauthService: OauthService,
              private refreshService: RefreshService,
              private router: Router,
              private prismeAngularConfiguration: PrismeAngularConfiguration,
              private http: HttpClient,
              private customPrisme: CustomPrismeConfigurationService,
              private modalService: NgbModal) {
                this.jwtHelper = new JwtHelperService();

                const gidnArchimedAssemblage = new EnvironmentConfigFromAppDTO();
                gidnArchimedAssemblage.label = 'Archimed GIDN Assemblage';
                gidnArchimedAssemblage.prismeAuthzEndpoint = 'https://gateway-assemblage.gidn.recouv/security/v1/pss/authz';
                gidnArchimedAssemblage.prismeTokenEndpoint = 'https://gateway-assemblage.gidn.recouv/security/v1/pss/token';
                gidnArchimedAssemblage.prismeKeysEndpoint = 'https://gateway-assemblage.gidn.recouv/security/v1/pss/jwks/public';
                gidnArchimedAssemblage.prismeUserEndpoint = 'https://gateway-assemblage.gidn.recouv/security/v1/pss/user-info';
                gidnArchimedAssemblage.prismeScopeFront = 'openid *:FUST';
                gidnArchimedAssemblage.prismeScopeBack = 'openid *:FULLSTACK-BE';
                gidnArchimedAssemblage.prismeClientId = 'cn=USR_READ_NAT_APP_FUST,ou=FUST,ou=Applications,ou=Technique,dc=recouv';
                gidnArchimedAssemblage.prismeClientSecret = 'p1Ed8$q?Cud3Z1SU6Th>g';
                gidnArchimedAssemblage.prismeCodeApp = 'FUST';

                const gidnArchimed = new EnvironmentConfigFromAppDTO();
                gidnArchimed.label = 'Archimed GIDN';
                gidnArchimed.prismeAuthzEndpoint = 'https://gateway.gidn.recouv/security/v1/pss/authz';
                gidnArchimed.prismeTokenEndpoint = 'https://gateway.gidn.recouv/security/v1/pss/token';
                gidnArchimed.prismeKeysEndpoint = 'https://gateway.gidn.recouv/security/v1/pss/jwks/public';
                gidnArchimed.prismeUserEndpoint = 'https://gateway.gidn.recouv/security/v1/pss/user-info';
                gidnArchimed.prismeScopeFront = 'openid *:FUST';
                gidnArchimed.prismeScopeBack = 'openid *:FULLSTACK-BE';
                gidnArchimed.prismeClientId = 'cn=USR_READ_NAT_APP_FUST,ou=FUST,ou=Applications,ou=Technique,dc=recouv';
                gidnArchimed.prismeClientSecret = 'p1Ed8$q?Cud3Z1SU6Th>g';
                gidnArchimed.prismeCodeApp = 'FUST';

                const mockFullstack = new EnvironmentConfigFromAppDTO();
                mockFullstack.label = 'FullStack PSS mock (désactiver la vérification CORS du navigateur --disable-web-security)';
                mockFullstack.prismeAuthzEndpoint = 'http://10.207.83.194:8080/fullstack_simul_prisme/endpoint/authz/1/';
                mockFullstack.prismeTokenEndpoint = 'http://10.207.83.194:8080/fullstack_simul_prisme/endpoint/token/1/';
                mockFullstack.prismeKeysEndpoint = 'http://10.207.83.194:8080/fullstack_simul_prisme/endpoint/jwks/1/public';
                mockFullstack.prismeUserEndpoint = 'http://10.207.83.194:8080/fullstack_simul_prisme/endpoint/user-info/1/';
                mockFullstack.prismeScopeFront = 'openid *:FULLSTACK-FE';
                mockFullstack.prismeScopeBack = 'openid *:FULLSTACK-BE';
                mockFullstack.prismeClientId = 'cn=USR_READ_NAT_APP_FULLSTACK-BE,ou=FULLSTACK-BE,ou=Applications,ou=Technique,dc=recouv';
                mockFullstack.prismeClientSecret = '123456';
                mockFullstack.prismeCodeApp = '123456';

                const giinArchimed = new EnvironmentConfigFromAppDTO();
                giinArchimed.label = 'PORA Archimed PSS GIIN';
                giinArchimed.prismeAuthzEndpoint = 'https://gateway.c1.giin.recouv/security/v1/pss/authz';
                giinArchimed.prismeTokenEndpoint = 'https://gateway.c1.giin.recouv/security/v1/pss/token';
                giinArchimed.prismeKeysEndpoint = 'https://gateway.c1.giin.recouv/security/v1/pss/jwks/public';
                giinArchimed.prismeUserEndpoint = 'https://gateway.c1.giin.recouv/security/v1/pss/user-info';
                giinArchimed.prismeScopeFront = 'openid *:HARMONIE-WEB';
                giinArchimed.prismeScopeBack = '*:DECI *:ENC-BE *:IODA-BE *:WATT2-BE *:OPUS-BE';
                giinArchimed.prismeClientId = 'cn=USR_READ_NAT_APP_PORA,OU=PORA,ou=Applications,ou=Technique,dc=recouv';
                giinArchimed.prismeClientSecret = 'XL93agPeC!72w';
                giinArchimed.prismeCodeApp = 'PORA';

                const giinPSSDirect = new EnvironmentConfigFromAppDTO();
                giinPSSDirect.label = 'PORA Direct PSS GIIN (désactiver la vérification CORS du navigateur --disable-web-security)';
                giinPSSDirect.prismeAuthzEndpoint = 'http://pss.c1.giin.recouv/pss/endpoint/authz/1/';
                giinPSSDirect.prismeTokenEndpoint = 'http://pss.c1.giin.recouv/pss/endpoint/token/1/';
                giinPSSDirect.prismeKeysEndpoint = 'http://pss.c1.giin.recouv/pss/endpoint/jwks/1/public';
                giinPSSDirect.prismeUserEndpoint = 'http://pss.c1.giin.recouv/pss/endpoint/user-info/1/';
                giinPSSDirect.prismeScopeFront = 'openid *:HARMONIE-WEB';
                giinPSSDirect.prismeScopeBack = '*:DECI *:ENC-BE *:IODA-BE *:WATT2-BE *:OPUS-BE';
                giinPSSDirect.prismeClientId = 'cn=USR_READ_NAT_APP_PORA,OU=PORA,ou=Applications,ou=Technique,dc=recouv';
                giinPSSDirect.prismeClientSecret = 'XL93agPeC!72w';
                giinPSSDirect.prismeCodeApp = 'PORA';

                this.allPresets.push(gidnArchimedAssemblage);
                this.allPresets.push(gidnArchimed);
                this.allPresets.push(mockFullstack);
                this.allPresets.push(giinArchimed);
                this.allPresets.push(giinPSSDirect);

                this.activePreset = this.getConf(prismeAngularConfiguration);
              }

  updatePreset() {
    this.activePreset.prismeAuthzEndpoint = this.selectedPreset.prismeAuthzEndpoint;
    this.activePreset.prismeTokenEndpoint = this.selectedPreset.prismeTokenEndpoint;
    this.activePreset.prismeKeysEndpoint = this.selectedPreset.prismeKeysEndpoint;
    this.activePreset.prismeUserEndpoint = this.selectedPreset.prismeUserEndpoint;
    this.activePreset.prismeScopeFront = this.selectedPreset.prismeScopeFront;
    this.activePreset.prismeScopeBack = this.selectedPreset.prismeScopeBack;
    this.activePreset.prismeClientId = this.selectedPreset.prismeClientId;
    this.activePreset.prismeClientSecret = this.selectedPreset.prismeClientSecret;
    this.activePreset.prismeCodeApp = this.selectedPreset.prismeCodeApp;
  }

  simplifyEndpoint(endpoint: string): string {
    return endpoint.replace('/authz/1/', '').replace('/authz/1', '');
  }

  deriveToken(urlTokenInput: HTMLInputElement, frontScopeInput: HTMLInputElement) {

    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    const options = { headers: headers };

    const jwtRequestBody = this.oauthService.authentificationBackAssertionJwt(this.loginService.getAccessTokenFront());
    const compressed_scope = pako.gzip(frontScopeInput.value, {to: 'string'});
    jwtRequestBody.scope = btoa(compressed_scope);

    this.http.post<any>(urlTokenInput.value,
      jwtRequestBody, options).subscribe((body) => {
        this.allToken.push(new TokenDTO(urlTokenInput.value,
                                        frontScopeInput.value,
                                        JSON.stringify(jwtRequestBody),
                                        JSON.stringify(body),
                                        JSON.stringify(this.decodeDroitsUtilisateur(body.access_token)),
                                        body.access_token
                                        ));

      }
    );

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
  login(prismeAuthzEndpoint: HTMLInputElement,
    prismeTokenEndpoint: HTMLInputElement,
    prismeKeysEndpoint: HTMLInputElement,
    prismeUserEndpoint: HTMLInputElement,
    loginScopesFront: HTMLInputElement,
    loginScopesBack: HTMLInputElement,
    prismeClientId: HTMLInputElement,
    prismeClientSecret: HTMLInputElement,
    prismeCodeApp: HTMLInputElement) {

    this.prismeAngularConfiguration.prismeAuthzEndpoint = prismeAuthzEndpoint.value;
    this.prismeAngularConfiguration.prismeTokenEndpoint = prismeTokenEndpoint.value;
    this.prismeAngularConfiguration.prismeKeysEndpoint = prismeKeysEndpoint.value;
    this.prismeAngularConfiguration.prismeUserEndpoint = prismeUserEndpoint.value;
    this.prismeAngularConfiguration.prismeScopeFront = loginScopesFront.value;
    this.prismeAngularConfiguration.prismeScopeBack = loginScopesBack.value;
    this.prismeAngularConfiguration.prismeClientId = prismeClientId.value;
    this.prismeAngularConfiguration.prismeClientSecret = prismeClientSecret.value;
    this.prismeAngularConfiguration.prismeCodeApp = prismeCodeApp.value;

    // Enregistrement de la configuration pour qu'elle soit utilisée au rechargement de la page
    // et donc permettre de vérifier le token retourné
    this.customPrisme.setCustomConfiguration(this.getConf(this.prismeAngularConfiguration));

    window.location.href = this.oauthService.authentificationFrontUrl(this.router.url);
  }

  getConf(prismeConf: PrismeAngularConfiguration): EnvironmentConfigFromAppDTO {
    const conf = new EnvironmentConfigFromAppDTO();

    conf.prismeUrlBaseEndpoint = this.prismeAngularConfiguration.prismeUrlBaseEndpoint;
    conf.prismeAuthzEndpoint = this.prismeAngularConfiguration.prismeAuthzEndpoint;
    conf.prismeTokenEndpoint = this.prismeAngularConfiguration.prismeTokenEndpoint;
    conf.prismeKeysEndpoint = this.prismeAngularConfiguration.prismeKeysEndpoint;
    conf.prismeUserEndpoint = this.prismeAngularConfiguration.prismeUserEndpoint;
    conf.prismeIss = this.prismeAngularConfiguration.prismeIss;
    conf.prismeScopeBack = this.prismeAngularConfiguration.prismeScopeBack;
    conf.prismeClientSecret = this.prismeAngularConfiguration.prismeClientSecret;
    conf.prismeClientId = this.prismeAngularConfiguration.prismeClientId;
    conf.prismeCodeApp = this.prismeAngularConfiguration.prismeCodeApp;
    conf.prismeScopeFront = this.prismeAngularConfiguration.prismeScopeFront;
    conf.applicationUri = this.prismeAngularConfiguration.applicationUri;
    conf.prismeRefreshTokensInterval = this.prismeAngularConfiguration.prismeRefreshTokensInterval;
    conf.iFrameRenouvellement = this.prismeAngularConfiguration.iFrameRenouvellement;
    conf.pageApresConnexion = this.prismeAngularConfiguration.pageApresConnexion;
    conf.chargerUserInfosFront = this.prismeAngularConfiguration.chargerUserInfosFront;
    conf.chargerUserInfosBack = this.prismeAngularConfiguration.chargerUserInfosBack;
    conf.jetonReadyTopic = this.prismeAngularConfiguration.jetonReadyTopic;
    conf.jetonMessageTopic = this.prismeAngularConfiguration.jetonMessageTopic;
    conf.waitWebMessageURLFragment = this.prismeAngularConfiguration.waitWebMessageURLFragment;

    return conf;
  }

  logout() {
    this.refreshService.stopperRafraichissement();
    this.loginService.deconnecter();
    this.router.navigate(['/simu-portail']);
  }

  copyToken(tokenTarget) {
    let text = '';
    if (tokenTarget === 'front') {
      text = document.getElementById('tokenFrontOutput').innerText;
    } else if (tokenTarget === 'back') {
      text = document.getElementById('tokenBackOutput').innerText;
    }
    const elem = document.createElement('textarea');
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
 // execCommand('copy') is not supported on browser Safari
    document.execCommand('copy');
    document.body.removeChild(elem);
  }

  decodeDroitsUtilisateur(accessToken: string): any  {
    // La liste des droits est située dans le "aud" du jeton d'accès au format base64
    const decode_aud = atob(this.decodeAccessToken(accessToken).aud);

    // Après décodage, la chaine est gzippée : utilisation de la bibliothèque pako pour décompresser
    const droits_string = pako.inflate(decode_aud, { to: 'string' });

    // Les droits FRONT sont séparés par un espace
    return droits_string.split(' ');
  }

  public decodeAccessToken(accessToken: string): any {
    return this.jwtHelper.decodeToken(accessToken);
  }

  openTokenPopupMessage(aToken: TokenDTO) {
    const modalRef = this.modalService.open(InformationsComponent);
    modalRef.componentInstance.tokenValue = aToken.value;
    modalRef.componentInstance.modalRef = modalRef;
  }
}
