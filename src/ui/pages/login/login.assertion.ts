import { expect } from '@playwright/test';
import { LoginPage } from './login.page';

export class LoginAssertion {

    constructor(
        private readonly loginPage: LoginPage
    ) {}

    async verifyLoginSuccess(): Promise<void> {

        await expect(this.loginPage.successMessage)
            .toBeVisible();

        await expect(this.loginPage.successDescription)
            .toContainText('You successfully logged in');

        await expect(this.loginPage.logoutButton)
            .toBeVisible();
    }

    async verifyLoginError(expectedMessage: string): Promise<void> {

        await expect(this.loginPage.errorMessage)
            .toBeVisible();

        await expect(this.loginPage.errorMessage)
            .toContainText(expectedMessage);
    }

    async verifyLogoutButton(): Promise<void> {
    await expect(this.loginPage.logoutButton)
        .toBeVisible();
}
async verifyLoginConfirmationMessage(): Promise<void> {
    await expect(this.loginPage.successDescription)
        .toContainText('You successfully logged in');
}
}