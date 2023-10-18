import test, {expect} from "../Fixtures/test-base";
import ENV from "../utils/env";

test.describe('Verify Mortgage Eligibility When single applicant submits application', () => {
  test('Applicant submits Eligibility criteria for Mortgage @smoke', async({page,eligibilityCriteria}) => {

    await page.goto(ENV.BASE_URL);
    await eligibilityCriteria.clickAcceptCookies();
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
    await eligibilityCriteria.selectConfirmDisclosure();
    await eligibilityCriteria.clickContinueButton();
  });

});