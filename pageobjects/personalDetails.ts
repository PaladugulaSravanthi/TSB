import {Page, expect, Locator} from "@playwright/test";
import * as data from "../Test-Data/singleAppEligibilityCheck.json";

export default class PersonalDetails {

    readonly page: Page;
    readonly firstTimeBuyer: Locator;
    readonly notFirstTimeBuyer: Locator;
    readonly selectTitle: Locator;
    readonly selectTitleFromList: Locator;
    readonly selectFirstName: Locator;
    readonly selectLastName: Locator;
    readonly selectGender: Locator;
    readonly nameNotChanged: Locator;
    readonly selectDate: Locator;
    readonly selectDateFromList: Locator;
    readonly selectMonth: Locator;
    readonly selectMonthFromList: Locator;
    readonly selectYear: Locator;
    readonly selectYearFromList: Locator;
    readonly selectMartialStatus: Locator;
    readonly selectMartialStatusFromList: Locator;
    readonly selectFinancialDependents: Locator;
    readonly selectDependents: Locator;
    readonly selectNationalityDropdown: Locator;
    readonly selectAppliNationality: Locator;
    readonly selectResidence: Locator;
    readonly selectCountryResidence: Locator;
    readonly selectCityOfBirth: Locator;
    readonly selectCountryOfBirth: Locator;
    readonly selectCountry: Locator;
    readonly selectCountryOfTax: Locator;
    readonly selectTaxedCountry: Locator;
    readonly selectIfNotAUSCitizen: Locator;
    readonly SelectNotAPoliticallyExposedPerson: Locator;
    readonly selectNext: Locator;
    readonly firstTimeBuyerErrMsg: Locator;
    readonly appHasDiplomaticImmunity: Locator;
    readonly appHasNoDiplomaticImmunity: Locator;
    readonly noRightToResidencyCheck: Locator;
    readonly rightToReidencyCheck: Locator;
    readonly nameChanged: Locator;
    readonly selectResidencyDropdown: Locator;
    readonly selectOutsideUk: Locator;
    readonly deletePreviousName: Locator;
    readonly selectInvalidYearFromList: Locator;


    constructor(page: Page) {
        this.page = page;
        this.firstTimeBuyer = page.locator('label[for="firstTimeBuyer_0_true"]');
        this.notFirstTimeBuyer = page.locator('label[for="firstTimeBuyer_0_false"]');
        this.selectTitle = page.locator('#applicants_0__personalDetails_newtitle-button');
        this.selectTitleFromList = page.locator('#ui-id-2');
        this.selectFirstName = page.getByLabel('First name');
        this.selectLastName = page.getByLabel('Last name');
        this.selectGender = page.getByText('Female');
        this.nameNotChanged = page.locator("label[for='nameChanged_0_false']");
        this.nameChanged = page.locator("label[for='nameChanged_0_true']");
        this.selectDate = page.locator('#applicants_0__personalDetails_dateOfBirth_Day-button');
        this.selectDateFromList = page.locator('#ui-id-18');
        this.selectMonth = page.locator('#applicants_0__personalDetails_dateOfBirth_Month-button');
        this.selectMonthFromList = page.locator('#ui-id-50');
        this.selectYear = page.locator('#applicants_0__personalDetails_dateOfBirth_Year-button');
        this.selectYearFromList = page.locator('#ui-id-64');
        this.selectMartialStatus = page.locator('span[role="combobox"]:has-text("Select marital status")');
        this.selectMartialStatusFromList = page.locator('li[role="option"]:has-text("Single")');
        this.selectFinancialDependents = page.getByRole('group', { name: 'Number of financial dependants' }).locator('span[role="combobox"]:has-text("0")');
        this.selectDependents = page.locator('li[role="option"]:has-text("0")');
        this.selectNationalityDropdown = page.locator('#applicants_0__personalDetails_nationality1-button');
        this.selectAppliNationality = page.locator('li[role="option"]:has-text("British")');
        this.selectResidence = page.locator('span[role="combobox"]:has-text("Select country of residence")');
        this.selectCountryResidence = page.locator('li[role="option"]:has-text("United Kingdom")');
        this.selectCityOfBirth = page.getByLabel('Town or city of birth');
        this.selectCountryOfBirth = page.locator('span[role="combobox"]:has-text("Select country of birth")');
        this.selectCountry = page.locator('ul[role="listbox"]:has-text("Select country of birthUnited KingdomAfghanistanÅland IslandsAlbaniaAlgeriaAmeri")').getByRole('option', { name: 'United Kingdom' });
        this.selectCountryOfTax = page.locator('span[role="combobox"]:has-text("Select country of tax residence")');
        this.selectTaxedCountry = page.locator('ul[role="listbox"]:has-text("Select country of tax residenceUnited KingdomAfghanistanÅland IslandsAlbaniaAlge")').getByRole('option', { name: 'United Kingdom' });
        this.selectIfNotAUSCitizen = page.getByRole('group', { name: 'Are you a US citizen?' }).getByText('No');
        this.SelectNotAPoliticallyExposedPerson = page.getByRole('group', { name: 'Do you declare yourself a politically exposed person?' }).getByText('No');
        this.selectNext = page.locator('//button[contains(text(),"Next")]');
        this.firstTimeBuyerErrMsg = page.locator("//span[@id='applicants[0].personalDetails.firstTimeBuyer-error");
        this.appHasDiplomaticImmunity = page.locator("label[for='diplomaticImmunity_0_true']");
        this.appHasNoDiplomaticImmunity = page.locator("label[for='diplomaticImmunity_0_false']");
        this.noRightToResidencyCheck = page.locator("label[for='rightToUKResidency_0_true']");
        this.rightToReidencyCheck = page.locator("label[for='rightToUKResidency_0_false']");
        this.selectResidencyDropdown = page.locator("#applicants_0__personalDetails_countryOfResidence-button");
        this.selectOutsideUk = page.locator("#ui-id-435");
        this.deletePreviousName = page.locator("#delete-previous-name_0");
        this.selectInvalidYearFromList = page.locator("#ui-id-131");
    }

async selectApplicantTitle()
    {
        await this.selectTitle.click();
        await this.selectTitleFromList.click();
    }

async selectDateOfBirth()
    {
        await this.selectDate.click();
        await this.selectDateFromList.click();
        await this.selectMonth.click();
        await this.selectMonthFromList.click();
        await this.selectYear.click();
        await this.selectYearFromList.click();
    }

