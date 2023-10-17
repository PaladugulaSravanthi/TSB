import {Page, expect, Locator} from "@playwright/test";
import * as data from "../Test-Data/singleAppEligibilityCheck.json";

export default class IncomeDetails{
    readonly page: Page;
    readonly continueButton: Locator;
    readonly noOfJobsgrtThan3: Locator;
    readonly ErrMsgFornoOfJobsgrtThan3: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueButton = page.locator("button[type='submit']");
        this.noOfJobsgrtThan3 = page.locator("label[for='numberOfJobsClassedAsMainIncome_0_3']");
        this.ErrMsgFornoOfJobsgrtThan3 = page.locator("//span[contains(text(),'We will need to discuss this in more detail with y')]");
    }
}
