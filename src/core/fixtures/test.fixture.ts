import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../../ui/pages/login/login.page';
import { LoginAssertion } from '../../ui/pages/login/login.assertion';

type TestFixtures = {
    loginPage: LoginPage;
    loginAssertion: LoginAssertion;
};

export const test = base.extend<TestFixtures>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

    loginAssertion: async ({ loginPage }, use) => {
        const loginAssertion = new LoginAssertion(loginPage);

        await use(loginAssertion);
    }
});

export { expect };