// src/main/utils/BrowserManager.js
import { chromium } from '@playwright/test';

class BrowserManager {
  static instance;
  browser;
  context;
  page;

  async init() {
    if (!BrowserManager.instance) {
      // Launch Chromium browser
      this.browser = await chromium.launch({
        headless: false,             // 👈 makes browser visible
        args: ['--start-maximized'], // optional
        slowMo: 100,                 // optional, slows actions to make visible
      });

      // Create context & page
      this.context = await this.browser.newContext();
      this.page = await this.context.newPage();

      BrowserManager.instance = this;
    }

    return BrowserManager.instance;
  }

  getPage() {
    if (!this.page) throw new Error('Browser not initialized. Call init() first.');
    return this.page;
  }

  async close() {
    await this.browser?.close();
    BrowserManager.instance = null;
  }
}

export default new BrowserManager();
