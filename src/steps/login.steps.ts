import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import { env } from '../config/env';
import { expect } from 'playwright/test';

Given('I am on the login page', async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate(env.baseUrl);
});

When('I login with valid credentials', async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(env.username, env.password);
});

When('I login with invalid credentials', async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.login(env.invalidUsername, env.invalidPassword);
});

Then('I should see the products page', async function () {
  const productsPage = new ProductsPage(this.page);
  expect(await productsPage.isLoaded()).toBeTruthy();
});

Then('I should see an error message', async function () {
  const loginPage = new LoginPage(this.page);
  const error = await loginPage.getErrorMessage();
  expect(error).toContain('Epic sadface');
});
