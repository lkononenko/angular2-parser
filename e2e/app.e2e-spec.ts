import { Angular2ParserPage } from './app.po';

describe('angular2-parser App', function() {
  let page: Angular2ParserPage;

  beforeEach(() => {
    page = new Angular2ParserPage();
  });

  it('should display message saying Angular2 Parser', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular2 Parser');
  });
});
