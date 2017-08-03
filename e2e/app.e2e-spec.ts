import { Angular4ExpressSeedPage } from './app.po';

describe('angular4-express-seed App', () => {
  let page: Angular4ExpressSeedPage;

  beforeEach(() => {
    page = new Angular4ExpressSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
