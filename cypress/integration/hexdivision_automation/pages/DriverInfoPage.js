import CommonHelper from "../helpers/CommonHelper";

/**
 * Created by Armen Snkhchyan on Aug 2021
 */
class DriverInfoPage {

    driverFirstNameField = '.formWrapper > .formInput'

    maritalStatusField = '.formWrapper > .formSelect'

    bornDay = '.formWrapper > .inputDateSelects > .daySelect'

    bornMonth = '.formWrapper > .inputDateSelects > .monthSelect'

    bornYear = '.formWrapper > .inputDateSelects > .yearSelect'

    genderFemaleButton = ':nth-child(10) > .selectedBtn'

    firstLicencedAgeField = ':nth-child(3) > .formInput'

    typeOfLicenceField = ':nth-child(3) > .formSelect'

    selectLicenceMonth = ':nth-child(3) > .inputDateSelects > .monthSelect'

    monthWhenListedAsDriver = ':nth-child(2) > .monthSelect'

    yearWhenListedAsDriver = ':nth-child(2) > .yearSelect'

    notCurrentlyInsuredCheckBox = ':nth-child(6) > input'

    nextButton = '.bottom-next-btn'

    open(url) {
        cy.visit(url)
        return this
    }

    setDriverFirstName(name) {
        CommonHelper.clearAndType(cy.get(this.driverFirstNameField), name)
    }

    selectMaritalStatus(status) {
        cy.get(this.maritalStatusField).select(status)
    }

    selectBornDayMonthYear(day, month, year) {
        cy.get(this.bornDay).select(day)
        cy.get(this.bornMonth).select(month)
        cy.get(this.bornYear).select(year)
    }

    clickOnFemaleButton() {
        cy.get(this.genderFemaleButton).click()
    }

    setFirstLicencedAge(age) {
        CommonHelper.clearAndType(cy.get(this.firstLicencedAgeField), age)
    }

    selectTypeOfLicence(licence) {
        cy.get(this.typeOfLicenceField).select(licence)
    }

    selectTheLicenceMonth(month) {
        cy.get(this.selectLicenceMonth).select(month)
    }

    selectTheMonthWhenListedAsDriver(month) {
        cy.get(this.monthWhenListedAsDriver).select(month)
    }

    selectTheYearWhenListedAsDriver(year) {
        cy.get(this.yearWhenListedAsDriver).select(year)
    }

    clickOnNotCurrentlyInsuredCheckBox() {
        cy.get(this.notCurrentlyInsuredCheckBox).click()
    }

    clickOnNextButton() {
        cy.get(this.nextButton).click()
    }
}

export default DriverInfoPage