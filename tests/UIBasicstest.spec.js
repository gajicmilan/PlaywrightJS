const {test} = require('@playwright/test');


test('Browser Context Playwright test',async ({browser})=>
{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demoqa.com/");

});

test.only('Page Playwright test',async ({page})=>
{

    await page.goto("https://google.com/");

});