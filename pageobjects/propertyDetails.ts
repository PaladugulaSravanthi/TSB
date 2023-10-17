import {Page, expect, Locator} from "@playwright/test";
import * as data from "../Test-Data/singleAppEligibilityCheck.json";

export default class PropertyDetails{
    readonly page: Page;
    readonly errMsgWhenLoanisGreaterthanProperty: Locator;
    readonly loanErrorMsg: Locator;
    readonly purchasePriceErrorMsg: Locator;
    readonly buyingaFlat: Locator;
    readonly notBuyingAFlat: Locator;
    readonly flatMeetsCriteria: Locator;
    readonly flatDoesNotMeetCriteria: Locator;
    readonly purchaseThroughScheme: Locator;
    readonly purchaseNotThroughScheme: Locator;
    readonly errorMsgFlatDoesntNotMeetCrtieria: Locator;
    readonly helpToBuy: Locator;
    readonly errorMsgPropertyScheme: Locator;
    readonly selectSourceOfDeposit: Locator;
    readonly selectGiftFromSourceOfDeposit: Locator;
    readonly errorMsgWhenGiftSelected: Locator;
    readonly selectBuilderFromSourceOfDeposit: Locator;
    readonly propertyNotNewBuild: Locator;
    readonly propertyWishToBuyNotFound: Locator;
    readonly DontOwnAnyProperties: Locator;
    readonly continueButton: Locator;

constructor(page: Page) {
    this.page = page;
    this.errMsgWhenLoanisGreaterthanProperty = page.locator("//span[contains(text(),'Loan amount must be less than property value.')]");
    this.loanErrorMsg = page.locator("#propertyDetails_loanAmount-error");
    this.purchasePriceErrorMsg = page.locator("#propertyDetails_propertyValue-error");
    this.buyingaFlat = page.locator("//label[@for='buyingAFlat_true']");
    this.notBuyingAFlat = page.locator("label[for='buyingAFlat_false']");
    this.flatMeetsCriteria = page.locator("label[for='flatCriteriaMet_true']");
    this.flatDoesNotMeetCriteria = page.locator("label[for='flatCriteriaMet_false']");
    this.purchaseThroughScheme = page.locator("label[for='purchaseScheme_true']");
    this.purchaseNotThroughScheme = page.locator("label[for='purchaseScheme_false']");
    this.errorMsgFlatDoesntNotMeetCrtieria = page.locator("#propertyDetails.flatCriteriaMet-error");
    this.selectSourceOfDeposit = page.locator("#propertyDetails_sourceOfDeposit-button");
    this.selectGiftFromSourceOfDeposit = page.locator("#ui-id-10");
    this.selectBuilderFromSourceOfDeposit = page.locator("//li[normalize-space()='Builder/Seller']");
    this.errorMsgWhenGiftSelected = page.locator("//p[contains(text(),'When you make a full mortgage application you will')]");
    this.errorMsgPropertyScheme = page.locator("#propertyDetails_purchaseSchemeType-error");
    this.propertyNotNewBuild = page.locator("label[for='newBuildProperty_false']");
    this.propertyWishToBuyNotFound = page.locator("label[for='propertyFound_false']");
    this.DontOwnAnyProperties = page.locator("label[for='additionalPropertiesOwned_false']");
    this.continueButton = page.locator("button[type='submit']");
}

async selectPropertyTypeConvertedFlat(){
    await this.page.click("#propertyDetails_PropertyType-button");
    await this.page.click("#ui-id-7");
}

async enterLoanAmount(loanAmount: string) {
    await this.page.locator("#propertyDetails_loanAmount")
        .type(loanAmount);
}

async enterPurchasePrice(purchasePrice: string) {
    await this.page.locator("#propertyDetails_propertyValue")
        .type(purchasePrice);
}

async selectHelpToBuyPurchaseScheme() {
    await this.page.click("#propertyDetails_purchaseSchemeType-button");
    await this.page.click("//li[normalize-space()='Help to Buy']");
}

async selectShareOwnershipScheme() {
    await this.page.click("#propertyDetails_purchaseSchemeType-button");
    await this.page.click("//li[normalize-space()='Shared Ownership']");
}

async selectSharedEquityScheme() {
    await this.page.click("#propertyDetails_purchaseSchemeType-button");
    await this.page.click("//li[normalize-space()='Shared Equity']");
}

async selectGiftFromDeposit() {
    await this.selectSourceOfDeposit.click();
    await this.selectGiftFromSourceOfDeposit.click();
}

async selectBuilderFromSourceDeposit() {
    await this.selectSourceOfDeposit.click();
    await this.selectBuilderFromSourceOfDeposit.click();
}

async completeapplicantPropertyDetails() {
    await this.selectPropertyTypeConvertedFlat();
    await this.enterLoanAmount(data.validPropertyData.loanAmount);
    await this.enterPurchasePrice(data.validPropertyData.validPurchasePrice);
    await this.selectBuilderFromSourceDeposit();
    await this.notBuyingAFlat.click();
    await this.purchaseNotThroughScheme.click();
    await this.propertyNotNewBuild.click();
    await this.propertyWishToBuyNotFound.click();
    await this.DontOwnAnyProperties.click();
    await this.continueButton.click();
}

}