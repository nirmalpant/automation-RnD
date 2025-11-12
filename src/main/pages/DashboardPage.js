import BasePage from "../base/basePage";

export default class DashboardPage extends BasePage {
  constructor(page) {
    super(page); 
    this.productList = page.locator(".card-body b");    
    this.products = page.locator("[class='card-body']"); 
    
  }

  async searchTheProductAddToCart(productName){
    const product =  this.products.filter({hasText : productName});    
    const productAddToCart =   product.locator("[class='btn w-10 rounded']:has-text('Add To Cart')").first();
    await productAddToCart.click();
    }
}

