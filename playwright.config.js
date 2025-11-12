
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load .env file only in local environments
if (!process.env.CI) {
  const envPath = path.resolve(process.cwd(), '.env/.env');
  dotenv.config({ path: envPath });
  console.log(`✅ Loaded local env file: ${envPath}`);
} else {
  console.log('⚙️ CI detected — using GitHub Secrets, not loading .env files');
}

export default defineConfig({
  // Test settings
  timeout: 90000,
  retries: process.env.CI ? 1 : 0,
  workers: 1,

  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    // video: 'on',
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Reporters
  reporter: [
    ['line'],
    [
      'allure-playwright',
      {
        resultsDir: 'reports/allure-results',
      },
    ],
  ],
});
