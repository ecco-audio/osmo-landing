const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3001');
  await page.waitForLoadState('networkidle');
  
  // Check if the noise background is being applied
  const heroSection = await page.locator('[data-testid="hero-section"]');
  const heroStyles = await heroSection.evaluate(el => {
    const computed = window.getComputedStyle(el);
    return {
      backgroundImage: computed.backgroundImage,
      backgroundSize: computed.backgroundSize,
      backgroundPosition: computed.backgroundPosition
    };
  });
  
  console.log('Hero section background styles:', heroStyles);
  
  const featuresPanel = await page.locator('.bg-noise').nth(1); // Features panel
  const featureStyles = await featuresPanel.evaluate(el => {
    const computed = window.getComputedStyle(el);
    return {
      backgroundImage: computed.backgroundImage,
      backgroundSize: computed.backgroundSize,
      backgroundPosition: computed.backgroundPosition
    };
  });
  
  console.log('Features panel background styles:', featureStyles);
  
  // Take a screenshot
  await page.screenshot({ path: 'debug-screenshot.png', fullPage: true });
  
  console.log('Screenshot saved as debug-screenshot.png');
  console.log('Press any key to close...');
  
  // Keep browser open for manual inspection
  await page.waitForTimeout(30000);
  
  await browser.close();
})();