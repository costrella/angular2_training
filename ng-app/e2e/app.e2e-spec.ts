import {browser, By, element} from "protractor";

describe('items view', () => {

  it("test",() => {
    browser.get('/items')
    const btnLogin = element(By.buttonText('log in'))
    expect(btnLogin.isPresent()).toBeTruthy();
    btnLogin.click();
    expect(btnLogin.isPresent()).toBeFalsy();
    // browser.sleep(5000)
  })

  it('should true to be true', () => {
    expect(true).toBe(true);
  })

  it('should true to be true', () => {
    const btnAddItem = element(By.buttonText('add item'));
    btnAddItem.click();
    browser.sleep(5000);
  })

})
