  [![Fulstack2](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/Fullstacklarge.png)](https://recouv.sharepoint.com/sites/bureautechniquedsi-sded/SitePages/Socle-FullStack.aspx) 
                                                         
[![Normes et docs](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/sharepoint-35.png)](https://recouv.sharepoint.com/:f:/r/sites/bureautechniquedsi-sded/Documents%20partages/Architecture%20et%20Expertise%20Applicative/Norme%20Frontend%20Angular%20-%20Bootstrap)  
 [![Sources Fullstack](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/gitlab-35.png)](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/fullstack/fullstack-spa-intranet)
  [![Redmine Fullstack](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/redmine-35.png)](http://redmine.altair.recouv/projects/devintrafront/issues)
  [![Yammer](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/yammer-35.png)](https://www.yammer.com/recouv.fr/#/threads/inGroup?type=in_group&feedId=16003777&view=all)
  [![Contact](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/email-35.png)](mailto:ac750-dsi-sded-bt-aea@acoss.fr)

Gestion de la configuration pour les SPA
=========================================

# En deux mots …

Par défaut le paramétrage d'un projet Angular est défini dans un répertoire environnements dans des fichiers environment.ts et environment.prod.ts
Lors du build de l'application pour la production le contenu du fichier environment.ts est remplacé par celui du fichier environment.prod.ts

Ce mode de fonctionnement n'est pas adapté à notre infrastructure car il ne permet pas de charge la configuration de l'application depuis des tokens Hawai

# Les étapes de mise en place

La solution que nous avons retenue pour gérer la configuration consiste à :

1. Mettre en place la configuration de l'application dans deux fichiers json : un pour le développement, un pour la production

Le fichier pour la production contiendra la configuration à utiliser en production avec les tokens Hawai.
Ces fichiers sont à créer de le répertoire assets de l'application : [src/assets/configuration](../src/assets/configuration)

* Exemple de fichier de configuration en développement : [configuration.json](../src/assets/configuration/configuration.json)
* Exemple de fichier de configuration en production avec l'utilisation de token hawai : [configuration.prod.json](../src/assets/configuration/configuration.prod.json)

2. Créer un objet pour modéliser la configuration, nous recommandons de créer une interface avec un attribut pour chaque token de configuration

Exemple d'interface pour modéliser la configuration : [app-config.model.ts](../src/app/core/app-config/app-config.model.ts)

3. Mettre en place le remplacement la configuration au moment du build de l'application pour la production
Cette partie est à réaliser dans le fichier [angular.json](../angular.json) dans la section configurations

```
"configurations": {
  "production": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.prod.ts"
      },
      {
        "replace": "src/assets/configuration/configuration.json",
        "with": "src/assets/configuration/configuration.prod.json"
      }
    ],
```

4. Créer un service pour charger la configuration et accéder aux différentes valeurs

Le fichier [app-config.service.ts](../src/app/core/app-config/app-config.service.ts) contient un exemple d'implémentation

5. Charger la configuration au démarrage de l'application, cette opération est à réaliser dans le fichier [app.module.ts](../src/app/app.module.ts)

```
export function initRestApiConfiguration(config: AppConfigService) {
  const restConfig = new AppliRestApiConfiguration();
  restConfig.rootUrl = config.apiBaseUrl();

  return restConfig;
}

// Chargement de la configuration de prisme angular
export class CustomPrismeConfiguration extends PrismeAngularConfiguration {
  constructor(config: AppConfigService) {
    const conf = config.settings.prismeConfiguration;
    super(new PrismeAngularConfiguration(conf));
  }
}

@NgModule({
  declarations: [...],
  imports: [ ... ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    {
     // ceci charge et remplit la conf avec les données trouvées dans notre fichier JSON au démmarage de l'application
      provide: APP_INITIALIZER, useFactory: (config: AppConfigService) => () => config.loadConfiguration(),
      deps: [AppConfigService], multi: true
    },
    {provide: PrismeAngularConfiguration, useClass: CustomPrismeConfiguration, deps: [AppConfigService], multi: false},
    {provide: AppliRestApiConfiguration, useFactory: initRestApiConfiguration, deps: [AppConfigService], multi: false}
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
```
