  [![Fulstack2](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/Fullstacklarge.png)](https://recouv.sharepoint.com/sites/bureautechniquedsi-sded/SitePages/Socle-FullStack.aspx) 
                                                         
[![Normes et docs](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/sharepoint-35.png)](https://recouv.sharepoint.com/:f:/r/sites/bureautechniquedsi-sded/Documents%20partages/Architecture%20et%20Expertise%20Applicative/Norme%20Frontend%20Angular%20-%20Bootstrap)  
 [![Sources Fullstack](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/gitlab-35.png)](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/fullstack/fullstack-spa-intranet)
  [![Redmine Fullstack](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/redmine-35.png)](http://redmine.altair.recouv/projects/devintrafront/issues)
  [![Yammer](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/yammer-35.png)](https://www.yammer.com/recouv.fr/#/threads/inGroup?type=in_group&feedId=16003777&view=all)
  [![Contact](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/email-35.png)](mailto:ac750-dsi-sded-bt-aea@acoss.fr)

# Fullstack-spa-intranet - Changelog

Ce fichier liste les changements effectués lors des différentes versions de l'application.

# Version en cours

# 14.0.x

## Mise à jour des librairies :

* Migration depuis Angular 12.2.1 vers Angular 14.1.2
* Mise à jour de code relative à la migration vers Angular 14
* Migration depuis Node 14.17.3 vers Node 16.16.0
* Migration depuis typescript 4.3.5 vers typescript 4.6.4
* Compilation en es2021 (Abandon d'internet explorer)
* Abandon de phantomjs et de karma-phantomjs-launcher pour les tests unitaires au profit de karma-chrome-launcher
* Abandon du linter TSLint au profit du linter ESLint
* Migration depuis Bootstrap 4.5.0 vers Bootstrap 5.2.1
* Migration depuis ng-bootstrap 10.0.0 vers ng-bootstrap 13.0.0

### Changement de dépendances
* Intégration de @acoss/prisme-angular-intranet v14.0.0
* Intégration de @acoss/communication-spa-angular v14.0.0
* Intégration de @acoss/breadcrumb-angular-intranet v14.1.X
* Intégration de @acoss/double-liste-angular-intranet v14.1.X
* Intégration de @acoss/theme-intranet v3.2.x
* Intégration de @acoss/icones v2.5.X

Ainsi que toutes les dépendances transitives liées à la migration Angular 14

## Mise à jour de la charte graphique : 

Notez bien que cette migration concerne la nouvelle charte et non pas la charte legacy.

 * Ajout de nouveaux composants
   * Arborescence
   * Zone liens externes
   * Bouton à choix multiple
   * Menu vertical
 * Ajout de fonctionnalités
   * Ajout de la navigation sur les onglets de niveau 1 et 2
   * Ajout de la navigation pour le wizard
   * Édition des colonnes pour les tableaux
 * Ajout de pages
   * Page d'accueil
   * Page d'icônes
   * Page formulaire et gestion des erreurs
   * Page démonstration REM
* Corrections
   * Champ de saisie date : ajout d'une limite de caractères 
   * Interrupteur littéral : ajout d'une interaction au clavier
   * Onglets : corrections liés à la fermeture d'un onglet
   * Tableau : ajout de tooltips pour les valeurs tronquées
   * Tableau : ajout de la possibilité de configurer le nombre de lignes par défauts
* Utilisation des REM plutôt que des EM dans toute l'application

### Breaking changes
 * Bootstrap : https://getbootstrap.com/docs/5.0/migration/
 * ng-bootstrap : https://github.com/ng-bootstrap/ng-bootstrap/blob/master/CHANGELOG.md

Voici les changements effectués dans le showcase après cette migration :
 * Remplacement des classes :
    * .form-group -> .form
    * .pr-\*/.pl-\*/.mr-\*/.ml-\* -> .pe-\*/.ps-\*/.me-\*/.ms-\*
    * .border-right -> .border-end
    * .float-right -> .float-end
    * .custom-control .custom-radio -> .form-check
    * .custom-control-input -> .form-check-input
    * .custom-control-label .custom-control-radio -> .form-check-label
    * .custom-control .custom-checkbox -> .form-check
    * .custom-control-label .custom-control-check -> .form-check-label
    * .custom-control .custom-switch -> .form-check form-switch
    * .custom-control-label -> .form-check-label
    * .form-control -> .form-select (pour les éléments \<select> uniquement)
 * Réduction de tous les labelWidth de 3px
 * La classe .form-group n'est plus utilisée
 * Utiliser la classe .form-label pour tous les labels
 * Les classes col-* ont perdu leurs propriété position relative, il se peut qu'il faille la rajouter lorsque nécessaire

Breaking changes sur les composants fullstack :
   * Tableau : renommage de l'input asynchronousErrors en asynchronousErrors$ et changement du type
   
# 12.3.0 

Octobre 2022
Voir : https://redmine.altair.recouv/issues/742196

Pour consulter l'ensemble des modifications : [Ticket de livraison #742196](https://redmine.altair.recouv/issues/742196)
Ci-dessous sont listés les principaux changements : 

## Passage en OpenAPI v3 - Appeler les services backend en openAPIV3
* Mise à jour du plugin de génération, passage à ng-openapi-gen
* Migration des appels existants à l'API entreprises de FullStack en utilisant le contrat OpenAPI
* Mise en place d'un exemple d'apple à l'API en utilisant l'ancienne version en Swagger 2
* @see : [#699440](https://redmine.altair.recouv/issues/699440)

## QualityGate bloquante pour toutes les branches 
* @see : [#732096](https://redmine.altair.recouv/issues/732096)


# 12.2.0 

Juillet 2022
Voir : https://redmine.altair.recouv/versions/24719

## Description de la release
* Mise en place de la nouvelle charte graphique (Passage en v3.1.0 de la librairie theme-intranet)
* Mise à jour des composants breadcrumb et double-liste (prise en compte de la nouvelle charte)
* Mise à jour de la librairie acoss/icones
* Passage en v27.x.x du composant ag-grid et mise en place de la nouvelle licence

# 12.0.0

Septembre 2021
Voir : http://redmine.altair.recouv/issues/583345

## Description de la release
 * Migration Angular 12
 * Correction des anomalies SonarQube
 * Simu-Portail : Ajouter une entrée pour Archimed assemblage pour la gestion des jetons
 * Simu-Portail : Ajouter la consultation du token backend (affichage)
 * Double-liste : Correction du comportement des boutons flèches haut/bas

## Changement de dépendances
* Intégration de @acoss/prisme-angular-intranet v12.0.0
* Intégration de @acoss/communication-spa-angular v12.0.0
* Intégration de @acoss/double-liste-angular-intranet v12.0.1
* Intégration de @acoss/breadcrumb-angular-intranet v12.0.0

Ainsi que toutes les dépendances transitives liées à la migration Angular 12


# 9.1.0 

Mars 2021
Voir : http://redmine.altair.recouv/issues/526727

## Description de la release
* Mise à jour du thème
* Corrections graphiques sur les tableaux
* Corrections graphiques sur les popups
* Corrections graphiques sur les notes 
* Corrections graphiques sur les champs date
* Corrections graphiques sur les checkboxes et les boutons radios
* Corrections graphiques sur les liens
* Corrections graphiques sur le fil d'Ariane
* Ajout et mise à jour d'icones
* Génération d'un UUID de correlation recouv.id dans les headers http pour les appels REST

## Changement de dépendances
* Intégration de @acoss/theme-intranet v2.3.0
* Intégration de @acoss/icones v2.2.0
* Intégration de @acoss/breadcrumb-angular-intranet v9.1.0
* Intégration de @acoss/prisme-angular-intranet v1.7.1
* Intégration de @acoss/communication-spa-angular v1.3.0
* Intégration de @acoss/communication-spa-core v1.3.1
* Intégration de la librairie ag-grid v22.1.1


# 9.0.0

juin 2020
Voir : http://redmine.altair.recouv/versions/16090

## Description de la release

 * Migration Angular 9 et donc passage à Ivy
 * Mise en place Archimed
 * Amélioration de l'intégration PIC
 * Corrections graphiques
 * Simu-Portail : Usage des endpoint PSS Archimed
 * Simu-Portail : Correction d'anomalies

## Changement de dépendances

* Intégration de @acoss/prisme-angular-intranet v1.7.0
* Intégration de @acoss/communication-spa-angular v1.2.0
* Intégration de @acoss/communication-spa-core v1.2.0
* Intégration de @acoss/theme-intranet v2.0.0
* Intégration de @acoss/icones v2.2.0
* Intégration de @acoss/breadcrumb-angular-intranet v9.0.0
* Intégration de @acoss/double-liste-angular-intranet v9.0.0

Ainsi que toutes les dépendances transitives liées à la migration Angular 9

# 8.2.0

Avril 2020
Voir : http://redmine.altair.recouv/versions/16089

## Description de la release

* Correction de bugs graphiques
* Mise à jour du processus de build de l'application
* Mise en place de simu-portail

## Changement de dépendances

* Intégration de @acoss/prisme-angular-intranet v1.6.0
* Intégration @acoss/communication-spa-core v1.1.3
* Intégration @acoss/communication-spa-angular v1.1.0

# 8.1.0

Janvier 2019
Roadmap : http://redmine.altair.recouv/versions/15377

## Description de la release
* Mise en place de la version 1.5.0 de prisme angular
* Mise en place de l'intégration hawai : 
  * Mise en place de jenkins file permettant de pousser sous hawai
  * Mise en place des tokens hawai
* Suppression de la configuration via environnements.ts afin de favoriser la configuration via le fichier configuration.json
* Modification de la configuration de dev pour faire pointer prisme_mock_server sur les url de la plateforme de dev de fullstack
* Correction graphique pour correspondre à la charte ergonomique
  
## Changement de dépendances
* Intégration de @acoss/theme-intranet v2.1.0
* Intégration de @acoss/double-liste-angular-intranet v8.1.0
* Intégration de @acoss/prisme-angular-intranet v1.5.0

# 8.0.0

Novembre 2019

## Description de la release
* Mise en place Jenkinsfile pour l'intégration continue

## Migration depuis la version précédente
* Migration du projet de SVN vers GIT
* Renommage du projet en fullstack-spa-intranet

## Changement de dépendances
* Mise à jour de la version d'Angular passage en version 8
* Intégration de @acoss/theme-intranet v2.0.0
* Intégration de @acoss/icones v2.0.0
* Intégration de @acoss/breadcrumb-angular-intranet v8.0.0
* Intégration de @acoss/double-liste-angular-intranet v8.0.0
* Intégration de @acoss/prisme-angular-intranet v1.4.0

# 6.1.0

03-05-2018

## Description de la release
Version 6.1.0
Accrochage Backend
Roadmap : http://redmine.altair.recouv/versions/12749

## Mise à jour de Dépendances
* @acoss/theme 6.1.0
* @acoss/breadcrumb 6.1.0
* @acoss/prisme-angular 1.1.1

## Modifications
* suppression dépendance fontawesome plus utilisée.
* Tableaux mise à jour de la position du bouton export excel 
* Tableaux modification de la page de présentation (un onglet par exemple)
* Tableaux modification du theme
* Tableaux suppression des scrolls
* Tableaux modification de l'affichage en édition
* Tableaux création d'une entête de colonne pour gérer le tri
* Tableaux création d'un service pour gérer la configuration
* Déplacement des styles pour les date pickers dans la libraire acoss-theme
* Correction problèmes d'affichage popup
* Tableau éditable limitation du nombre d'éléments affichés pour faciliter la lecture de la page
* Revue de la structure des répertoires des sources du projet

## Ajouts
* Ajout d'un exemple sur les onglets avec ng-bootstrap
* Utilisation de "ng-swagger-gen": "^1.5.0" dans devDependencies pour générer les DTO des web services
* Intégration de la librairie prisme-angular


# 6.0.1

13-02-2018

## Description de la release
Version 6.0.1
Mise à jour showcase et finalisation de composants
Roadmap : http://redmine.altair.recouv/versions/12433

## Mise à jour de Dépendances
* angular-svg-icon ^7.2.0
* @acoss/double-liste 6.0.1
* @acoss/icones 6.0.1
* @acoss/theme 6.0.1

## Modifications
* Icônes : supression de FontAwesome et ajout d'une police d'icônes pour la branche
* Composants : modifications graphique pour liste déroulante, notes, popup, zone plier/déplier, wizard, tableaux...
 
## Ajouts
* Images : exemple d'utilisation de fichiers svg avec angular-svg-icon 
* Thème : style des titres (h3 avec une icône)
* Tableaux : Ajout de filtres numérique et en liste déroulante

# 6.0.0

27-12-2018

## Description de la release
Livraison des normes, et première version du showcase
Roadmap : http://redmine.altair.recouv/versions/12432

## Mise à jour de Dépendances
* Angular ^6.1.0
* @acoss/breadcrumb 6.0.0
* @acoss/double-liste  6.0.0
* @acoss/icones 6.0.0
* @acoss/theme 6.0.0
* ag-grid-entreprise 19.0.0
