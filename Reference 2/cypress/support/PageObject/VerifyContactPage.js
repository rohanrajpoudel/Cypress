class VerifyContactPage{

    constructor(){
        this.pageTitle = 'h1.css-tvkyhx'
        this.logoBtn = 'img[alt="Padhai Logo"]'
        this.contactText = 'span.css-1p8zgth'
        this.resendBtn = 'p.text-primary-2'
        this.toastMessage = '.ct-group'
        this.continueBtn = 'button.chakra-button.css-1pa32pw'
    }

    getPageTitle(){
        const title = cy.get(this.pageTitle)
        return title
    }

    getLogoBtn(){
        const logo = cy.get(this.logoBtn)
        return logo
    }

    getContactText(){
        const contact = cy.get(this.contactText)
        return contact
    }

    getResendBtn(){
        const resend = cy.get(this.resendBtn)
        return resend
    }

    getToastMessage(){
        const toast = cy.get(this.toastMessage)
        return toast
    }

    getContinueBtn(){
        const cont = cy.get(this.continueBtn)
        return cont
    }

}

export default VerifyContactPage