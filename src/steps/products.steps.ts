import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import { env } from '../config/env';
import { expect } from 'playwright/test';

Given('I am logged in', async function () {

  const loginPage = new LoginPage(this.page);
  await loginPage.navigate(env.baseUrl);
  await loginPage.login(env.username, env.password);

  const productsPage = new ProductsPage(this.page);
  await productsPage.isLoaded();
  await expect(this.page).toHaveURL(/inventory.html/);
});

When('I add a product to the cart', async function () {
  const productsPage = new ProductsPage(this.page);
  await productsPage.addFirstItemToCart();
});

Then('the product should be added successfully', async function () {
  // SauceDemo changes button text after adding to cart
  const buttonText = await this.page.textContent('.inventory_item button');
  expect(buttonText).toContain('Remove');
});
