import { Before, After, setWorldConstructor } from '@cucumber/cucumber';
import { launchBrowser } from '../config/browser';
import { CustomWorld } from '../utils/world';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000);


setWorldConstructor(CustomWorld);

Before(async function () {
  const { browser, page } = await launchBrowser();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  await this.browser.close();
});
