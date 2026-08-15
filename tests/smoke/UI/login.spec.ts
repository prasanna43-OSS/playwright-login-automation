import { test, expect } from '../../../src/core/fixtures/test.fixture';

import {
    blankPasswordData,
    blankUsernameData,
    invalidPasswordData,
    invalidUsernameData,
    validLoginData
} from '../../../src/core/fixtures/login.data';

test.describe('Login functionality', () => {

    test('TC01 - Login with valid credentials', async ({ page,
        loginPage,
        loginAssertion }) => {

       

        await page.goto('/practice-test-login/');

        await loginPage.login(
            validLoginData.username,
            validLoginData.password
        );

        await expect(page)
            .toHaveURL(/logged-in-successfully/);

        await loginAssertion.verifyLoginSuccess();
    });

    test('TC02 - Verify login with valid credentials and refresh page ', async ({ page,
        loginPage,
        loginAssertion }) => {

             await page.goto('/practice-test-login/');

        await loginPage.login(
            validLoginData.username,
            validLoginData.password
        );

        await expect(page)
            .toHaveURL(/logged-in-successfully/);
 await page.reload();

    await expect(page)
        .toHaveURL(/logged-in-successfully/);

    await loginAssertion.verifyLoginSuccess();
        

        })

 
     test('TC03 - Verify successful login URL', async ({ page,
        loginPage,
        loginAssertion }) => {

             await page.goto('/practice-test-login/');

        await loginPage.login(
            validLoginData.username,
            validLoginData.password
        );

        await expect(page)
            .toHaveURL(/logged-in-successfully/);

        

        })

          test('TC04 - Verify successful login heading', async ({ page,
        loginPage,
        loginAssertion }) => {

             await page.goto('/practice-test-login/');

        await loginPage.login(
            validLoginData.username,
            validLoginData.password
        );

        await expect(page)
            .toHaveTitle('Logged In Successfully | Practice Test Automation')

        

        })
  test('TC05 - Verify successful login confirmation message', async ({
    page,
    loginPage,
    loginAssertion
}) => {

    await page.goto('/practice-test-login/');

    await loginPage.login(
        validLoginData.username,
        validLoginData.password
    );

    await loginAssertion.verifyLoginConfirmationMessage();
});
test('TC06 - Verify Logout button after successful login', async ({
    page,
    loginPage,
    loginAssertion
}) => {

    await page.goto('/practice-test-login/');

    await loginPage.login(
        validLoginData.username,
        validLoginData.password
    );

    await loginAssertion.verifyLogoutButton();
    await expect(page)
            .toHaveURL(/logged-in-successfully/);

});



    test('TC07 - Login with invalid username and valid password', async ({
    page,
    loginPage,
    loginAssertion
}) => {

    await page.goto('/practice-test-login/');

    await loginPage.login(
        invalidUsernameData.username,
        validLoginData.password
    );

    await loginAssertion.verifyLoginError(
        'Your username is invalid!'
    );
});

test('TC08 - Login with valid username and invalid password', async ({
    page,
    loginPage,
    loginAssertion
}) => {

    await page.goto('/practice-test-login/');

    await loginPage.login(
        validLoginData.username,
        invalidPasswordData.password
    );

    await loginAssertion.verifyLoginError(
        'Your password is invalid!'
    );
});
test('TC09 - Login with invalid username and invalid password', async ({
    page,
    loginPage,
    loginAssertion
}) => {

    await page.goto('/practice-test-login/');

    await loginPage.login(
        invalidUsernameData.username,
        invalidPasswordData.password
    );

    await loginAssertion.verifyLoginError(
        'Your username is invalid!'
    );
});

test('TC10 - Login with  Blank username and Blank password', async ({
    page,
    loginPage,
    loginAssertion
}) => {

    await page.goto('/practice-test-login/');

     await loginPage.login(
        blankUsernameData.username,
        blankPasswordData.password
    );


    await loginAssertion.verifyLoginError(
        'Your username is invalid!'
    );
});

test('TC11 - Login with  Blank username and valid password', async ({
    page,
    loginPage,
    loginAssertion
}) => {

    await page.goto('/practice-test-login/');

     await loginPage.login(
        blankUsernameData.username,
        validLoginData.password
    );


    await loginAssertion.verifyLoginError(
        'Your username is invalid!'
    );
});

test('TC12 - Login with  valid username and Blank password', async ({
    page,
    loginPage,
    loginAssertion
}) => {

    await page.goto('/practice-test-login/');

     await loginPage.login(
        validLoginData.username,
        blankPasswordData.password
    );


    await loginAssertion.verifyLoginError(
        'Your password is invalid!'
    );
});
    
});