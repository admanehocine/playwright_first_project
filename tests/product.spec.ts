import test, { expect } from "@playwright/test";
import { loginPage } from "./pages/login.page";
import { productPage } from "./pages/product.page";
let lp: loginPage
let pp: productPage
test.beforeEach(async ({ page }) => {
    lp = new loginPage(page);
    pp = new productPage(page);
    await page.goto("https://www.saucedemo.com/");
    await lp.login("standard_user", "secret_sauce")
})

test("ajouter  un produit dans panier", async ({ page }) => {
    await pp.clickAddToCart();
    await expect(pp.getRemoveBTN()).toBeVisible()
    await expect(pp.getBadge()).toHaveText("1");
})