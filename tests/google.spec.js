const { test, expect } = require("@playwright/test");

test("search soto betawi in jakarta on Google", async ({ page }) => {
        // Go to Google
        await page.goto("https://www.google.com");

        // Accept cookies if prompted (optional, depending on your location)
        const acceptCookiesButton = await page.$('button:has-text("I agree")');
        if (acceptCookiesButton) {
                await acceptCookiesButton.click();
        }

        // Type the search query
        await page.fill('input[name="q"]', "soto betawi in jakarta");

        // Press Enter to search
        await page.press('input[name="q"]', "Enter");

        // Wait for the results to load
        await page.waitForSelector("#search");

        // Assert that the search results contain the expected text
        const results = await page.textContent("#search");
        expect(results).toContain("Soto Betawi");
});
