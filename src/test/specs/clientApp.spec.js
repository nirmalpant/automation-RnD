import { test } from '../hooks/testHooks.js';
import LoginPage from '../../main/pages/LoginPage.js';
import { EnvManager } from '../../main/utils/EnvManager';
import { expect } from '@playwright/test';
import DashboardPage from '../../main/pages/DashboardPage.js';
import CartPage from '../../main/pages/CartPage.js';

test.describe('Rahul shetty academy client', () => {
  test('login + add items to cart', async ({ page }) => {

    const product = "ZARA COAT 3";
    
    //Login Test
    const loginPage = new LoginPage(page);
    await loginPage.openTheURL();
    await loginPage.validLogin(EnvManager.email, EnvManager.password);
    

    //-----Add product to Cart test
    await page.locator(".card-body b").first().waitFor();
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.searchTheProductAddToCart(product);

    //-------CheckOut Test
    const cartPage = new CartPage(page);
    await cartPage.navigateToCart();
    await expect(page.locator("[class='cartSection']:has-text('ZARA COAT 3')")).toBeVisible(); 
    await cartPage.clickOnCheckoutButton();
    
  })
});
