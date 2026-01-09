import { chromium, Browser, Page } from 'playwright';

export async function launchBrowser(): Promise<{ browser: Browser; page: Page }> {
  const browser = await chromium.launch({
    headless: process.env.HEADLESS !== 'false',
    slowMo: process.env.SLOW_MO ? Number(process.env.SLOW_MO) : 0
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  return { browser, page };
}
