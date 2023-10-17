import {test as baseTest} from "@playwright/test";
import EligibilityPage from "../pageobjects/eligibilityPage";
import EligibilityValidation from "../pageobjects/eligibilityValidation";
import PersonalDetails from "../pageobjects/personalDetails";
import AddressDetails from "../pageobjects/addressDetails";
import PropertyDetails from "../pageobjects/propertyDetails";
import IncomeDetails from "../pageobjects/incomeDetails";

const test = baseTest.extend<{
    eligibilityCriteria:EligibilityPage;
    eligibilityValidationMsg: EligibilityValidation;
    applicantPersonalDetails: PersonalDetails;
    applicantAddressDetails: AddressDetails;
    applicantPropertyDetails: PropertyDetails;
    applicantIncomeDetails: IncomeDetails;
}>({
    eligibilityCriteria: async({page},use)=>{
        await use(new EligibilityPage(page));
    },
    eligibilityValidationMsg: async({page},use)=>{
        await use(new EligibilityValidation(page));
    },
    applicantPersonalDetails: async({page},use)=>{
        await use(new PersonalDetails(page));
    },
    applicantAddressDetails: async({page},use)=>{
        await use(new AddressDetails(page));
    },
    applicantPropertyDetails: async({page},use)=>{
        await use(new PropertyDetails(page));
    },
    applicantIncomeDetails: async({page},use)=>{
        await use(new IncomeDetails(page));
    }
})
export default test;
export const expect = test.expect;


