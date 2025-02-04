import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
        await page.goto("https://demoblaze.com/index.html");

        // click on login button
        // await page.locator('id=login2').click();
        await page.click("id=login2");

        // provide username  - css
        // await page.locator('#loginusername').fill('pavanol');
        await page.fill("#loginusername", "pavanol");
        //  await page.type('#loginusername', 'pavanol');

        // provide password - css
        await page.fill("#loginpassword", "test@123");

        // click on login button - xpath
        await page.click('xpath=//button[contains(text(),"Log in")]');

        // verify the logout button is displayed
        await page.locator("id=logout2").isVisible();

        await page.close();
});
