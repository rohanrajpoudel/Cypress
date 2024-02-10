import HomePage from "./HomePage"

class LoginPage extends HomePage{
    constructor(){
        super()
        this.title = 'span.css-65le5m'
        this.email = '//input[@name="email"]'
        this.password = '//input[@name="password"]'
        this.loginButton = '.chakra-button'
        
    }

    haveTitle(){
        const title = cy.get(this.title)
        return title
    }

    fillEmail(){
        const field1 = cy.xpath(this.email)
        return field1
    }
    fillPassword(){
        const field2 = cy.xpath(this.password)
        return field2
    }
    submitBtn(){
        const button = cy.get(this.loginButton)
        button.click()
    }

    existenceTest(){
        const error = cy.get('div.ct-text')
        return error
    }

    emailEmpty(){
        const noEmail = cy.get(':nth-child(1) > .css-15hpn1y > .chakra-text')
        return noEmail
    }

    passwordEmpty(){
        const noPassword = cy.get(':nth-child(2) > .css-15hpn1y > .chakra-text')
        return noPassword
    }

}

export default LoginPage;