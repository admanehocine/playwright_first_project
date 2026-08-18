import { test, expect } from '@playwright/test';
import { loginPage } from './pages/login.page';
let lp: loginPage;
test.beforeEach(async ({ page }) => {
  lp = new loginPage(page);
  await page.goto("https://www.saucedemo.com/");
})


test("login valide", async ({ page }) => {
  await lp.saisirUsername("standard_user")
  await lp.saisirPassword("secret_sauce")
  await lp.ClickConnexion()
  await expect(page).toHaveURL( /inventory.html/)

})



//test non passant 

///
test("login invalid", async ({ page }) => {
  await lp.saisirUsername("standard_user_fake")
  await lp.saisirPassword("secret_sauce_fake")
  await lp.ClickConnexion()

  await expect(lp.getErreur_msg()).toBeVisible()
})
