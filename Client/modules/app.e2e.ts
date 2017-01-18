import { browser } from 'Protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Site title';
    expect(subject).toEqual(result);
  });

});
