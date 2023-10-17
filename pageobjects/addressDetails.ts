import {Page, expect, Locator} from "@playwright/test";
import * as data from "../Test-Data/singleAppEligibilityCheck.json";

export default class AddressDetails{
    readonly page: Page;
    readonly flatNumber: Locator;
    readonly buildingName: Locator;
    readonly buildingNumber: Locator;
    readonly street: Locator;
    readonly town: Locator;
    readonly postcode: Locator;
    readonly enterAddressManually: Locator;
    readonly clickFindAddress: Locator;
    readonly dateMovedToAddress: Locator;
    readonly monthMovedToAddress: Locator;
    readonly yearMovedToAddress: Locator;
    readonly selectDate: Locator;
    readonly selectMonth: Locator;
    readonly selectYear: Locator;
    readonly selectrecentYear: Locator;
    readonly nocontactByPost: Locator;
    readonly nocontactByEmail: Locator;
    readonly nocontactByText: Locator;
    readonly nocontactByPhone: Locator;
    readonly validationmsgshownlessThan3Years: Locator;



constructor(page: Page) {
    this.page = page;
    this.flatNumber = page.locator("#applicants_0__addressDetails_currentAddress_address_Flat");
    this.buildingName = page.locator("#applicants_0__addressDetails_currentAddress_address_BuildingName");
    this.buildingNumber = page.locator("#applicants_0__addressDetails_currentAddress_address_BuildingNumber");
    this.street = page.locator("#applicants_0__addressDetails_currentAddress_address_Street");
    this.town = page.locator("#applicants_0__addressDetails_currentAddress_address_Town");
    this.postcode = page.locator("#applicants_0__addressDetails_currentAddress_address_PostCode");
    this.enterAddressManually = page.locator(".control.ManualEntry");
    this.clickFindAddress = page.locator(".FindAddress.button");
    this.dateMovedToAddress = page.locator("#applicants_0__addressDetails_currentAddress_dateMovedToAddress_Day-button");
    this.monthMovedToAddress = page.locator("#applicants_0__addressDetails_currentAddress_dateMovedToAddress_Month-button");
    this.yearMovedToAddress = page.locator("#applicants_0__addressDetails_currentAddress_dateMovedToAddress_Year-button");
    this.selectDate = page.locator("#ui-id-38");
    this.selectMonth = page.locator("#ui-id-70");
    this.selectrecentYear = page.locator("#ui-id-88");
    this.nocontactByPost = page.locator("label[for='mailMarketing_false']");
    this.nocontactByEmail = page.locator("label[for='emailMarketing_false']");
    this.nocontactByText = page.locator("label[for='smsMarketing_false']");
    this.nocontactByPhone = page.locator("label[for='telephoneMarketing_false']");
    this.selectYear = page.locator("#ui-id-88");
    this.validationmsgshownlessThan3Years = page.locator("//span[contains(text(),'In order to carry out a credit check we need to kn')]");
    
}

    async enterPostCode(postcode: string) {
        await this.page.locator("#applicants_0__addressDetails_currentAddress_address_SearchPostCode")
            .type(postcode);
    }

    async enterTelephoneNumber(telephoneNumber: string) {
        await this.page.locator("#applicants_0__addressDetails_telephone")
            .type(telephoneNumber);
    }
    async enterEmailAddress(emailAddress: string) {
        await this.page.locator("#applicants_0__addressDetails_email")
            .type(emailAddress);
    }


    async clickContinueButton() {
        await this.page.click("button[type='submit']");
    }

    async selectResidentialStatus() {
        await this.page.click("#applicants_0__addressDetails_residentialStatus-button");
        await this.page.click("#ui-id-4");
    }

    async selectAddressFromDropdown() {
        await this.page.click("#ui-id-8-button");
        await this.page.click("#ui-id-10");
    }

    async selectDateMovedToAddresslessThan3Years() {
        await this.dateMovedToAddress.click();
        await this.selectDate.click();
        await this.monthMovedToAddress.click();
        await this.selectMonth.click();
        await this.yearMovedToAddress.click();
        await this.selectrecentYear.click();
    }

    async selectDateMovedToAddress() {
        await this.dateMovedToAddress.click();
        await this.selectDate.click();
        await this.monthMovedToAddress.click();
        await this.selectMonth.click();
        await this.yearMovedToAddress.click();
        await this.selectYear.click();
    }

    async completeApplicantAddressDetails() {
        await this.selectResidentialStatus();
        await this.enterPostCode(data.validAddressData.postCode);
        await this.clickFindAddress.click();
        await this.selectAddressFromDropdown();
        await this.selectDateMovedToAddress();
        await this.enterTelephoneNumber(data.validAddressData.telephoneNumber);
        await this.enterEmailAddress(data.validAddressData.emailAddress);
        await this.nocontactByPost.click();
        await this.nocontactByEmail.click();
        await this.nocontactByText.click();
        await this.nocontactByPhone.click();
        await this.clickContinueButton();
    }

    


}
