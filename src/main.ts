import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import '../node_modules/jquery/dist/jquery.slim.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import {LicenseManager} from 'ag-grid-enterprise';

// Licence pour Ag-Grid
// eslint-disable-next-line max-len
LicenseManager.setLicenseKey('CompanyName=SoftwareOne France S.A.S._on_behalf_of_AGENCE CENTRALE DES ORGANISMES DE SECURITE SOCIALE,LicensedGroup=ACOSS BT,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=70,LicensedProductionInstancesCount=0,AssetReference=AG-016611,ExpiryDate=27_August_2023_[v2]_MTY5MzA5MDgwMDAwMA==1855ec1630d089877926023285b106f2');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
