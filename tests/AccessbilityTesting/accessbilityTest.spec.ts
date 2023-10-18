import {chromium, Browser, Page} from 'playwright'
import ENV from "../../utils/env";
import {test} from '@playwright/test'
import { injectAxe, checkA11y } from 'axe-playwright'
import AxeBuilder from '@axe-core/playwright';
import { createHtmlReport } from 'axe-html-reporter';

let browser: Browser;
let page: Page;

test.describe.skip('Playwright accessbility test', () => {
    test.beforeAll(async () => {
        browser = await chromium.launch();
        page = await browser.newPage();
        await page.goto('https://clyd-m-web-clydesdale.qa.hdinternal.co.uk/')
        //await page.goto(ENV.BASE_URL);
        await injectAxe(page);
    });

    test.skip('simple accessbility test', async () => {
        await page.goto(ENV.BASE_URL);
        await checkA11y(page, null, {


        //detailedReport: true,
        //detailedReportOptions: {html:true}
        });
});



    test.skip('check ally for specific element',async () => {
        await checkA11y(page, 'input[name="PropertyValue"]', {
            axeOptions: {
                runOnly: {
                  type: 'tag',
                  values: ['wcag2a'],
                },
            },
            detailedReport: true,
            detailedReportOptions: {html:true}
        });
    });
});   