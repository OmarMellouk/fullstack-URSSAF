  [![Fulstack2](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/Fullstacklarge.png)](https://recouv.sharepoint.com/sites/bureautechniquedsi-sded/SitePages/Socle-FullStack.aspx) 
                                                         
[![Normes et docs](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/sharepoint-35.png)](https://recouv.sharepoint.com/:f:/r/sites/bureautechniquedsi-sded/Documents%20partages/Architecture%20et%20Expertise%20Applicative/Norme%20Frontend%20Angular%20-%20Bootstrap)  
 [![Sources Fullstack](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/gitlab-35.png)](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/fullstack/fullstack-spa-intranet)
  [![Redmine Fullstack](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/redmine-35.png)](http://redmine.altair.recouv/projects/devintrafront/issues)
  [![Yammer](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/yammer-35.png)](https://www.yammer.com/recouv.fr/#/threads/inGroup?type=in_group&feedId=16003777&view=all)
  [![Contact](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/email-35.png)](mailto:ac750-dsi-sded-bt-aea@acoss.fr)

Architecture du projet fullstack-spa-intranet
=============================================

# En deux mots …

Ce document décrit comment est organisée l'architecture du projet fullstack-spa-intranet.

Cette organisation peut être reprise dans le cadre du développement d'une SPA en Angular

# Organisation des répertoires

L’organisation des répertoires d’un projet est très importante afin de pouvoir naviguer facilement dans les différents éléments composant le projet.

Nous ne décrions pas ici l'organisation de base d'un projet Angular, pour plus d'information se reporter à [la documentation Angular](https://angular.io/docs)

Voici la structure que nous avons mis en place pour fullstack-spa-intanet :  

```
src
  | app
  | assets
  | environments
  | styles
```

* **app**

Regroupe les différents composants et modules du projet, le contenu est décrit plus en détails dans le paragraphe suivant.

* **assets**

Contient les fichiers statiques (ex : images) et la configuration des tokens utilisés par le projet voir [howto - Gestion de la configuration pour les SPA](howto - Gestion de la configuration pour les SPA.md).

* **environments**

Répertoire créé par défaut par Angular pour la configuration.
Nous utilisons uniquement les fichiers environement pour la variable "production" qui semble être utilisée pour la compilation de l'application.
Nous vous recommandons d'utiliser plutôt le répertoire **assets** pour définir vos tokens de configuration.

* **styles**

On peut créer ici des feuilles de style globales pour l'application.

# Organisation du répertoire app

```
app
  | api
  | bouchons-html
  | core
  | deprecated
  | domain-components
  | shared
  | ui-components
  | views
```

* **views**

Ce répertoire contient les « pages » de l’application. Par exemple dans l’application fullstack-spa-intranet nous avons dans ce dossier un composant par entrée du menu, ces composants sont groupés dans différents modules qui correspondent au différents sous menus de l’application.

* **ui-components**

Ce dossier contient les composants graphiques utilisés par l’application.
Ces différents composants peuvent être utilisés à plusieurs endroits de l’application.
Généralement ces éléments sont utilisés par des views.

* **shared**

Contient les éléments qui sont partagés par plusieurs composants Angular.
Dans le cas du showcase ce répertoire contient des directives utilisées dans plusieurs formulaires de l’application.

* **core**

Nous utilisons ce répertoire pour les services utilisés par plusieurs éléments de l'application.
Ici se trouve le service permettant d'accèder aux tokens de configuration de l'application.

* **domain-components**

Ici nous trouvons les composants liés au métier de l’application. Dans l’application fullstack-spa-intranet nous avons mis en place un exemple permettant de manipuler des données concernant des entreprises. Nous avons donc créé un module entreprise contenant les composants permettant de manipuler cet objet

* **apis**

Ce dossier contiendra les différents services utilisés par l’application, il contiendra aussi les différents éléments nécessaires pour l’utilisation d’une API REST. Par exemple fullstack-spa-intranet utilise l’API fournie par l’application blanche développée pour les normes backend.
Pour plus d'informations voir : [howto - Génération de DTO et services avec ng-openapi-gen](https://readthedocs.cnp.recouv/docs/fullstack/fr/latest/fullstack/fullstack-spa-intranet/openapi_generator.html).

* **bouchons-html**

Contient les bouchons utilisés dans l'application par exemple pour le contenu des tableaux.

* **deprecated**

Ici se trouvent des composants que nous ne recommandons plus d'utiliser et qui doivent être supprimés de l'application.
