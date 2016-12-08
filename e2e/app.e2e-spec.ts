import { Ng2FirebaseChatPage } from './app.po';

describe('ng2-firebase-chat App', function() {
  let page: Ng2FirebaseChatPage;

  beforeEach(() => {
    page = new Ng2FirebaseChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
