class CartPage{

    constructor(){
        this.cartTitle = '.css-i9gxme > .chakra-heading'
        this.priceSummary = '.css-ge5lnb > .chakra-heading'
        this.removeBtn = '.css-1gtanqs > .chakra-button'
        this.changePlanBtn = '.css-70qvj9 > p'
        this.checkoutBtn = 'button.css-7ven0'
        this.totalPrice = 'span.chakra-text.css-1izio3i'
        this.courseName = 'h2.css-28pdcr'
        this.pricePerCourse = '.css-3jpaym > :nth-child(1)'
        this.paymentPopUp = '#chakra-modal-3'
        this.eSewaMethod = '#esewa'
        this.khaltiMethod = '#khalti'
        this.actualCheckout = '.css-1orkoap > .chakra-button'
    }

    getCartTitle(){
        const cartTitle = cy.get(this.cartTitle)
        return cartTitle
    }

    getPriceSummary(){
        const priceSummary = cy.get(this.priceSummary)
        return priceSummary
    }

    getRemoveBtn(){
        const removeBtn = cy.get(this.removeBtn)
        return removeBtn
    }

    getChangePlanBtn(){
        const changePlanBtn = cy.get(this.changePlanBtn)
        return changePlanBtn
    }

    getCheckoutBtn(){
        const checkoutBtn = cy.get(this.checkoutBtn)
        return checkoutBtn
    }

    getTotalPrice(){
        const totalPrice = cy.get(this.totalPrice)
        return totalPrice
    }

    getCourseName(){
        const courseName = cy.get(this.courseName)
        return courseName
    }

    getPricePerCourse(){
        const pricePerCourse = cy.get(this.pricePerCourse)
        return pricePerCourse
    }

    getPaymentPopUp(){
        const paymentPopUp = cy.get(this.paymentPopUp)
        return paymentPopUp
    }

    getESewaMethod(){
        const eSewaMethod = cy.get(this.eSewaMethod)
        return eSewaMethod
    }

    getKhaltiMethod(){
        const khaltiMethod = cy.get(this.khaltiMethod)
        return khaltiMethod
    }

    getActualCheckout(){
        const actualCheckout = cy.get(this.actualCheckout)
        return actualCheckout
    }
}

export default CartPage