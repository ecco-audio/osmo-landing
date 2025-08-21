import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:4323/sales-faq');
    await page.waitForTimeout(2000);
    
    // Take a screenshot
    await page.screenshot({ path: 'faq-debug.png', fullPage: true });
    console.log('Screenshot saved as faq-debug.png');
    
    // Keep browser open for inspection
    await page.waitForTimeout(10000);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
})();