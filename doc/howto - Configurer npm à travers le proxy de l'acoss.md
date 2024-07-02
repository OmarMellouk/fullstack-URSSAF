  [![Fulstack2](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/Fullstacklarge.png)](https://recouv.sharepoint.com/sites/bureautechniquedsi-sded/SitePages/Socle-FullStack.aspx) 
                                                         
[![Normes et docs](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/sharepoint-35.png)](https://recouv.sharepoint.com/:f:/r/sites/bureautechniquedsi-sded/Documents%20partages/Architecture%20et%20Expertise%20Applicative/Norme%20Frontend%20Angular%20-%20Bootstrap)  
 [![Sources Fullstack](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/gitlab-35.png)](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/fullstack/fullstack-spa-intranet)
  [![Redmine Fullstack](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/redmine-35.png)](http://redmine.altair.recouv/projects/devintrafront/issues)
  [![Yammer](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/yammer-35.png)](https://www.yammer.com/recouv.fr/#/threads/inGroup?type=in_group&feedId=16003777&view=all)
  [![Contact](http://gitlab.altair.recouv/sded/bureau-technique/architecture-expertise-applicative/zone-ressources/images-bt/raw/master/email-35.png)](mailto:ac750-dsi-sded-bt-aea@acoss.fr)

# Configurer npm à travers le proxy de l'acoss

> Attention : Lors de la création de ce howto, seuls les repositories de la pic d'intégration sont disponibles. Les urls mentionnées ne sont donc pas les urls cibles.


## La problèmatique

Actuellement, nexus met à disposition 4 repositories interressant pour la récupération des dépendances :
* npm-hosted : qui contient les librairies acoss
* npm-extra : qui contient les librairies exterieures "ajoutée à la main"
* npm-proxy : qui permet de proxifier le "registry" par défaut (https://registry.npmjs.org). Autrement  dit qui permet d'aller chercher directement les librairies du registre npm
* npm-group : qui est un regroupement des 3 précedents repositories.

Avec tout ca, on est en droit de penser que la configuration du registre sur le npm-group est suffisante. C'est à dire en ajoutant la ligne suivant dans le fichier .npmrc: 

    registry=http://nexus.urssaf.recouv/repository/npm-group/

Mais en fait certaines librairies (comme node-sass) ont des scripts de post-installation qui vont télécharger des sources supplémentaires sur Internet. Hors sans configuration du proxy, impossible d'aller sur internet. Il est donc nécessaire d'ajouter les lignes suivantes pour configurer le proxy : 

     strict-ssl=false
     proxy=http://ACXXXXX:PassWordAnais@prx3-navi.cnp.recouv:8000/

> ATTENTION : la configuration du proxy se fait à l'aide de "http_proxy" et non pas de "proxy"

Et c'est la le problème : si un proxy est configuré, alors il devient impossible d'accéder au repository nexus npm-group.

Il convient donc d'ajouter une exception au proxy : 

    noproxy=nexus.urssaf.recouv


## Configuration de npm 

En résumé : 

En fonction des version de NodeJS, le fichier .npmrc est situé soit :
* dans le HOME de l'utilisateur.
* dans le répertoire C:\dev\nodejs\node_modules\npm\ (fichier npmrc)

Si le fichier n'est pas présent alors taper la commande :

    npm config edit
	
Un editor va créer et ouvrir le fichier de configuration et l'ouvrir dans le répertoire HOME de l'utilisateur

Il doit contenir au minima les lignes suivantes : 

    registry=http://nexus.urssaf.recouv/repository/npm-group/
    strict-ssl=false
    proxy=http://ACXXXXXXX:PassWordURLEncode@prx1-navi.mcrecouv:8000/
    http_proxy=http://ACXXXXXXX:PassWordURLEncode@prx1-navi.mcrecouv:8000/
	https_proxy=http://ACXXXXXXX:PassWordURLEncode@prx1-navi.mcrecouv:8000/
    noproxy=nexus.urssaf.recouv

prx1-navi.mcrecouv:8000 est l'une des adresses du proxy de l'acoss.
Le mot de passe URL encodé peut être obtenu à l'adresse : https://www.urlencoder.org/

> Dans la première version du document des normes frontend, il était demandé d'ajouter les lignes : 
> 
> sass_binary_site=http://nexus.urssaf.recouv/repository/npm-extra
>et 
>phantomjs_cdnurl=http://nexus.urssaf.recouv/repository/npm-extra
>
> Avec la configuration de proxy ci-dessus, ces lignes ne sont plus nécessaires







