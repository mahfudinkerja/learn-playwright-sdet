import { test, expect } from "@playwright/test";

test("Locators Built-in", async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com");

        const logo = page.getByAltText("company-branding");
        await expect(logo).toBeVisible();

        await page.getByPlaceholder("Username").fill("Admin");
        await expect(page.getByPlaceholder("Username")).toHaveValue("Admin");
        await page.getByPlaceholder("Password").fill("admin123");
        await expect(page.getByPlaceholder("Password")).toHaveValue("admin123");

        await page.getByRole("button", { type: "submit" }).click();

        const locator = await page
                .locator("//p[@class='oxd-userdropdown-name']")
                .textContent();
        await expect(page.getByText(locator)).toBeVisible();
});
