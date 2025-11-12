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
    await loginPage.validLogin("anush12@gmail.com", "Password@123");
    

    //-----cart displayed
    await expect(page.locator(".card-body b").first()).toBeVisible();

  })
});
