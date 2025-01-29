// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
        await page.goto("https://saucedemo.com/");

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Swag Labs/);

        // Perform login
        await page.fill("#user-name", "standard_user");
        await page.fill("#password", "secret_sauce");
        await page.click("#login-button");

        // Verify successful login by checking for the presence of an element on the home page
        await expect(page.locator(".inventory_list")).toBeVisible();
        // Close the page.
        await page.close();
});
