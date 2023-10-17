import test, {expect} from "../Fixtures/test-base";
import {Page} from "@playwright/test";
import ENV from "../utils/env";
import * as data from "../Test-Data/singleAppEligibilityCheck.json";

test.describe("Verify Validation text when the mandatory fields are not given/given incorrectly", () => {
    test("Verify validation messages on Property details when Mandatory fields are not selected @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.completeApplicantAddressDetails();
        await applicantPersonalDetails.selectNext.click();
        await page.getByText("Please select the type of property.").isVisible();
        await page.getByText("Please enter the amount you wish to borrow.").isVisible();
        await page.getByText("Please enter the current value of the property.").isVisible();
        await page.getByText("Please select the source of your deposit").isVisible();
        await page.getByText("Please indicate if you are buying a flat.").isVisible();
        await page.getByText("Please indicate if you are planning to use a purchase scheme.").isVisible();
        await page.getByText("Please indicate if your property is a new build.").isVisible();
        await page.getByText("Plese indicate if you have found a property.").isVisible();
        await page.getByText("Please indicate if you will own any other properties.").isVisible();
    });

    test("Verify validation messages on Loan amount when higher numeric value is given @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails,applicantPropertyDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.completeApplicantAddressDetails();
        await applicantPropertyDetails.enterLoanAmount(data.numericValue.amount);
        await applicantPropertyDetails.loanErrorMsg.isVisible();
  });

    test("Verify validation messages on Purchase Price when higher numeric value is given @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails,applicantPropertyDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.completeApplicantAddressDetails();
        await applicantPropertyDetails.enterLoanAmount(data.numericValue.amount);
        await applicantPropertyDetails.purchasePriceErrorMsg.isVisible();
    });  

    test("Verify validation message when flat doesn't meet Criteria @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails,applicantPropertyDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.completeApplicantAddressDetails();
        await applicantPropertyDetails.buyingaFlat.click();
        await applicantPropertyDetails.flatDoesNotMeetCriteria.click();
        await applicantPropertyDetails.errorMsgFlatDoesntNotMeetCrtieria.isVisible();
    });  
});

test.describe("Verify Validation text For Different Purchase scheme types", () => {
    test("Verify validation messages When Purchase Scheme is Help To Buy @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails,applicantPropertyDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.completeApplicantAddressDetails();
        await applicantPropertyDetails.purchaseThroughScheme.click();
        await applicantPropertyDetails.selectHelpToBuyPurchaseScheme();
        await applicantPropertyDetails.errorMsgPropertyScheme.isVisible();
    });

    test("Verify validation messages When Purchase Scheme is Shared Ownership @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails,applicantPropertyDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.completeApplicantAddressDetails();
        await applicantPropertyDetails.purchaseThroughScheme.click();
        await applicantPropertyDetails.selectShareOwnershipScheme();
        await applicantPropertyDetails.errorMsgPropertyScheme.isVisible();
    });

    test("Verify validation messages When Purchase Scheme is Shared Equity @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails,applicantPropertyDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.completeApplicantAddressDetails();
        await applicantPropertyDetails.purchaseThroughScheme.click();
        await applicantPropertyDetails.selectShareOwnershipScheme();
        await applicantPropertyDetails.errorMsgPropertyScheme.isVisible();
    });

    test("Verify validation messages When Loan Amount is less than purchase price @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails,applicantPropertyDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.completeApplicantAddressDetails();
        await applicantPropertyDetails.enterPurchasePrice(data.validPropertyData.purchasePrice);
        await applicantPropertyDetails.enterLoanAmount(data.validPropertyData.higherLoanAmount);
        await applicantPropertyDetails.errMsgWhenLoanisGreaterthanProperty.isVisible();
    });

    test("Verify validation messages when Gift is selected from Deposit dropdown @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails,applicantPropertyDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.completeApplicantAddressDetails();
        await applicantPropertyDetails.selectGiftFromDeposit();
        await applicantPropertyDetails.errorMsgWhenGiftSelected.isVisible();
    });
});

test.describe("Verify When valid data for Property Details are given", () => {
    test("Verify when valid applicant Property details are given", async ({page,applicantPersonalDetails,eligibilityCriteria,applicantAddressDetails,applicantPropertyDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
        await applicantAddressDetails.completeApplicantAddressDetails();
        await applicantPropertyDetails.selectPropertyTypeConvertedFlat();
        await applicantPropertyDetails.enterLoanAmount(data.validPropertyData.loanAmount);
        await applicantPropertyDetails.enterPurchasePrice(data.validPropertyData.validPurchasePrice);
        await applicantPropertyDetails.selectBuilderFromSourceDeposit();
        await applicantPropertyDetails.notBuyingAFlat.click();
        await applicantPropertyDetails.purchaseNotThroughScheme.click();
        await applicantPropertyDetails.propertyNotNewBuild.click();
        await applicantPropertyDetails.propertyWishToBuyNotFound.click();
        await applicantPropertyDetails.DontOwnAnyProperties.click();


    });
});