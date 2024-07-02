import { MessagesPage } from './messages.po';
import { browser, by } from 'protractor';

describe('showcase-angular messages page', () => {
  let page: MessagesPage;

  beforeEach(() => {
    page = new MessagesPage();
  });

  it('should display page messages', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Messages');
  });

});
