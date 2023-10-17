import {Page, expect, Locator} from "@playwright/test";

export default class ValidationText {

    readonly page: Page;
    readonly applicantAgeCheck: Locator;
    readonly applicantUKResident: Locator;
    readonly applicantResidence: Locator;
    readonly applicantRegularIncome: Locator;
    readonly applicantArrears: Locator;
    readonly applicantCCJ: Locator;
    readonly applicantBankrupt: Locator;
    readonly mortgagesOnInterest: Locator;
    readonly chatwithMortExperts: Locator;

    constructor(page: Page) {
        this.page = page;
        this.chatwithMortExperts = page.locator("//span[@id='qualifierQuestions.chatCheck-error']");
        this.applicantAgeCheck = page.locator("//span[@id='qualifierQuestions.ageCheck-error']");
        this.applicantUKResident = page.locator("//span[@id='qualifierQuestions.residencyCheck-error']");
        this.applicantResidence = page.locator("//span[@id='qualifierQuestions.mainResidenceCheck-error']");
        this.applicantRegularIncome = page.locator("//span[@id='qualifierQuestions.incomeCheck-error']");
        this.applicantArrears = page.locator("//span[@id='qualifierQuestions.arrearsCheck-error']");
        this.applicantCCJ = page.locator("//span[@id='qualifierQuestions.ccjCheck-error']");
        this.applicantBankrupt = page.locator("//span[@id='qualifierQuestions.bankruptcyCheck-error']");
        this.mortgagesOnInterest = page.locator("//span[@id='qualifierQuestions.interestOnly-error']");
    }

    async verifyChatWithMortExperts() {
        await expect(this.chatwithMortExperts).toBeVisible();
    }

    async verifyApplicantAgeValidationMessage() {
        await expect(this.applicantAgeCheck).toBeVisible();
    }
    async verifyApplicantIsAResident() {
        await expect(this.applicantUKResident).toBeVisible();
    }
    async verifyApplicantMainResidence() {
        await expect(this.applicantResidence).toBeVisible();
    }
    async verifyApplicantRegularIncome() {
        await expect(this.applicantRegularIncome).toBeVisible();
    }
    async verifyApplicantArrears() {
        await expect(this.applicantArrears).toBeVisible();
    }
    async verifyApplicantCCJ() {
        await expect(this.applicantCCJ).toBeVisible();
    }
    async verifyApplicantBankrupt() {
        await expect(this.applicantBankrupt).toBeVisible();
    }
    async verifyMortgageOnInterestBasis() {
        await expect(this.mortgagesOnInterest).toBeVisible();
    }

}