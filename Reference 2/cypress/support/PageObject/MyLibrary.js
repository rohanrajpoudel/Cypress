class MyLibrary{

    constructor(){
        this.pageTitle = ':nth-child(2) > .chakra-breadcrumb__link'
        this.courseContainer = '.css-w8uob2'
        this.courseName = 'h2.css-28pdcr'

    }

    getPageTitle(){
        const pageTitle = cy.get(this.pageTitle)
        return pageTitle
    }

    getCourseContainer(){
        const courseContainer = cy.get(this.courseContainer)
        return courseContainer
    }

    getCourseName(){
        const courseName = cy.get(this.courseName)
        return courseName
    }

}

export default MyLibrary