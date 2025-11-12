import BasePage from "../base/basePage";
import { EnvManager } from "../utils/EnvManager";

export default class HomePage extends BasePage {
  constructor(page) {
    super(page); 
    this.username = page.locator('#userEmail');
    this.password = page.locator('#userPassword');
    this.loginBtn = page.locator('#login');
    this.productList = page.locator(".card-body b");
  }

  async openTheURL() {
    await this.navigate(EnvManager.url);
  }
  
  async validLogin(username, password)
  {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
    await this.productList.first().waitFor();
  }

}

