import { defineConfig, devices } from '@playwright/test';
import { env } from './src/core/utils/env';

export default defineConfig({

  // Test location
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Prevent test.only from being committed to CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests only in CI
  retries: process.env.CI ? 2 : 0,

  // Use fewer workers in CI to avoid environment instability
  workers: process.env.CI ? 1 : undefined,

  // Reports
  reporter: [
    ['list'],
    ['html', {
      outputFolder: 'artifacts/playwright-report',
      open: 'never'
    }]
  ],

  // Shared settings
  use: {
    baseURL: env.baseUrl,

    // Capture trace when a test is retried
    trace: 'on-first-retry',

    // Screenshot only when test fails
    screenshot: 'only-on-failure',

    // Keep video when test fails
    video: 'retain-on-failure'
  },

  // Browser projects
  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      }
    }
  ]
});