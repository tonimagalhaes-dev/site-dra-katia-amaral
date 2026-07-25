import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  use: { baseURL: 'http://127.0.0.1:4173', trace: 'retain-on-failure' },
  projects: [
    { name: 'mobile-360', use: { ...devices['Pixel 5'], browserName: 'chromium', viewport: { width: 360, height: 800 } } },
    { name: 'mobile-390', use: { ...devices['iPhone 13'], browserName: 'chromium', viewport: { width: 390, height: 844 } } },
    { name: 'mobile-430', use: { ...devices['iPhone 14 Pro Max'], browserName: 'chromium', viewport: { width: 430, height: 932 } } },
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
  ],
});
