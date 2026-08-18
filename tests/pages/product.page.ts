import { Page } from "@playwright/test";
import { loginPage } from "./login.page";

export class productPage extends loginPage {
    constructor(page: Page) {
        super(page);

    }
    elements2 = {
        btn_add_to_cart: () => this.page.locator("[data-test='add-to-cart-test.allthethings()-t-shirt-(red)']"),
        rmv_btn_from_cart: () => this.page.locator("[data-test='remove-test.allthethings()-t-shirt-(red)']"),
        badge_: () => this.page.locator("span[data-test='shopping-cart-badge']")
    }

    async clickAddToCart() {
        await this.elements2.btn_add_to_cart().click()
    }
    getRemoveBTN() {
        return this.elements2.rmv_btn_from_cart()
    }
    getBadge() {
        return this.elements2.badge_()
    }

}