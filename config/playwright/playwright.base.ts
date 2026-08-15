import { defineConfig } from '@playwright/test';
import { env } from '../../src/core/utils/env';

export default defineConfig({
    timeout: 30_000,

    expect: {
        timeout: 5_000
    },

    use: {
        baseURL: env.baseUrl,

        trace: 'on-first-retry',

        screenshot: 'only-on-failure',

        video: 'retain-on-failure'
    },

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 2 : undefined,

    reporter: [
        ['html'],
        ['list']
    ]
});