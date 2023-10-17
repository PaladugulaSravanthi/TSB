import test, {expect} from "../Fixtures/test-base";
import {Page} from "@playwright/test";
import ENV from "../utils/env";
import * as data from "../Test-Data/singleAppEligibilityCheck.json";

test.describe("Verify Validation text when the mandatory fields are not given/given incorrectly", () => {
    test("Verify validation messages on Income details when Mandatory fields are not selected @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails,applicantPropertyDetails,applicantIncomeDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.completeApplicantAddressDetails();
        await applicantPropertyDetails.completeapplicantPropertyDetails();
        await applicantIncomeDetails.continueButton.click();
        await page.getByText("Please indicate how many jobs you have.").isVisible();
        await page.getByText("Please select your current employment status.").isVisible();
        await page.getByText("Please enter your net monthly income.").isVisible();
        await page.getByText("Please indicate if you have other incomes.").isVisible();
        await page.getByText("Please enter your anticipated retirement age.").isVisible();
    });

    test("Verify validation text when no. of jobs taken is more than 3 @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails,applicantPropertyDetails,applicantIncomeDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.completeApplicantAddressDetails();
        await applicantPropertyDetails.completeapplicantPropertyDetails();
        await applicantIncomeDetails.noOfJobsgrtThan3.click();
        await applicantIncomeDetails.ErrMsgFornoOfJobsgrtThan3.isVisible();
});
});