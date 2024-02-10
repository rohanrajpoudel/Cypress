class ExplorePage{
    constructor(){
        this.title = 'h1.css-1my4u9n'
        this.gridContainer = '.css-1jh9w9h'
        this.courseDesc = '.css-bc2ghm'
        this.courseName = 'h2.css-28pdcr'
    }

    getPageTitle(){
        const title = cy.get(this.title)
        return title
    }

    getGridContainer(){
        const grid = cy.get(this.gridContainer)
        return grid
    }

    getCourseDesc(){
        const courseDescrip = cy.get(this.courseDesc)
        return courseDescrip
    }

    getCourseName(){
        const courseName = cy.get(this.courseName)
        return courseName
    }
}

export default ExplorePage