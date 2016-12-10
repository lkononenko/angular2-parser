import { browser, element, by } from 'protractor';

export class Angular2ParserPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-parser h1')).getText();
  }
}
