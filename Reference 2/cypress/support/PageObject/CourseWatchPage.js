class CourseWatchPage{

    constructor() {
        this.pageVerify = ':nth-child(2) > .chakra-breadcrumb__link'
        this.watchCourse = ':nth-child(3) > .chakra-breadcrumb__link'
        this.tableOfContent = '.css-wufdrj > .chakra-heading'
        this.forumBtn = 'button.css-vd89gb'
        this.noteBtn = '#tabs-14--tab-2'
        this.queryField = '.txt-area'
        this.includeChapterPopUp = 'section.css-2n2d54'
        this.includeChapterNoBtn = '.css-10t9nh0 > :nth-child(1)'
        this.includeChapterBtn = '.css-10t9nh0 > :nth-child(2)'
        this.queryPublishBtn = '.css-5bygcd > .chakra-button'
        this.toastMessage = '.ct-toast'
        this.chooseImage = '.css-3ehjyz'
        this.uploadedImage = 'img.css-1bn144m'
        this.removeImage = '.css-3fim88 > svg:nth-child(1)'
        this.changeImage = 'label.css-3ehjyz'
        this.viewAllQueries = '.css-yy99bc'
    }

    getPageVerify() {
        const pageVerify = cy.get(this.pageVerify)
        return pageVerify
    }

    getWatchCourse() {
        const watchCourse = cy.get(this.watchCourse)
        return watchCourse
    }

    getTableOfContent() {
        const tableOfContent = cy.get(this.tableOfContent)
        return tableOfContent
    }

    getForumBtn() {
        const forumBtn = cy.get(this.forumBtn)
        return forumBtn
    }

    getNoteBtn() {
        const noteBtn = cy.get(this.noteBtn)
        return noteBtn
    }

    getQueryField() {
        const queryField = cy.get(this.queryField)
        return queryField
    }

    getQueryPublishBtn() {
        const queryPublishBtn = cy.get(this.queryPublishBtn)
        return queryPublishBtn
    }

    getIncludeChapterPopUp() {
        const includeChapterPopUp = cy.get(this.includeChapterPopUp)
        return includeChapterPopUp
    }

    getIncludeChapterNoBtn() {
        const includeChapterNoBtn = cy.get(this.includeChapterNoBtn)
        return includeChapterNoBtn
    }

    getIncludeChapterBtn() {
        const includeChapterBtn = cy.get(this.includeChapterBtn)
        return includeChapterBtn
    }

    getToastMessage() {
        const toastMessage = cy.get(this.toastMessage)
        return toastMessage
    }

    getChooseImage() {
        const chooseImage = cy.get(this.chooseImage)
        return chooseImage
    }

    getUploadedImage() {
        const uploadedImage = cy.get(this.uploadedImage)
        return uploadedImage
    }

    getRemoveImage() {
        const removeImage = cy.get(this.removeImage)
        return removeImage
    }

    getChangeImage() {
        const changeImage = cy.get(this.changeImage)
        return changeImage
    }

    getViewAllQueriesBtn() {
        const viewAllQueries = cy.get(this.viewAllQueries)
        return viewAllQueries
    }

}

export default CourseWatchPage