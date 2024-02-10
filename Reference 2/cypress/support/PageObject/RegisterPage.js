class RegisterPage{

    constructor(){
        this.title = 'h1.css-3rsbi8'
        this.googleButton = '#gsi_807773_312013-overlay'
        this.gmailContainer = 'div.k77Iifz'
        this.gmail = 'div.fFW7wc-ibnC6b-sM5MNbTAKBxb'
    }

    getTitle(){
        return cy.get(this.title)
    }

    getGoogleButton(){
        return cy.get(this.googleButton)
    }

    getGmailContainer(){
        return cy.get(this.gmailContainer)
    }

    getGmail(){
        return cy.get(this.gmail)
    }

}

export default RegisterPage;