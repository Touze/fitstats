export class FitstatsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fitstats-app h1')).getText();
  }
}
