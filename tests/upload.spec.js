import { test, expect } from "@playwright/test";
import { join } from "path";
import { existsSync } from "fs";

test("test download and upload document", async ({ page }) => {
        // Navigate to the website
        await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");

        // Download the file
        const [download] = await Promise.all([
                page.waitForEvent("download"),
                page.click("id=downloadButton"),
        ]);
        const downloadPath = "/Users/mahfud/Downloads/Document Automation Learn/download";
        await download.saveAs(join(downloadPath, download.suggestedFilename()));

        // // Upload the file
        const uploadFilePath = join(downloadPath, download.suggestedFilename());
        await page.setInputFiles("input#fileinput", uploadFilePath);
        // Take a screenshot after the file is uploaded
        await page.screenshot({ path: "screenshot-after-upload.png" });
        await page.close();
});
