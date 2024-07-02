import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('body > app-root > app-user-interface-layout > main > div > div > ng-component > h2')).getText();
  }

  logIn() {
    // La mire de connexion n'étant pas en Angular il faut utiliser browser.driver pour interagir avec le navigateur.
    browser.driver.findElement(by.id('connexionBouton')).click();
    browser.driver.findElement(by.name('Valider')).click();
    // tempo le temps de récupérer le jeton et de charger la page
    browser.driver.sleep(2000);
  }

  getLogin() {
    return browser.driver.findElement(by.id('loginField')).getText();
  }

}
