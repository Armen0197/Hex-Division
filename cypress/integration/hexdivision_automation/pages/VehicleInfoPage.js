import CommonHelper from "../helpers/CommonHelper";

/**
 * Created by Armen Snkhchyan on Aug 2021
 */
class VehicleInfoPage {

     postalCodeField = '.formInput'

     okButton = 'form > .selectedBtn'

     selectYearField = '[name="year"]'

     selectManufacturerField = '[name="make"]'

     selectModelField = '[name="model"]'

     monthWhenUserBuyCar = '.monthSelect'

     yearWhenUserBuyCar = '.yearSelect'

     selectParkingLocation = '[name="parking_location"]'

     selectDistanceDaily = '[name="distance_daily"]'

     selectDistanceYearly = '[name="distance_yearly"]'

     nextButton = '.bottom-next-btn'

    open(url) {
        cy.visit(url)
        return this
    }

    setPostalCode(postalCode) {
        CommonHelper.clearAndType(cy.get(this.postalCodeField), postalCode)
    }

    clickOnOKButton() {
        cy.get(this.okButton).click()
    }

    selectYear(year) {
        cy.get(this.selectYearField).select(year)
    }

    selectManufacturer(manufacturer) {
        cy.get(this.selectManufacturerField).select(manufacturer)
    }

    selectModel(model) {
        cy.get(this.selectModelField).select(model)
    }

    selectMonthWhenUserBuyTheCar(month) {
        cy.get(this.monthWhenUserBuyCar).select(month)
    }

    selectYearWhenUserBuyTheCar(year) {
        cy.get(this.yearWhenUserBuyCar).select(year)
    }

    selectTheParkingLocation(location) {
        cy.get(this.selectParkingLocation).select(location)
    }

    selectTheDistanceDaily(distanceDaily) {
        cy.get(this.selectDistanceDaily).select(distanceDaily)
    }

    selectTheDistanceYearly(distanceYearly) {
        cy.get(this.selectDistanceYearly).select(distanceYearly)
    }

    clickOnNextButton() {
        cy.get(this.nextButton).click()
    }
}

export default VehicleInfoPage