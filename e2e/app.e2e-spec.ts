import { Angular2WebpackElectronPage } from './app.po';

describe('angular2-webpack-electron App', function() {
  let page: Angular2WebpackElectronPage;

  beforeEach(() => {
    page = new Angular2WebpackElectronPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
