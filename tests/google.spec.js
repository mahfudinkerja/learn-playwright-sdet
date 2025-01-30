// @ts-check
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
        await page.goto("https://google.com/");

        // Perubahan 2
        // perubahan 3

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Google/);
        await page.close();
});
