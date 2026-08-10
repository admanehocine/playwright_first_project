import { Page } from "@playwright/test";

export class loginPage {
    page: Page;
    //constructeur
    constructor(page: Page) {
        this.page = page;
    }
    //elements
    elements = {
        username: () => this.page.locator("#user-name"),
        password: () => this.page.locator("input[name='password']"),
        btn_connexion: () => this.page.locator("[data-test='login-button']"),
        erreur_msg: () => this.page.locator("[data-test='error']")
    }
    //les methodes 
    async saisirUsername(value: string) {
        await this.elements.username().fill(value)
    }
    async saisirPassword(value: string) {
        await this.elements.password().fill(value)
    }
    async ClickConnexion() {
        await this.elements.btn_connexion().click()
    }
    getErreur_msg() {
        return this.elements.erreur_msg();
    }

    //fonction qui va etre appelé dans  tous beforEach
    async login(username: string, password: string) {
        await this.saisirUsername(username);
        await this.saisirPassword(password);
        await this.ClickConnexion();
    }
}