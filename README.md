# Playwright Login Automation Framework

## Overview

This project is a scalable UI automation framework developed using **Playwright with TypeScript**.

The framework automates the login functionality of the **Practice Test Automation** application and follows maintainable automation practices such as:

- Page Object Model (POM)
- Custom Playwright Fixtures
- Externalized Test Data
- Environment-based Configuration
- Reusable Assertions
- Cross-browser Testing
- Screenshot, Video and Trace Capture
- Playwright HTML Reporting


---

## Application Under Test

**Application:** Practice Test Automation - Login

**URL:**  
https://practicetestautomation.com/practice-test-login/

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Playwright | UI Automation |
| TypeScript | Programming Language |
| Node.js | Runtime Environment |
| npm | Dependency Management |
| Git | Source Code Management |
| Test Reporting |

# Framework Architecture

The framework follows a layered automation architecture:


Test Specification
       |
       v
Custom Playwright Fixture
       |
       v
Login Page Object
       |
       +------------------+
       |                  |
       v                  v
   Selectors          Assertions
       |                  |
       +--------+---------+
                |
                v
        Application Under Test

## Project Structure

playwright-login-automation/
│
├── artifacts/
│   └── playwright-report/
│       └── data/
│           └── index.html
│
├── config/
│   └── environments/
│       └── qa.env
│
├── playwright/
│   └── playwright.base.ts
│
├── src/
│   ├── core/
│   │   └── fixtures/
│   │       ├── login.data.ts
│   │       └── test.fixture.ts
│   │
│   ├── utils/
│   │   └── env.ts
│   │
│   └── ui/
│       └── page/
│           └── login/
│               ├── login.assertion.ts
│               ├── login.page.ts
│               └── login.selector.ts
│
├── tests/
│   └── smoke/
│       └── Ui/
│           └── login.spec.ts
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── .gitignore

Test data is maintained separately from test implementation:
Test Case
    |
    v
Test Data
    |
    v
Environment Configuration

This separation helps improve:

1.Maintainability
2.Reusability
3.Scalability
4.Readability
5.Test data management
Folder Responsibilities


#config/environments

Contains environment-specific configuration.

Example:
#config/
└── environments/
    └── qa.env
The environment file contains values such as:
BASE_URL=https://practicetestautomation.com
LOGIN_USERNAME=<username>
LOGIN_PASSWORD=<password>

#playwright/
Contains shared Playwright configuration modules.
playwright/
└── playwright.base.ts
The custom fixture provides reusable page objects to the test cases.
Example:
test('Login test', async ({
    page,
    loginPage,
    loginAssertion
}) => {

    await page.goto('/practice-test-login/');

    await loginPage.login(
        validLoginData.username,
        validLoginData.password
    );

    await loginAssertion.verifyLoginSuccess();
});

This avoids creating page objects manually inside every test.

#src/test-data

Contains test data separately from test implementation.

src/test-data/
└── login.data.ts

Test data includes:

Valid username/password
Invalid username
Invalid password
Blank username
Blank password

Example:
export const validLoginData = {
    username: env.loginUsername,
    password: env.loginPassword
};

#src/utils

Contains reusable framework utilities.

Current utility:

src/utils/
└── env.ts

The environment utility is responsible for loading the appropriate environment configuration.

src/ui/page/login

Contains the Login Page Object implementation.

src/ui/page/login/
│
├── login.page.ts
├── login.selector.ts
└── login.assertion.ts
login.page.ts

Contains reusable page actions such as:

Enter username
Enter password
Click Submit
Login

Example:

await loginPage.login(
    username,
    password
);
login.selector.ts

Contains login page locators.

Example:

username: '#username',
password: '#password',
submit: '#submit',
error: '#error'

Keeping selectors separately makes locator maintenance easier.

login.assertion.ts

Contains reusable login-specific assertions.

Examples:

verifyLoginSuccess()
verifyLoginError()
verifyLoginConfirmationMessage()
verifyLogoutButton()

This keeps assertions separate from test implementation.

Page Object Model

The framework follows the Page Object Model.

Instead of placing locators and UI actions directly inside the test:

Test
  |
  v
LoginPage
  |
  +--> Selectors
  |
  +--> Actions

This allows multiple tests to reuse the same login functionality.

For example:

await loginPage.login(
    validLoginData.username,
    validLoginData.password
);

