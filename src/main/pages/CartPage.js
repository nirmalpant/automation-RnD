import BasePage from "../base/basePage";

export default class CartPage extends BasePage {
  constructor(page) {
    super(page); 
            this.cartLink = page.locator("[routerlink*='cart']");
        this.checkoutLink = page.locator("[type='button']");
    
  }
      async navigateToCart(){
        await this.cartLink.click();
         
    }

      async clickOnCheckoutButton(){
        await this.checkoutLink.last().click();
    }


}

