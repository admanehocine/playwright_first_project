import { Page } from "@playwright/test";

export class productPage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    elements = {
        btn_add_to_cart: () => this.page.locator("[data-test='add-to-cart-test.allthethings()-t-shirt-(red)']"),
        rmv_btn_from_cart: () => this.page.locator("[data-test='remove-test.allthethings()-t-shirt-(red)']"),
        badge_: () => this.page.locator("span[data-test='shopping-cart-badge']")
    }

    async clickAddToCart() {
        await this.elements.btn_add_to_cart().click()
    }
    getRemoveBTN() {
        return this.elements.rmv_btn_from_cart()
    }
    getBadge() {
        return this.elements.badge_()
    }

}