class LogHomePage{

    constructor(){
        this.title = '.css-gxanvf > .chakra-heading'
        this.toastMessage = 'div.ct-text' 
        this.courses = '.css-8p37wn > a:nth-child(1)'
        this.library = '.css-8p37wn > a:nth-child(3)'
        this.verifyPopUp = '#chakra-modal-3'
        this.verifyTitle = 'h2.chakra-heading.css-o6ssiu'
        this.nameField = 'input#field-14'
        this.contactField = 'input#field-15'
        this.emailField = 'input#field-16'
        this.verifyContact = '.css-13kjd4r'
        this.skipPopUp = '.css-14j2ktk'
        this.avatarBtn = 'button#menu-button-13'
        this.profileBtn = 'button#menu-list-13-menuitem-8'
        this.logoutBtn = 'button#menu-list-7-menuitem-5'
    }

    pageTitle(){
        const title = cy.get(this.title)
        return title
    }

    getToastMessage(){
        const message = cy.get(this.toastMessage)
        return message
    }

    coursesBtn(){
        const explore = cy.get(this.courses)
        return explore
    }

    libraryBtn(){
        const library = cy.get(this.library)
        return library
    }

    getVerifyPopUp(){
        const verify = cy.get(this.verifyPopUp)
        return verify
    }

    getVerifyTitle(){
        const verify = cy.get(this.verifyTitle)
        return verify
    }

    getNameField(){
        const name = cy.get(this.nameField)
        return name
    }

    getContactField(){
        const contact = cy.get(this.contactField)
        return contact
    }

    getEmailField(){
        const email = cy.get(this.emailField)
        return email
    }

    getVerifyContact(){
        const verify = cy.get(this.verifyContact)
        return verify
    }

    getSkipBtn(){
        const skip = cy.get(this.skipPopUp)
        return skip
    }

    getAvatarBtn(){
        const avatar = cy.get(this.avatarBtn)
        return avatar
    }

    getProfileBtn(){
        const profile = cy.get(this.profileBtn)
        return profile
    }

    getLogoutBtn(){
        const logout = cy.get(this.logoutBtn)
        return logout
    }


}

export default LogHomePage