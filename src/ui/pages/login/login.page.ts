import { Locator, Page } from '@playwright/test';
import { LoginSelectors } from './login.selector';

export class LoginPage {

    private readonly page: Page;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly submitButton: Locator;
    readonly errorMessage: Locator;
    readonly successMessage: Locator;
    readonly successDescription: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.usernameInput = page.locator(LoginSelectors.username);
        this.passwordInput = page.locator(LoginSelectors.password);
        this.submitButton = page.locator(LoginSelectors.submit);
        this.errorMessage = page.locator(LoginSelectors.error);

        

      this.successMessage = page.getByRole('heading', {
    name: 'Logged In Successfully'
});

this.successDescription = page.locator('p').filter({
    hasText: 'You successfully logged in'
});

this.logoutButton = page.getByRole('link', {
    name: 'Log out'
});
    }

    async enterUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async clickSubmit(): Promise<void> {
        await this.submitButton.click();
    }

    async login(
        username: string,
        password: string
    ): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickSubmit();
    }
}