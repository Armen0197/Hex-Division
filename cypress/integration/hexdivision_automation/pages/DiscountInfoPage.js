import CommonHelper from "../helpers/CommonHelper";

/**
 * Created by Armen Snkhchyan on Aug 2021
 */
class DiscountInfoPage {

    lastNameField = '[placeholder="Your Last Name"]'

    phoneNumberField = '.react-tel-input > .formInput'

    emailField = '.form-input'

    getYourQuotesButton = ':nth-child(16) > .selectedBtn'

    setLastName(lastName) {
        CommonHelper.clearAndType(cy.get(this.lastNameField), lastName)
    }

    setPhoneNumber(phoneNumber) {
        CommonHelper.clearAndType(cy.get(this.phoneNumberField), phoneNumber)
    }

    setEmail(email) {
        CommonHelper.clearAndType(cy.get(this.emailField), email)
        cy.wait(2500)
    }

    clickOnGetYourQuotesButton() {
        cy.get(this.getYourQuotesButton).click()
    }
}

export default DiscountInfoPage