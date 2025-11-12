import { test as base } from '@playwright/test';
import BrowserManager from '../../main/utils/BrowserManager.js';

export const test = base.extend({
  page: async ({}, use) => {
    const browserManager = await BrowserManager.init();
    const page = browserManager.getPage();
    await use(page);
    await browserManager.close();
  },
});
