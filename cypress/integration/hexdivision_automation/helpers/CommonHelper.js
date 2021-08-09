/**
 * Created by Armen Snkhchyan on Aug 2021
 */
class CommonHelper {

    /**
     * Method clear field and input content 
     * @param  field - Web element
     * @param  content - input content
     */
     static clearAndType(field, content) {
        field.clear()
        field.type(content)
    }

    /**
     * Initialize json file
     */
    static initialize() {
        cy.fixture('commonData').then(function(commonData) {
            this.commonData = commonData
    })
  }
}

export default CommonHelper