    async selectInvalidDateOfBirth()
    {
        await this.selectDate.click();
        await this.selectDateFromList.click();
        await this.selectMonth.click();
        await this.selectMonthFromList.click();
        await this.selectYear.click();
        await this.selectInvalidYearFromList.click();
    }

async selectMartialStatusofApplicant()
    {
        await this.selectMartialStatus.click();
        await this.selectMartialStatusFromList.click();
    }

async NoOfFinancialDependents()
    {
        await this.selectFinancialDependents.click();
        await this.selectDependents.click();
    }

async ApplicantNationality()
    {
        await this.selectNationalityDropdown.click();
        await this.selectAppliNationality.click();
    }

async ApplicantResidence()
    {
        await this.selectResidence.click();
        await this.selectCountryResidence.click();
    }

async ApplicantCountryOfBirth()
    {
        await this.selectCountryOfBirth.click();
        await this.selectCountry.click();
    }

async ApplicantCountryOfTaxResidence()
    {
        await this.selectCountryOfTax.click();
        await this.selectTaxedCountry.click();
    }

async SelectResidenceOutsideUK()
    {
        await this.selectResidencyDropdown.click();
        await this.selectOutsideUk.click();
    }

    async enterFirstName(firstname: string) {
        await this.page.locator("#applicants_0__personalDetails_forename1")
            .type(firstname);
    }

    async enterLastName(lastname: string) {
        await this.page.locator("#applicants_0__personalDetails_surname")
            .type(lastname);
    }

    async enterCityOfBirth(cityofbirth: string) {
        await this.page.locator("#applicants_0__personalDetails_TownCityOfBirth")
            .type(cityofbirth)
    }

    async enterForeName(forename: string) {
        await this.page.locator("#applicants_0__personalDetails_surname")
            .type(forename);
    }

    async enterSurName(surname: string) {
        await this.page.locator("#applicants_0__personalDetails_surname")
            .type(surname);
    }

    async clickContinueButton() {
        await this.page.click("button[type='submit']");
    }

    async selectOtherNationality() {
        await this.page.click("#applicants_0__personalDetails_nationality1-button");
        await this.page.click("#ui-id-3");
    }

    async completeApplicantPersonalDetails() {
        await this.notFirstTimeBuyer.click();
        await this.selectApplicantTitle();
        await this.enterFirstName(data.valid.firstName);
        await this.enterLastName(data.valid.lastName);
        await this.selectGender.click();
        await this.nameNotChanged.click();
        await this.selectDateOfBirth();
        await this.selectMartialStatusofApplicant();
        await this.NoOfFinancialDependents();
        await this.ApplicantNationality();
        await this.ApplicantResidence();
        await this.enterCityOfBirth(data.valid.cityOfBirth);
        await this.ApplicantCountryOfBirth();
        await this.ApplicantCountryOfTaxResidence();
        await this.selectIfNotAUSCitizen.click();
        await this.SelectNotAPoliticallyExposedPerson.click();
        await this.clickContinueButton();
    }

    async completeApplicantPersonalDetailswithInvalidDOB() {
        await this.notFirstTimeBuyer.click();
        await this.selectApplicantTitle();
        await this.enterFirstName(data.valid.firstName);
        await this.enterLastName(data.valid.lastName);
        await this.selectGender.click();
        await this.nameNotChanged.click();
        await this.selectInvalidDateOfBirth();
        await this.selectMartialStatusofApplicant();
        await this.NoOfFinancialDependents();
        await this.ApplicantNationality();
        await this.ApplicantResidence();
        await this.enterCityOfBirth(data.valid.cityOfBirth);
        await this.ApplicantCountryOfBirth();
        await this.ApplicantCountryOfTaxResidence();
        await this.selectIfNotAUSCitizen.click();
        await this.SelectNotAPoliticallyExposedPerson.click();
        await this.clickContinueButton();
    }
}
