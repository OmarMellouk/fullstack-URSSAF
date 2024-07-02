  [![Fulstack2](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/Fullstacklarge.png)](https://recouv.sharepoint.com/sites/bureautechniquedsi-sded/SitePages/Socle-FullStack.aspx) 
                                                         
[![Normes et docs](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/sharepoint-35.png)](https://recouv.sharepoint.com/:f:/r/sites/bureautechniquedsi-sded/Documents%20partages/Architecture%20et%20Expertise%20Applicative/Norme%20Frontend%20Angular%20-%20Bootstrap)  
 [![Sources Fullstack](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/gitlab-35.png)](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/fullstack/fullstack-spa-intranet)
  [![Redmine Fullstack](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/redmine-35.png)](http://redmine.altair.recouv/projects/devintrafront/issues)
  [![Yammer](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/yammer-35.png)](https://www.yammer.com/recouv.fr/#/threads/inGroup?type=in_group&feedId=16003777&view=all)
  [![Contact](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/email-35.png)](mailto:ac750-dsi-sded-bt-aea@acoss.fr)


# Application fullstack-spa-intranet

Ce projet est la mise en application des normes frontend du bureau technique dans une SPA développée en Angular.
Dans cette application vous trouvez principalement des exemples de :
* Mise en place de la charte graphique 
* Utilisation des composants graphiques développés par le bureau technique
* Communication avec un back-end
* Intégration/Usages [Prisme-Angular-Intranet](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/librairies/prisme-angular-intranet)
* Intégration/Usages [Communication-SPA-Angular](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/librairies/communication-spa-angular)

Elle intègre également Simu-Portail qui permet de valider l'intégration d'une application à un Portail ACOSS et donc :
 - Le passage de jeton Front dérivé par web Message ou URL Fragment 
 - L'échange de messages inter-applicatifs normés Communication SPA. 

Si vous souhaitez utiliser Simu-Portail sans déployer Fullstack-SPA-Intranet, il est possible d'utiliser l'[instance gérée par le BT](http://fullstackfe-dev-01.gidn.recouv/fullstack_fe/simu-portail). (/!\ il s'agit de notre plateforme de développement, elle n'est pas toujours opérationnelle)

## Démarrage rapide

1. Récuperation des sources du projet

  > git clone http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/fullstack/fullstack-spa-intranet.git

2. Compiler le projet

  > npm install

3. Exécuter le projet

  > ng serve


4. Accèder à l'application

  > http://localhost:4200


5. Accèder à Simu-Portail

  > http://localhost:4200/simu-portail

## Tests unitaires

* Lancement unique et headless de tests unitaires 

> npm run test

* Lancement des tests unitaires dans un chrome consultable

> npm run test-dev

* Lancement des tests unitaires avec PhantomJS pour la CI/CD 

> npm run test-ci


## Documentation 

Le projet contient un certain nombre de howto (/doc) :
*  [Configurer npm à travers le proxy de l'acoss.md](/doc/howto%20-%20Configurer%20npm%20%C3%A0%20travers%20le%20proxy%20de%20l'acoss.md)
*  [Guide d'installation du poste du développeur.md](/doc/SDED%20-%20BT%20-%20Normes%20Frontend%20-%20Guide%20d'installation%20du%20poste%20du%20développeur.md)
*  [Génération de DTO et services avec ng-openapi-gen.md](https://readthedocs.cnp.recouv/docs/fullstack/fr/latest/fullstack/fullstack-spa-intranet/openapi_generator.html)
*  [Utiliser ag-grid.md](/doc/howto%20-%20Utiliser%20ag-grid.md)

Vous trouverez aussi des informations sur le [**wiki de la plateforme d'intégration continue**](http://gitlab.altair.recouv/bt/outils/pic/wikis/home) notamment sur [*comment générer et publier un rpm sous hawai*](http://gitlab.altair.recouv/bt/outils/pic/wikis/Jenkins/G%C3%A9n%C3%A9rer-et-publier-un-rpm-pour-hawai)

La documentation sur les normes et autres bonnes pratiques est disponible sous :
[**Documents/Norme Frontend Angular - Bootstrap**](https://recouv.sharepoint.com/:f:/r/sites/bureautechniquedsi-sded/Documents%20partages/Architecture%20et%20Expertise%20Applicative/Norme%20Frontend%20Angular%20-%20Bootstrap "Sharepoint BT")

L'ensemble des travaux mis à disposition par le BT AeA sont disponibles sous le [**sharepoint du BT**](https://recouv.sharepoint.com/sites/bureautechniquedsi-sded/SitePages/AEA%20-%20Fullstack.aspx)

Les différentes modifications réalisées sont documentées dans les fichiers suivants :
*  [CHANGELOG.md](CHANGELOG.md) ce fichier contient la liste des principales modifications par version de l'application
*  [Decision Record Log.md](/doc/%20Decision%20Record%20Log.md) ce fichier décrit les décisions d'architecture qui ont été prises sur le projet

## Récupération des composants

Toutes les composants utilisés dans ce projet sont facilement réutilisables. Il en existe deux types :
* Récupérables directement via une librairie :
    * [Double liste](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/composants-graphiques/double-liste-angular-intranet)
    * [Breadcrumb](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/composants-graphiques/breadcrumb-angular-intranet)
    * [Icônes](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/composants-graphiques/acoss-icones)
    * [Thème intranet](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/composants-graphiques/acoss-theme-intranet)
* Récupérables dans le code du projet :
    * Copier `fullstack-spa-intranet/src/app/fullstack-components` dans votre projet
    * Importer le module `FullstackComponentsModule` là où vous souhaitez utiliser les composants