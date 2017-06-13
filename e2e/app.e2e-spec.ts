import { CvFrameworkPage } from './app.po';

describe('cv-framework App', () => {
  let page: CvFrameworkPage;

  beforeEach(() => {
    page = new CvFrameworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
