import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  page.on('console', msg => {
    console.log(`[BROWSER CONSOLE] ${msg.type().toUpperCase()}: ${msg.text()}`);
  });

  page.on('pageerror', error => {
    console.log(`[PAGE ERROR]: ${error.message}`);
  });

  page.on('requestfailed', request => {
    console.log(`[NETWORK FAILED] ${request.url()} - ${request.failure()?.errorText}`);
  });

  page.on('response', response => {
    if (response.status() >= 400) {
      console.log(`[HTTP ERROR] ${response.status()} - ${response.url()}`);
    }
  });

  console.log("Navigating to https://yasminefinefood.com/ ...");
  await page.goto('https://yasminefinefood.com/', { waitUntil: 'networkidle' });

  console.log("Page loaded. Waiting 5 seconds...");
  await page.waitForTimeout(5000);

  const html = await page.content();
  console.log("Root element content length:", html.length);
  
  if (html.includes("Loading Yasmine Fine Food")) {
    console.log("Still stuck on loading screen!");
  } else {
    console.log("App successfully mounted!");
  }

  await browser.close();
})();
