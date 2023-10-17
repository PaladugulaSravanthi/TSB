import test, {expect} from "../Fixtures/test-base";
import {Page} from "@playwright/test";
import ENV from "../utils/env";
//import {test}  from "playwright-test-coverage";
//import * as "../Fixtures/test-base";
import * as data from "../Test-Data/singleAppEligibilityCheck.json";

test.describe("Verify Validation text when the mandatory fields are not given", () => {
    test("Verify validation messages on Address details when Mandatory fields are not selected @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantPersonalDetails.selectNext.click();
        await page.getByText("Please select your residential status.").isVisible();
        await page.getByText("Please enter your preferred telephone number.").isVisible();
        await page.getByText("Please enter your preferred email address.").isVisible();
        await page.getByText("Please indicate if you would like to be contacted by post.").isVisible();
        await page.getByText("Please indicate if you would like to be contacted by email.").isVisible();
        await page.getByText("Please indicate if you would like to be contacted by text.").isVisible();
        await page.getByText("Please indicate if you would like to be contacted by phone.").isVisible();
    });

    test("Verify error messages when invalid postocde is given in Postcode fields @Regression", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.enterPostCode(data.invalidAddressData.postCode);
        await applicantAddressDetails.clickContinueButton();
        await page.getByText('Postcode Error Div Find address Enter manually').isVisible();
    });

    test("Verify error messages when invalid telephone is given @Smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.enterTelephoneNumber(data.invalidAddressData.telephoneNumber);
        await page.getByText('Telephone number is not valid, please check your input and try again').isVisible();
    });

    test("Verify error messages when invalid email is given @Smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.enterEmailAddress(data.invalidAddressData.emailAddress);
        await page.getByText('Email address is not valid, please check your input and try again.').isVisible();
    });
});

test.describe("Verify Manual Address Fields", () => {
    test("Verify validation messages on Manual Address lookup @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.enterAddressManually.click();
        await applicantAddressDetails.clickContinueButton();
        await applicantAddressDetails.enterAddressManually.click();
        await page.getByText("Please enter a building name or number").isVisible();
        await page.getByText("Please enter the street.").isVisible();
        await page.getByText("Please enter the town.").isVisible();
        await page.getByText("Please enter the postcode.").isVisible();
    
    });
});

test.describe("Verify Address History of the applicant", () => {
    test("Verify validation when address history is < 3Years @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.selectResidentialStatus();
        await applicantAddressDetails.enterPostCode(data.validAddressData.postCode);
        await applicantAddressDetails.clickFindAddress.click();
        await applicantAddressDetails.selectAddressFromDropdown();
        await applicantAddressDetails.selectDateMovedToAddresslessThan3Years();
        await applicantAddressDetails.enterTelephoneNumber(data.validAddressData.telephoneNumber);
        await applicantAddressDetails.enterEmailAddress(data.validAddressData.emailAddress);
        await applicantAddressDetails.nocontactByPost.click();
        await applicantAddressDetails.nocontactByEmail.click();
        await applicantAddressDetails.nocontactByText.click();
        await applicantAddressDetails.nocontactByPhone.click();
        await applicantAddressDetails.clickContinueButton();
        await applicantAddressDetails.validationmsgshownlessThan3Years;   
    });

    test("Verify History with all the valid data @Regression", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.selectResidentialStatus();
        await applicantAddressDetails.enterPostCode(data.validAddressData.postCode);
        await applicantAddressDetails.clickFindAddress.click();
        await applicantAddressDetails.selectAddressFromDropdown();
        await applicantAddressDetails.selectDateMovedToAddress();
        await applicantAddressDetails.enterTelephoneNumber(data.validAddressData.telephoneNumber);
        await applicantAddressDetails.enterEmailAddress(data.validAddressData.emailAddress);
        await applicantAddressDetails.nocontactByPost.click();
        await applicantAddressDetails.nocontactByEmail.click();
        await applicantAddressDetails.nocontactByText.click();
        await applicantAddressDetails.nocontactByPhone.click();
        await applicantAddressDetails.clickContinueButton();
    });    
});