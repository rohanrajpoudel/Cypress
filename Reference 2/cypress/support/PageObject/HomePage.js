class HomePage{
    constructor(){
        this.title = '.container > p'
        this.exploreButton = '.css-8p37wn > [href="/explore"]'
        this.aboutUsButton = '.css-8p37wn > [href="/about-us"]'
        this.contactButton = '.css-8p37wn > [href="/contact"]'
        this.loginButton = '[href="/auth/signin"] > .chakra-button'
        this.registerButton = 'button.chakra-button.css-130q45a'
    }

    getPageTitle(){
    
        return cy.get(this.title)
    }

    getExploreButton(){
        return cy.get(this.exploreButton)
    }

    getAboutUsButton(){
        return cy.get(this.aboutUsButton)
    }

    getContactButton(){
        return cy.get(this.contactButton)
    }

    getLoginButton(){
        return cy.get(this.loginButton)
    }

    getRegisterButton(){
        return cy.get(this.registerButton)
    }
}

export default HomePage;