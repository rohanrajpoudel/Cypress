class CourseDetailsPage{

    constructor(){
        this.title = '.css-10igdfz > .css-d36phq'
        this.courseTitle = 'h1.css-d36phq'
        this.buyNowButton = '.css-185xt85 > .css-1yrfiy8'
        this.pricePopUp = '#chakra-modal-3'
        this.wishlistButton = '.css-1symmn5'
        this.dropdown = '.chakra-select'
        this.option = 'option'
        this.price = '.css-auk3jj'
        this.continueBtn = '.css-i51og3 > .chakra-button' 

    }

    coursePageTitle(){
        const title = cy.get(this.title)
        return title
    }

    getCourseTitle(){
        const courseTitle = cy.get(this.courseTitle)
        return courseTitle
    }

    getBuyNowBtn(){
        const buyNowBtn = cy.get(this.buyNowButton)
        return buyNowBtn
    }

    getWishlistBtn(){
        const wishlistBtn = cy.get(this.wishlistButton)
        return wishlistBtn
    }

    getPricePopUp(){
        const pricePopUp = cy.get(this.pricePopUp)
        return pricePopUp
    }

    getDropdown(){
        const dropdown = cy.get(this.dropdown)
        return dropdown
    }

    getDropdownOption(){
        const option = cy.get(this.option)
        return option
    }

    getPrice(){
        const price = cy.get(this.price)
        return price
    }

    getContinueBtn(){
        const continueBtn = cy.get(this.continueBtn)
        return continueBtn
    }
}

export default CourseDetailsPage