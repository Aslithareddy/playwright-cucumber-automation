import BasePage from './BasePage';

export default class ProductsPage extends BasePage {
  private pageTitle = '.title';
  private firstAddToCart = '.inventory_item button';

  async isLoaded(): Promise<boolean> {
  await this.page.waitForSelector('.inventory_list', {
    state: 'visible',
    timeout: 10000
  });
  return true;
}

  async addFirstItemToCart() {
    await this.page.click(this.firstAddToCart);
  }
}
