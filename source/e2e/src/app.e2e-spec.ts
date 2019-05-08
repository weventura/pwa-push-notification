import { AppPage } from './app.po';

describe('workspace-project App', () => {

  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

it('Set user and password.' , () => {
  page.navigateTo();
  expect(page.setUser('admin'));
  expect(page.setPassword('admin1234'));
});


it('Set user and password.' , () => {
  expect(page.getUser()).toEqual('admin');
  expect(page.getPassword()).toEqual('admin1234');

});

it('Action button login.', () => {
  page.getButtonLogin().click();
});

});