If the login UI changes in the future, the page object can be updated without changing every test case.

Test Data Management

Test data is not hard-coded directly inside the test cases.

For example, instead of:

await loginPage.login(
    'student',
    'Password123'
);

the test uses:

await loginPage.login(
    validLoginData.username,
    validLoginData.password
);

This makes the test data easier to maintain and allows the same test implementation to work with different environments.

Environment Management

The framework supports environment-based configuration.

Current environment:

QA

Configuration:

config/environments/qa.env

The environment can be selected through environment variables.

Example:

$env:ENV="qa"

Then execute:

npx playwright test

The framework can be extended to support:

dev
qa
stage
prod

without changing the test implementation.

Prerequisites

Install the following software:

Node.js
npm
Git

Verify Node.js:

node --version

Verify npm:

npm --version

Verify Git:

git --version
Installation
1. Clone the repository
git clone <repository-url>
2. Navigate to the project
cd playwright-login-automation
3. Install dependencies
npm ci
4. Install Playwright browsers

Install all supported browsers:

npx playwright install

Or install Chromium only:

npx playwright install chromium
Running Tests
Run all tests
npx playwright test
Run Chromium
npx playwright test --project=chromium
Run Firefox
npx playwright test --project=firefox
Run WebKit
npx playwright test --project=webkit
Run Smoke Tests
npx playwright test tests/smoke
Run Login Test
npx playwright test tests/smoke/ui/login.spec.ts
Run Login Test on Chromium
npx playwright test tests/smoke/ui/login.spec.ts --project=chromium
Headed Execution

To execute the test with the browser visible:

npx playwright test tests/smoke/ui/login.spec.ts --headed
Debugging

Playwright debug mode:

npx playwright test tests/smoke/ui/login.spec.ts --debug

This allows step-by-step debugging of the test.

Test Coverage

The framework currently contains positive, negative and boundary login scenarios.

Positive Test Cases
ID	Test Case
TC01	Login with valid username and valid password
TC02	Verify successful login after page refresh
TC03	Verify successful login URL
TC04	Verify successful login heading
TC05	Verify successful login confirmation message
TC06	Verify Logout button after successful login
Negative Test Cases
ID	Test Case
TC07	Invalid username + valid password
TC08	Valid username + invalid password
TC09	Invalid username + invalid password
TC10	Blank username + blank password
TC11	Blank username + valid password
TC12	Valid username + blank password

Reporting
Playwright HTML Report

The framework uses the Playwright HTML reporter.

After test execution:

npx playwright show-report

If a custom output directory is configured:

npx playwright show-report artifacts/playwright-report

The report provides:

Test execution status
Passed tests
Failed tests
Test duration
Error details
Screenshots
Videos
Traces
Screenshots

Screenshots are configured to be captured for both passed and failed tests.

Example configuration:

use: {
    screenshot: 'on'
}

Screenshots are stored as Playwright test artifacts.

Video

Videos are retained when tests fail.

Example configuration:

use: {
    video: 'retain-on-failure'
}

This helps investigate failures that cannot be easily reproduced from logs.

Trace

Playwright trace collection is configured for retries.

Example:

use: {
    trace: 'on-first-retry'
}

Trace files can be opened using:

npx playwright show-trace <trace-file>

Coding Standards

The framework follows these coding practices:

Use TypeScript
Use Page Object Model
Keep test data separate from test logic
Avoid hard-coded credentials
Avoid duplicated locators
Use reusable assertions
Use meaningful test names
Use async/await
Prefer Playwright built-in locators
Avoid unnecessary XPath
Keep tests focused on business scenarios
Keep framework components reusable
Follow consistent naming conventions

Maintainability and Scalability

The framework is designed so that changes in one layer have minimal impact on other layers.

For example:

Application UI Change
        ↓
login.selector.ts
        ↓
login.page.ts
        ↓
Existing Tests

Test data changes are isolated:

Environment/Test Data
        ↓
login.data.ts
        ↓
Test Cases

This reduces duplication and makes the framework easier to maintain as the application grows.


Future Enhancements

The framework can be extended with:

API automation
API/UI integration testing
Additional Page Objects
Workflow layer
API clients
Schema validation
Contract testing
Additional environments
Parallel execution
Docker execution
Jenkins scheduled execution
Email/Slack notifications
Enhanced Allure reporting
Test tagging
Selective test execution
