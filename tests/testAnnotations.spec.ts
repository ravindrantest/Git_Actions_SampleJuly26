

/*  */

import { expect, test } from "@playwright/test";

test.describe.serial("Test Annotation Grouping @smoke",async () => {    
    
test("Test Annotation to learn test.skip", async ({ page }) => {

    console.log("We have used test.skip since the environment is not ready");

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('.decorativeSubmit').click();

    await page.locator('//a[contains(text(),"CRM")]').click()

    await page.waitForTimeout(3000)

    console.log("Changes for s critical bug has been fixed and the test.skip annotation is removed from the test case");

})


test.fixme("Test Annotation to learn test.fixme", async ({ page }) => {

    console.log("Test is annoatated with fixme because the automation is flaky or doesn't work as expected");

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator('//input[@id="username"]').fill("democsr2");

    await page.locator('//input[@id="password"]').fill("crmsfa");

    await page.locator('.decorativeSub').click();

    await page.locator('//a[contains(text(),"CRM")]').click()

    console.log("Test is annotated with fixme because the automation is flaky or doesn't work as expected");``
})

// test.fail("Test Annotation to learn test.fail", async ({ page }) => {

//     console.log("Test Annotation to learn test.fail");

//     await page.goto("http://leaftaps.com/opentaps/control/main");

//     await page.locator('//input[@id="username"]').fill("democsr2");

//     await page.locator('//input[@id="password"]').fill("crmsfa");

//     await page.locator('.decorativeSubmit').click();

//     await expect(page.locator('//a[contains(text(),"CRM")]')).toBeEnabled(); //Non bug

//     await page.locator('//a[contains(text(),"CRM")]').click();
// })
})

/* Note : 
Whenever a bug is being fixed the known failure is fixed by the developer */
