class ForumPage{

    constructor(){
        this.pageVerify = ':nth-child(3) > .chakra-breadcrumb__link'
        this.courseTitle = '.css-gj2ina'
        this.forumContainer = '.css-cyin89'
        this.queryContainer = '.css-keracv'
        this.queryName = 'p.chakra-text.css-ykhys7'
        this.addCancelResponse = 'button.chakra-button.css-rdgal7'
        this.responseContainer = '.css-1wchpuk'
        this.responseField = '.txt-area'
        this.chooseImage = '.css-3ehjyz'
        this.uploadedImage = 'img.css-1bn144m'
        this.publishResponseBtn = 'button.chakra-button.css-11ya3lz'
        this.toastMessage = '.ct-toast'

    }

    getPageVerify(){
        const pageVerify = cy.get(this.pageVerify)
        return pageVerify
    }

    getCourseTitle(){
        const courseTitle = cy.get(this.courseTitle)
        return courseTitle
    }

    getForumContainer(){
        const forumContainer = cy.get(this.forumContainer)
        return forumContainer
    }

    getQueryContainer(){
        const queryContainer = cy.get(this.queryContainer)
        return queryContainer
    }

    getQueryName(){
        const queryName = cy.get(this.queryName)
        return queryName
    }

    getAddCancelResponse(){
        const addCancelResponse = cy.get(this.addCancelResponse)
        return addCancelResponse
    }

    getResponseContainer(){
        const responseContainer = cy.get(this.responseContainer)
        return responseContainer
    }

    getResponseField(){
        const responseField = cy.get(this.responseField)
        return responseField
    }

    getChooseImage(){
        const chooseImage = cy.get(this.chooseImage)
        return chooseImage
    }

    getUploadedImage(){
        const uploadedImage = cy.get(this.uploadedImage)
        return uploadedImage
    }

    getPublishResponseBtn(){
        const publishResponseBtn = cy.get(this.publishResponseBtn)
        return publishResponseBtn
    }

    getToastMessage(){
        const toastMessage = cy.get(this.toastMessage)
        return toastMessage
    }

}

 export default ForumPage 