import test, {expect} from "../Fixtures/test-base";
import {Page} from "@playwright/test";
import ENV from "../utils/env";


  test.describe("Verify Error text when applicant does not meet Eligibility Crtiteria", () => {

    test.only('Verify the title of the page @smoke', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
      await eligibilityCriteria.clickAcceptCookies();
      await expect(page).toHaveTitle("TSB Mortgages - Mortgage Promise");
    });

    test('Verify Validation message when Release Equity option is selected @regression', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
      //await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.selectReleaseEquity();
      await page.getByText('If you want to release equity on an unmortgaged property, please call us on 0800').isVisible();
    });

    test('Verify Validation message when Buy-to-let option selected @regression', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
     // await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.selectBuyToLetProperty();
      await page.getByText('If you are looking to buy to let / purchase a second home, please call us on 0800').isVisible();
    });

    test('Verify Validation message when a new deal on TSB mortgage selected @regression', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
      //await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.selectDealOnTsbMort();
      await page.getByText('If you are looking for a new deal on your existing TSB mortgage, please visit our website.').isVisible();
    });

    test('Verify Validation message when Apply for further advance @regression', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
      //await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.selectApplyForFurtherAdvance();
      await page.getByText('If you want to borrow more on an existing TSB mortgage, please call us on 0800 056 1088 or use the l').isVisible();
    });

    test('Verify Error Msg when Age Term is <18 or >75Years is selected @smoke', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
      //await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickAgeCheckFalse();
      await page.getByText("We will need to discuss this in more detail with you. Please call us on 0800 056 1088 or use the liv").isVisible();
    });

    test('Verify Error Msg if user is not a UK resident @smoke', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
      //await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickIfNotAUkResident();
      await page.getByText("Sorry you need to be a UK resident to apply for a mortgage with us.").isVisible();
    });

    test('Verify Error Msg if the application is not for main residence @regression', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
      //await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickIfAppliNotMainResidence();
      await page.getByText("If this application is not for your main residence, you will need to call us on 0800 056 1088 or use").isVisible();
    });

    test('Verify Error Msg if user is not having regular income @regression', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
      //await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickIfAppliHasNoRegulaIncome();
      await page.getByText("Sorry, to apply for one of our mortgages you need to have a regular income").isVisible();
    }); 

    test('Verify Error Msg if the applicant is having arrears @regression', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
      //await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickIfAppliHasRegulaIncome();
      await page.getByText("We will need to discuss this in more detail with you. Please call us on 0800 056 1088 or use the liv").isVisible();
    });

    test('Verify Error Msg if the applicant is having CCJs @regression', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
      //await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickIfApplHasCCJcheck();
      await page.getByText("We will need to discuss this in more detail with you. Please call us on 0800 056 1088 or use the liv").isVisible();
    });

    test('Verify Error Msg if the applicant selects bankrupt @smoke', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
      //await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickBankrptcyCheckTrue();
      await page.getByText("Unfortunately you cannot apply for a TSB mortgage at this time.").isVisible();
    });

    test('Verify Error Msg if the applicant is looking for mortgage on Interest basis @regression', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
     // await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.clickMortOnInterestBasis();
      await page.getByText("We will need to discuss this in more detail with you. Please call us on 0800 056 1088 or use the liv").isVisible();
    });
  });

  test.describe("Verify Error text when user does not select Mandatory fields", () => {

    test('Verify error message when application type is not selected @@regression', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await page.getByText("Please select your application type.").isVisible();
    });

    test('Verify Error text when No. of applicants not selected @smoke', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await page.getByText("Please enter the number of applicants.").isVisible();
    });

    test('Verify Error text when chat with mortgage experts is not selected @regression', async ({eligibilityCriteria,page,eligibilityValidationMsg}) => {
      await page.goto(ENV.BASE_URL);
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyChatWithMortExperts();
    });    

    test('Verify Error text when Applicant age is not selected @smoke', async ({eligibilityCriteria,page,eligibilityValidationMsg}) => {
      await page.goto(ENV.BASE_URL);
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyApplicantAgeValidationMessage();
    });

    test('Verify Error text when Applicant residency is not selected @smoke', async ({eligibilityCriteria,eligibilityValidationMsg,page}) => {
      await page.goto(ENV.BASE_URL);
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyApplicantIsAResident();
    });

    test('Verify Error text when Applicant main residence is not selected @smoke', async ({eligibilityCriteria,eligibilityValidationMsg,page}) => {
      await page.goto(ENV.BASE_URL);
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyApplicantMainResidence();
    });

    test('Verify Error text when Regular Income is not selected @regression', async ({eligibilityCriteria,page,eligibilityValidationMsg}) => {
      await page.goto(ENV.BASE_URL);
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyApplicantRegularIncome();
    });

    test('Verify Error text when arrears field is not selected @regression', async ({eligibilityCriteria,page,eligibilityValidationMsg}) => {
      await page.goto(ENV.BASE_URL);
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyApplicantArrears();
    });

    test('Verify Error text when CCJ is not selected @smoke', async ({eligibilityCriteria,page,eligibilityValidationMsg}) => {
      await page.goto(ENV.BASE_URL);
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyApplicantCCJ();
    });

    test('Verify Error text when declared bankupt is not selected @smoke', async ({eligibilityCriteria,page,eligibilityValidationMsg}) => {
      await page.goto(ENV.BASE_URL);
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyApplicantBankrupt();
    });

    test('Verify Error text when interest on mortgage is not selected @smoke', async ({eligibilityCriteria,page,eligibilityValidationMsg}) => {
      await page.goto(ENV.BASE_URL);
      await eligibilityCriteria.acceptCookiesAndClickContinue();
      await eligibilityValidationMsg.verifyMortgageOnInterestBasis();
    });
  });

  test.describe("Verify When Applicant doesn't select form disclosure @smoke ", () => {
      
    test('Verify error message when applicant doesnot select disclosure statemnt', async ({eligibilityCriteria,page}) => {
      await page.goto(ENV.BASE_URL);
      //await eligibilityCriteria.clickAcceptCookies();
      await eligibilityCriteria.selectBuyAHome();
      await eligibilityCriteria.selectSoleApplicant();
      await eligibilityCriteria.haveChatWithMortgageExperts();
      await eligibilityCriteria.clickAgeCheckTrue();
      await eligibilityCriteria.clickIfAUkResident();
      await eligibilityCriteria.clickIfAppliMainResidence();
      await eligibilityCriteria.clickIfAppliHasRegulaIncome();
      await eligibilityCriteria.clickIfAppliNotHavingArrears();
      await eligibilityCriteria.clickIfApplHasNoCCJcheck();
      await eligibilityCriteria.clickBankrptcyCheckFalse();
      await eligibilityCriteria.clickMortOnNotInterestBasis();
      await eligibilityCriteria.clickContinueButton();
      //await expect(page).toHaveURL('./disclosure');
     // await eligibilityCriteria.selectConfirmDisclosure();
      await eligibilityCriteria.clickContinueButton();
      await page.getByText("Please indicate that you have read the disclosure statement.").isVisible();
    });
  });


    
  



