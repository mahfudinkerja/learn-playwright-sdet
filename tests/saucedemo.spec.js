// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
        await page.goto("https://saucedemo.com/");

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Swag Labs/);

        // Close the page.
        await page.close();
});
