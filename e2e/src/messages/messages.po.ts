import { browser, by, element } from 'protractor';

export class MessagesPage {

  navigateTo() {
    return browser.get('/messages');
  }

  getParagraphText() {
    return browser.driver.findElement(
      by.css('body > app-root > app-user-interface-layout > main > div > div > app-messages > h2')).getText();
  }

}
