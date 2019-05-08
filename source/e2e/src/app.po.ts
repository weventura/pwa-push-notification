import { browser, by, element } from 'protractor';

export class AppPage {
  
  navigateTo() {
    return browser.sget('/login');
  }

  setUser(user: any) {
    return element(by.css('.user')).sendKeys(user);
  }

  setPassword(password: any) {
    return element(by.css('.password')).sendKeys(password);
  }

  getUser() {
    return element(by.css('.user')).getAttribute('value');
  }

  getPassword() {
      return element(by.css('.password')).getAttribute('value');
  }

  getButtonLogin() {
    return element(by.cssContainingText('.btn-info', 'Login'));
  }
}
