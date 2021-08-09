import VehicleInfoPage from "../pages/VehicleInfoPage";
import DriverInfoPage from "../pages/DriverInfoPage";
import DiscountInfoPage from "../pages/DiscountInfoPage";
import CommonHelper from "../helpers/CommonHelper";

/**
 * Created by Armen Snkhchyan on Aug 2021
 */
describe('End to End autotest', function () {

    const vehicleInfoPage = new VehicleInfoPage()
    const driverInfoPage = new DriverInfoPage()
    const discountInfoPage = new DiscountInfoPage()
    
    before(function() {
        CommonHelper.initialize()
    })

    it('End to End autotest', function () {
       vehicleInfoPage.open(this.commonData.common.baseURL)
       vehicleInfoPage.setPostalCode(this.commonData.common.postalCode)
       vehicleInfoPage.clickOnOKButton()
       vehicleInfoPage.selectYear('2003')
       vehicleInfoPage.selectManufacturer(this.commonData.manufacturer.Audi)
       vehicleInfoPage.selectModel(this.commonData.model.a8quattro)
       vehicleInfoPage.selectMonthWhenUserBuyTheCar(this.commonData.months.April)
       vehicleInfoPage.selectYearWhenUserBuyTheCar('2004')
       vehicleInfoPage.selectTheParkingLocation(this.commonData.parkingLocation.Street)
       vehicleInfoPage.selectTheDistanceDaily(this.commonData.distance.oneHnudredKM)
       vehicleInfoPage.selectTheDistanceYearly(this.commonData.distance.fifteenThousandKM)
       vehicleInfoPage.clickOnNextButton()

       cy.url().should('include', '/driver')

       driverInfoPage.setDriverFirstName(this.commonData.common.FirstName)
       driverInfoPage.selectMaritalStatus(this.commonData.maritalStatus.marriedCommonLaw)
       driverInfoPage.selectBornDayMonthYear('5', this.commonData.months.August, '1992')
       driverInfoPage.clickOnFemaleButton()
       driverInfoPage.setFirstLicencedAge('17')
       driverInfoPage.selectTypeOfLicence(this.commonData.typeOfLicence.G1Type)
       driverInfoPage.selectTheLicenceMonth(this.commonData.months.October)
       driverInfoPage.selectTheMonthWhenListedAsDriver(this.commonData.months.April)
       driverInfoPage.selectTheYearWhenListedAsDriver('2010')
       driverInfoPage.clickOnNotCurrentlyInsuredCheckBox()
       driverInfoPage.clickOnNextButton()

       cy.url().should('include', '/info')

       discountInfoPage.setLastName(this.commonData.common.LastName)
       discountInfoPage.setPhoneNumber(this.commonData.common.PhoneNumber)
       discountInfoPage.setEmail(this.commonData.common.Email)
       discountInfoPage.clickOnGetYourQuotesButton()

       cy.url().should('include', '/quote')

    })
})