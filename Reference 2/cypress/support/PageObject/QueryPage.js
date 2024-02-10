class QueryPage{

    constructor(){
        this.queryName = 'p.chakra-text.css-ykhys7'
        this.queryDltBtn = '.css-asvefe > svg'
        this.addCancelResponse = 'button.chakra-button.css-rdgal7'
        this.responseContainer = '.css-1wchpuk'
        this.responseField = '.txt-area'
        this.publishResponse = '.css-11ya3lz'
        this.selectImage = '.css-3ehjyz'
        this.uploadedImage = 'img.css-1bn144m'
        this.aResponse = '.css-16g34o9'
        this.responseReader = '.css-1hgneaz'
        this.toastMessage = '.ct-toast'
        this.noOfResponses = '.css-4g6ai3'
    }

    getQueryName(){
        return cy.get(this.queryName)
    }

    getQueryDltBtn(){
        return cy.get(this.queryDltBtn)
    }

    getAddCancelResponse(){
        return cy.get(this.addCancelResponse)
    }

    getResponseContainer(){
        return cy.get(this.responseContainer)
    }

    getResponseField(){
        return cy.get(this.responseField)
    }

    getPublishResponse(){
        return cy.get(this.publishResponse)
    }

    getSelectImage(){
        return cy.get(this.selectImage)
    }
    
    getAResponse(){
        return cy.get(this.aResponse)
    }

    getUploadedImage(){
        return cy.get(this.uploadedImage)
    }

    getResponseReader(){
        return cy.get(this.responseReader)
    }

    getToastMessage(){
        return cy.get(this.toastMessage)
    }

    getNoOfResponses(){
        return cy.get(this.noOfResponses)
    }

}

export default QueryPage