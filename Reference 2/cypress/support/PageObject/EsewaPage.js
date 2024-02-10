class EsewaPage{

    constructor(){
        this.eSewaVerify = '.row > h4'
        this.eSewaId = ':nth-child(1) > .form-control'
        this.eSewaPassword = ':nth-child(2) > .form-control'
        this.eSewaLogin = '.btn-success'
        this.eSewaCancel = '.btn-default'
        this.insufficientBalance = '.ng-binding'
        this.cancelRequest = '.btn'
        this.warningMessage = '.warning-message'
        this.tokenField = '#token'
        this.continuePayment = '.btn-success'
        this.cancelPayment = '.btn-default'
        this.detailEsewaId = ':nth-child(1) > .ep-content > .form-control'
        this.detailName = ':nth-child(2) > .ep-content > .form-control'
        this.detailContact = ':nth-child(3) > .ep-content > .form-control'
        this.detailAddress = ':nth-child(4) > .ep-content > .form-control'
        this.detailEmail = ':nth-child(5) > .ep-content > .form-control'
        this.contPayBtn = '.btn-success'
        this.confirmPayment = '#ePayPayment'
    }

    getESewaVerify(){
        const eSewaVerify = cy.get(this.eSewaVerify)
        return eSewaVerify
    }

    getESewaId(value){
        const eSewaId = cy.get(this.eSewaId)
        eSewaId.type(value)
        return this
    }

    getESewaPassword(value){
        const eSewaPassword = cy.get(this.eSewaPassword)
        eSewaPassword.type(value)
        return this
    }

    getESewaLogin(){
        const eSewaLogin = cy.get(this.eSewaLogin)
        return eSewaLogin
    }

    getESewaCancel(){
        const eSewaCancel = cy.get(this.eSewaCancel)
        return eSewaCancel
    }

    getInsufficientBalance(){
        const insufficientBalance = cy.get(this.insufficientBalance)
        return insufficientBalance
    }

    getCancelRequest(){
        const cancelRequest = cy.get(this.cancelRequest)
        return cancelRequest
    }
 
    getWarningMessage(){
        const warningMessage = cy.get(this.warningMessage)
        return warningMessage
    }

    getTokenField(){
        const tokenField = cy.get(this.tokenField)
        return tokenField
    }

    getContinuePayment(){
        const continuePayment = cy.get(this.continuePayment)
        return continuePayment
    }

    getCancelPayment(){
        const cancelPayment = cy.get(this.cancelPayment)
        return cancelPayment
    }

    getDetailEsewaId(){
        const detailEsewaId = cy.get(this.detailEsewaId)
        return detailEsewaId
    }

    getDetailName(){
        const detailName = cy.get(this.detailName)
        return detailName
    }

    getDetailContact(){
        const detailContact = cy.get(this.detailContact)
        return detailContact
    }

    getDetailAddress(){
        const detailAddress = cy.get(this.detailAddress)
        return detailAddress
    }

    getDetailEmail(){
        const detailEmail = cy.get(this.detailEmail)
        return detailEmail
    }

    getContPayBtn(){
        const contPayBtn = cy.get(this.contPayBtn)
        return contPayBtn
    }

    getConfirmPayment(){
        const confirmPayment = cy.get(this.confirmPayment)
        return confirmPayment
    }
}

export default EsewaPage