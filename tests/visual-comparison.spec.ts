import { test, expect } from '@playwright/test';

test.describe('Osmosis Landing Page Visual Comparison', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('full page screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot('full-page.png', {
      fullPage: true,
    });
  });

  test('header section', async ({ page }) => {
    const header = page.locator('header, nav').first();
    await expect(header).toHaveScreenshot('header.png');
  });

  test('hero section', async ({ page }) => {
    const hero = page.locator('[data-testid="hero-section"]').first();
    await expect(hero).toHaveScreenshot('hero.png');
  });

  test('product overview section', async ({ page }) => {
    const section = page.locator('[data-testid="product-overview"]').first();
    await expect(section).toHaveScreenshot('product-overview.png');
  });

  test('features section', async ({ page }) => {
    const section = page.locator('[data-testid="features-section"]').first();
    await expect(section).toHaveScreenshot('features.png');
  });

  test('benefits section', async ({ page }) => {
    const section = page.locator('[data-testid="benefits-section"]').first();
    await expect(section).toHaveScreenshot('benefits.png');
  });

  test('cta section', async ({ page }) => {
    const section = page.locator('[data-testid="cta-section"]').first();
    await expect(section).toHaveScreenshot('cta.png');
  });

  test('footer section', async ({ page }) => {
    const footer = page.locator('footer').first();
    await expect(footer).toHaveScreenshot('footer.png');
  });
});