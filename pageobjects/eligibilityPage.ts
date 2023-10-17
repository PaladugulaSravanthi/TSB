//const { globalTimeout } = require("../playwright.config");
import {Page} from "@playwright/test";

export default class EligibilityPage {

    constructor(public page: Page) { }
    
        async acceptCookiesAndClickContinue() {
            //await this.clickAcceptCookies();
            await this.clickContinueButton();
        }    
        
        async clickAcceptCookies() {
            await this.page.click("#privacy-accept-button");
        }
        
        async clickSelectApplication() {
            await this.page.click('span[role="combobox"]:has-text("Select application type")');
        }

        async clickReleaseEquityMort() {
            await this.page.click("#ui-id-8");
        }

        async selectReleaseEquity() {
            await this.clickSelectApplication();
            await this.clickReleaseEquityMort();
        }

        async buyToLetProperty() {
            await this.page.click("#ui-id-6");
        }

        async selectBuyToLetProperty() {
            await this.clickSelectApplication();
            await this.buyToLetProperty();
        }

        async buyAHome() {
            await this.page.click("#ui-id-2");
        }

        async selectBuyAHome() {
            await this.clickSelectApplication();
            await this.buyAHome();
        }

        async clickDealOnMyTsbMort() {
            await this.page.click("#ui-id-5");
        }

        async selectDealOnTsbMort() {
            await this.clickSelectApplication();
            await this.clickDealOnMyTsbMort();
        }

        async clickApplyAdvance() {
            await this.page.click("#ui-id-4");
        }

        async selectApplyForFurtherAdvance() {
            await this.clickSelectApplication();
            await this.clickApplyAdvance();
        }    

        async selectSoleApplicant() {
            await this.page.click("//label[contains(text(),'One (sole applicant)')]");
        }

        async selectJointApplicant() {
            await this.page.getByText('Two (joint applicants)');
        }

        async clickAgeCheckFalse() {
            await this.page.click('label[for="ageCheck_false"]');
        }

        async clickAgeCheckTrue() {
            await this.page.click('label[for="ageCheck_true"]');
        }

        async clickIfAUkResident() {
            await this.page.click('label[for="residencyCheck_true"]');
        }

        async clickIfNotAUkResident() {
            await this.page.click('label[for="residencyCheck_false"]');
        }

        async clickIfAppliNotMainResidence() {
            await this.page.click('label[for="mainResidenceCheck_false"]');
        }

        async clickIfAppliMainResidence() {
            await this.page.click('label[for="mainResidenceCheck_true"]');
        }

        async clickIfAppliHasRegulaIncome() {
            await this.page.click('label[for="incomeCheck_true"]');
        }

        async clickIfAppliHasNoRegulaIncome() {
            await this.page.click('label[for="incomeCheck_false"]');
        }

        async clickIfAppliHavingArrears() {
            await this.page.click('label[for="arrearsCheck_true"]');
        }

        async clickIfAppliNotHavingArrears() {
            await this.page.click('label[for="arrearsCheck_false"]');
        }

        async clickIfApplHasCCJcheck() {
            await this.page.click('label[for="ccjCheck_true"]');
        }
 
        async clickIfApplHasNoCCJcheck() {
            await this.page.click('label[for="ccjCheck_false"]');
        }

        async clickBankrptcyCheckTrue() {
            await this.page.click('label[for="bankruptcyCheck_true"]');
        }

        async clickBankrptcyCheckFalse() {
            await this.page.click('label[for="bankruptcyCheck_false"]');
        }

        async clickMortOnInterestBasis() {
            await this.page.click('label[for="interestOnly_true"]');
        }

        async clickMortOnNotInterestBasis() {
            await this.page.click('label[for="interestOnly_false"]');
        }

        async clickContinueButton() {
            await this.page.click("button[type='submit']");
        }

        async ageNotSelected() {
            await this.page.click("#qualifierQuestions.ageCheck-error");
        }

        async selectConfirmDisclosure() {
            await this.page.click("label[class='checkbox']");
        }

        async haveChatWithMortgageExperts() {
            await this.page.click("label[for='chatCheck_true']");
        }

        async haveNoChatWithMortgageExperts() {
            await this.page.click("label[for='chatCheck_false']");
        }

        async completeApplicantEligibilityCheck() {
            await this.clickAcceptCookies();
            await this.selectBuyAHome();
            await this.selectSoleApplicant();
            await this.haveChatWithMortgageExperts();
            await this.clickAgeCheckTrue();
            await this.clickIfAUkResident();
            await this.clickIfAppliMainResidence();
            await this.clickIfAppliHasRegulaIncome();
            await this.clickIfAppliNotHavingArrears();
            await this.clickIfApplHasNoCCJcheck();
            await this.clickBankrptcyCheckFalse();
            await this.clickMortOnNotInterestBasis();
            await this.clickContinueButton();
            await this.selectConfirmDisclosure();
            await this.clickContinueButton();
        }
    
}










