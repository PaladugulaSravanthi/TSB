import test, {expect} from "../Fixtures/test-base";
import PersonalDetails from "../pageobjects/personalDetails";
import * as data from "../Test-Data/singleAppEligibilityCheck.json";
import ENV from "../utils/env";
//const dataset = JSON.parse(JSON.stringify(require("../Test-Data/singleAppEligibilityCheck.json")));

test.describe("Verify Validation text when the mandatory fields are not given", () => {
    test("Verify validation messages on Personal details when Mandatory fields are not selected @smoke", async ({page,applicantPersonalDetails,eligibilityCriteria}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.selectNext.click();
        await page.getByText("Please indicate if you are a first time buyer.").isVisible();
        await page.getByText("Please select your title.").isVisible();
        await page.getByText("Please enter your first name").isVisible();
        await page.getByText("Please enter your last name.").isVisible();
        await page.getByText("Please indicate your gender.").isVisible();
        await page.getByText("Please indicate if your name has ever changed.").isVisible();
        await page.getByText("Please select your marital status.").isVisible();
        await page.getByText("Please select your primary nationality.").isVisible();
        await page.getByText("Please select your country of residence.").isVisible();
        await page.getByText("Please enter your town or city of birth.").isVisible();
        await page.getByText("Please select your country of birth.").isVisible();
        await page.getByText("Please select your country of tax residence.").isVisible();
        await page.getByText("Please indicate if you are US citizen.").isVisible();
        await page.getByText("Please indicate if your are a politically exposed person.").isVisible();
    });

    test("Verify validation message on when user selects diplomatic immunity @regression", async ({page,applicantPersonalDetails,eligibilityCriteria}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.selectOtherNationality();
        await applicantPersonalDetails.appHasDiplomaticImmunity.click();
        await page.getByText("Sorry, we are unable to lend to individuals with diplomatic immunity.").isVisible();
    });

    test("Verify Validation message when app has no residency @regression", async ({page, eligibilityCriteria, applicantPersonalDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.selectOtherNationality();
        await applicantPersonalDetails.noRightToResidencyCheck.click(); //have to fix tests
        await page.getByText("Sorry, we are only able to lend to permanent UK residents.").isVisible();    
    });

    test("Verify Validation text when UK is not selected for residence @regression", async({page,eligibilityCriteria,applicantPersonalDetails})=> {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.SelectResidenceOutsideUK();
        await page.getByText('Sorry, we are unable to lend to non-residents of the UK.').isVisible();
    });

    test("Verify Validation text when invalid DOB is given @smoke", async({page,eligibilityCriteria,applicantPersonalDetails})=> {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetailswithInvalidDOB();
        await page.getByText('Sorry, you cannot apply for a mortgage with us').isVisible();
    });
});
test.describe("Verify FirstName and LastName fields with Invalid Input", ()=> {
    test("Verify Validation check when lengthy firstname is given", async ({page,eligibilityCriteria,applicantPersonalDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.enterFirstName(data.maxCharacters.firstName);
        await page.getByText("Must be no more than 100 characters.").isVisible();
    });

    test("Verify First Name field when Numeric value is given @smoke", async({page,eligibilityCriteria,applicantPersonalDetails})=>{
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.enterFirstName(data.numericValue.firstName);
        await page.getByText("Invalid input, please check and try again.").isVisible();
    });

    test("Verify Validation check when lengthy lastname is given @regression", async ({page,eligibilityCriteria,applicantPersonalDetails}) => {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.enterLastName(data.maxCharacters.lastName);
        await page.getByText("Must be no more than 100 characters.").isVisible();
    });

    test("Verify Last Name field when Numeric value is given @smoke", async({page,eligibilityCriteria,applicantPersonalDetails})=>{
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.enterLastName(data.numericValue.lastName);
        await page.getByText("Invalid input, please check and try again.").isVisible();
    });
});

test.describe("Verify When Applicant's previous Name is selected", async() => {
    test("verify Validation text when applicant forename is not given @regression", async({page,eligibilityCriteria,applicantPersonalDetails})=>{
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.nameChanged.click();
        await applicantPersonalDetails.selectNext.click();
        await page.getByText("Please enter your previous forename(s).").isVisible();
        await page.getByText("Please enter your previous surname.").isVisible();
    });

    test("Verify When invalid output is given in the text fields for forename @regression", async({page,eligibilityCriteria,applicantPersonalDetails})=>{
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.nameChanged.click();
        await applicantPersonalDetails.enterForeName(data.numericValue.firstName);
        await page.getByText("Invalid input, please check and try again.").isVisible();
    });

    test("Verify When invalid output is given in the text fields for surname @smoke", async({page,eligibilityCriteria,applicantPersonalDetails})=>{
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.nameChanged.click();
        await applicantPersonalDetails.enterSurName(data.numericValue.firstName);
        await page.getByText("Invalid input, please check and try again.").isVisible();
    });

    test("Verify When more than 100char is given for forename @regression", async({page,eligibilityCriteria,applicantPersonalDetails})=>{
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.nameChanged.click();
        await applicantPersonalDetails.enterForeName(data.maxCharacters.firstName);
        await page.getByText("Must be no more than 100 characters.").isVisible();
    });

    test("Verify When more than 100char is given for surname @regression", async({page,eligibilityCriteria,applicantPersonalDetails})=>{
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.nameChanged.click();
        await applicantPersonalDetails.enterSurName(data.maxCharacters.firstName);
        await page.getByText("Must be no more than 100 characters.").isVisible();
    });

    test("Verify by giving the valid text for the applicant Previous text @regression", async({page,eligibilityCriteria,applicantPersonalDetails})=>{
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.nameChanged.click();
        await applicantPersonalDetails.enterForeName(data.valid.firstName);
        await applicantPersonalDetails.enterForeName(data.valid.lastName);
        await applicantPersonalDetails.deletePreviousName.click();
    });

});

test.describe("Verify when valid applicant personal details are given", () => {

    test("Verify when valid applicant Personal details are given", async({page,eligibilityCriteria,applicantPersonalDetails})=> {
        await page.goto(ENV.BASE_URL);
        await eligibilityCriteria.completeApplicantEligibilityCheck();
        await applicantPersonalDetails.completeApplicantPersonalDetails();
    });   
    
});

