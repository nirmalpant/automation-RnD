const { expect } = require('@playwright/test');

export default class BasePage {
  constructor(page) {
    this.page = page;
    this.generatedEmail = null;
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  getRandomEmailID() {
    const lastNames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Lee', 'Wilson', 'Davis', 'Clark'];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomNumber = Math.floor(Math.random() * 1000);
    return `Jane.${lastName}${randomNumber}@example.net`;
  }
  
  async click(selector) {
    await this.page.click(selector);
  }

  async check(selector){
    await this.page.check(selector);
  }

  async type(selector, text) {
    await this.page.fill(selector, text);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }

   getByText(selector,options){
    return  this.page.getByText(selector,options);
  }

  async waitForLocatorToVisible(selector){
    await this.page.waitForSelector(selector, { state: 'visible' });
  }
  
  getByRole(role, name) 
  {
    return this.page.getByRole(role, { name });
  }

}
