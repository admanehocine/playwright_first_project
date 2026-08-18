import test, { expect } from "@playwright/test";
import { loginPage } from "./pages/login.page";
import { productPage } from "./pages/product.page";
let pp: productPage
test.beforeEach(async ({ page }) => {
    pp = new productPage(page);
    await page.goto("https://www.saucedemo.com/");
    await pp.login("standard_user", "secret_sauce")
})

test("ajouter  un produit dans panier", async ({ page }) => {
    await pp.clickAddToCart();
    await expect(pp.getRemoveBTN()).toBeVisible()
    await expect(pp.getBadge()).toHaveText("1");
})