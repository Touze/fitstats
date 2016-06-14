import { FitstatsPage } from './app.po';

describe('fitstats App', function() {
  let page: FitstatsPage;

  beforeEach(() => {
    page = new FitstatsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fitstats works!');
  });
});
