import { AdalSamplePage } from './app.po';

describe('adal-sample App', () => {
  let page: AdalSamplePage;

  beforeEach(() => {
    page = new AdalSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
