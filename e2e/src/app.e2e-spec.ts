import { AppPage } from './app.po';

describe('showcase-angular default page tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page lien', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Lien');
  });

  it('should login', () => {
    page.navigateTo();
    page.logIn();
    expect(page.getLogin()).toEqual('Bienvenue : CER4495240');
  });

});
