import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

const LoginPage = require('../../../../support/PageObject/LoginPage')
const HomePage = require('../../../../support/PageObject/HomePage')
const LogHomePage = require('../../../../support/PageObject/LogHomePage')
const MyLibrary = require('../../../../support/PageObject/MyLibrary')
const CourseWatchPage = require('../../../../support/PageObject/CourseWatchPage')
const ForumPage = require('../../../../support/PageObject/ForumPage')
const QueryPage = require('../../../../support/PageObject/QueryPage')

const homePage = new HomePage()
const loginPage = new LoginPage()
const logHomePage = new LogHomePage()
const myLibrary = new MyLibrary()
const courseWatchPage = new CourseWatchPage()
const forumPage = new ForumPage()
const queryPage = new QueryPage()

let count = 0
let queryName = ""
let qName = ""

Given('user opens the meropadhai website', () => {
    cy.visit(Cypress.env('url'))
    homePage.getPageTitle().should('have.text', 'Learn all courses at home.')
})

When('user goes to login page and logs in with email and password', (email, password) => {
    homePage.getLoginButton().click()
    cy.url().should('include', '/auth/signin')
    loginPage.haveTitle().should('have.text', 'Sign in to continue')
    loginPage.fillEmail().type(Cypress.env('emailForumPage'))
    loginPage.fillPassword().type(Cypress.env('password'))
    loginPage.submitBtn()
})

When('user clicks on the My Library button', () => {
    logHomePage.getVerifyPopUp().should('exist')
    logHomePage.getSkipBtn().should('exist').contains('Skip').click()
    logHomePage.libraryBtn().click()
    cy.url().should('include', '/my-library')
})

When('user selects the {string} and clicks it', (course) => {
    myLibrary.getCourseContainer().find('.css-bc2ghm').each(($el, index, $list) => {
        const courseName = $el.find('h2.css-28pdcr').text()
        if (courseName.includes(course)) {
            cy.wrap($el).find('h2.css-28pdcr').click({force: true})
        }
    })
    courseWatchPage.getPageVerify().should('exist').and('have.text', course)
    courseWatchPage.getWatchCourse().should('exist').contains('Watch')
    courseWatchPage.getTableOfContent().should('exist').contains('Table of Content')
})

When('user clicks on Forum module', () => {
    courseWatchPage.getForumBtn().should('exist').contains('Forum')
    courseWatchPage.getForumBtn().click()
})

When('user clicks on Publish button', () => {
    courseWatchPage.getQueryPublishBtn().should('exist').contains('Publish')
    courseWatchPage.getQueryPublishBtn().click()
})

When('user clicks on Views all queries', () => {
    courseWatchPage.getViewAllQueriesBtn().should('exist').contains('View All Queries')
    courseWatchPage.getViewAllQueriesBtn().click()
})

When('user writes the query in the text box and clicks on Views all queries', () => {
    courseWatchPage.getQueryField().should('exist').type('This is a test query')
    courseWatchPage.getViewAllQueriesBtn().should('exist').contains('View All Queries')
    courseWatchPage.getViewAllQueriesBtn().click()
})

When('user writes the query in the text box and clicks on Publish button', () => {
    courseWatchPage.getQueryField().should('exist').type('This is a test query')
    courseWatchPage.getQueryPublishBtn().should('exist').contains('Publish')
    courseWatchPage.getQueryPublishBtn().click()
})

When('user writes the query, add an image and clicks on Publish button', () => {
    courseWatchPage.getQueryField().should('exist').type('This is a test query')
    courseWatchPage.getChooseImage().should('exist').selectFile('Frame 1000002049.png')
    courseWatchPage.getUploadedImage().should('exist')
    courseWatchPage.getQueryPublishBtn().should('exist').contains('Publish')
    courseWatchPage.getQueryPublishBtn().click()
})

When('user writes the query, add an image', () => {
    courseWatchPage.getQueryField().should('exist').type('This is a test query')
    courseWatchPage.getChooseImage().should('exist').selectFile('Frame 1000002049.png')
    courseWatchPage.getUploadedImage().should('exist')
})

When('user removes an image and clicks on Publish button', () => {
    courseWatchPage.getRemoveImage().should('exist').click()
    courseWatchPage.getQueryPublishBtn().should('exist').contains('Publish')
    courseWatchPage.getQueryPublishBtn().click()
})

When('user changes an image and clicks on Publish button', () => {
    courseWatchPage.getChangeImage().should('exist').click()
    courseWatchPage.getChooseImage().should('exist').selectFile('Frame 1000002049.png')
    courseWatchPage.getUploadedImage().should('exist')
    courseWatchPage.getQueryPublishBtn().should('exist').contains('Publish')
    courseWatchPage.getQueryPublishBtn().click()
})

When('user selects an image and clicks on Publish button', () => {
    courseWatchPage.getChooseImage().should('exist').selectFile('Frame 1000002049.png')
    courseWatchPage.getUploadedImage().should('exist')
    courseWatchPage.getQueryPublishBtn().should('exist').contains('Publish').click()
})

When('user selects an image and clicks on cross button to remove it', () => {
    courseWatchPage.getChooseImage().should('exist').selectFile('Frame 1000002049.png')
    courseWatchPage.getUploadedImage().should('exist')
    courseWatchPage.getRemoveImage().should('exist').click()
})

When('user selects an image and clicks on change button select another image', () => {
    courseWatchPage.getChooseImage().should('exist').selectFile('Frame 1000002049.png')
    courseWatchPage.getUploadedImage().should('exist')
    courseWatchPage.getChangeImage().should('exist').click()
    courseWatchPage.getChooseImage().should('exist').selectFile('Frame 1000002048.png')
    courseWatchPage.getUploadedImage().should('exist')
})

When('user selects an image and clicks on Views all queries', () => {
    courseWatchPage.getChooseImage().should('exist').selectFile('Frame 1000002049.png')
    courseWatchPage.getUploadedImage().should('exist')
    courseWatchPage.getViewAllQueriesBtn().should('exist').contains('View All Queries').click()
})

When('user clicks on Add Response button of second query', () => {
    forumPage.getForumContainer()
        .find('.css-keracv')
        .eq(1)
        .find('button.chakra-button.css-rdgal7')
        .contains('Add Response')
        .click({force: true})
})

When('user clicks on Add Response button of second query and clicks Publish button', () => {
    forumPage.getForumContainer()
        .find('.css-keracv')
        .eq(1)
        .find('button.chakra-button.css-rdgal7')
        .contains('Add Response')
        .click({force: true})
    forumPage.getPublishResponseBtn().should('exist').contains('Publish').click({force: true})
})

When('user clicks on Add Response button of second query and selects an image and clicks Publish button', () => {
    forumPage.getForumContainer()
        .find('.css-keracv')
        .eq(1)
        .find('button.chakra-button.css-rdgal7')
        .contains('Add Response')
        .click({force: true})
    forumPage.getChooseImage().should('exist').selectFile('Frame 1000002049.png', {force: true})
    forumPage.getUploadedImage().should('exist')
    forumPage.getPublishResponseBtn().should('exist').contains('Publish').click({force: true})
})

When('user clicks on Add Response button of second query and writes response and clicks Publish button', () => {
    forumPage.getForumContainer()
        .find('.css-keracv')
        .eq(1)
        .find('button.chakra-button.css-rdgal7')
        .contains('Add Response')
        .click({force: true})
    forumPage.getResponseField().should('exist').type('This is a test response', {force: true})
    forumPage.getPublishResponseBtn().should('exist').contains('Publish').click({force: true})
    forumPage.getForumContainer()
        .find('.css-keracv')
        .eq(1)
        .find('.txt-area')
        .should('not.exist')
})

When('user clicks on Add Response button of second query and writes response, selects an image and clicks Publish button', () => {
    forumPage.getForumContainer()
        .find('.css-keracv')
        .eq(1)
        .find('button.chakra-button.css-rdgal7')
        .contains('Add Response')
        .click({force: true})
    forumPage.getResponseField().should('exist').type('This is a test response', {force: true})
    forumPage.getChooseImage().should('exist').selectFile('Frame 1000002049.png',{force: true})
    forumPage.getUploadedImage().should('exist')
    forumPage.getPublishResponseBtn().should('exist').contains('Publish').click({force: true})
    forumPage.getForumContainer()
        .find('.css-keracv')
        .eq(1)
        .find('.txt-area')
        .should('not.exist')
})

When('user clicks on Add Response button of second query and clicks Cancel Response button', () => {
    forumPage.getForumContainer()
        .find('.css-keracv')
        .eq(1)
        .find('button.chakra-button.css-rdgal7')
        .contains('Add Response')
        .click({force: true})
    forumPage.getResponseContainer().should('exist')
    forumPage.getResponseField().should('exist')
    forumPage.getAddCancelResponse().should('exist').contains('Cancel Response').click({force: true})
})

When('user clicks on Add Response button of second query and writes response, clicks Cancel Response button and again clicks Add Response button', () => {
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('button.chakra-button.css-rdgal7')
        .contains('Add Response')
        .click({force: true})
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.css-1wchpuk')
        .should('exist')
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.txt-area')
        .should('exist')
        .type('This is a test response', {force: true})
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('button.chakra-button.css-rdgal7')
        .contains('Cancel Response', )
        .click({force: true})
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('button.chakra-button.css-rdgal7')
        .contains('Add Response')
        .click({force: true})
})

When('user clicks on Add Response button of second query and selects an image, clicks Cancel Response button and again clicks Add Response button', () => {
    
    const forumName = forumPage.getForumContainer().find('.css-keracv').eq(1)
    
    forumName.find('button.chakra-button.css-rdgal7').contains('Add Response').click({force: true})
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.css-1wchpuk')
        .should('exist')
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.css-3ehjyz')
        .should('exist')
        .selectFile('Frame 1000002049.png', {force: true})
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('img.css-1bn144m')
        .should('exist')
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('button.chakra-button.css-rdgal7')
        .contains('Cancel Response')
        .click({force: true})
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('button.chakra-button.css-rdgal7')
        .contains('Add Response')
        .click({force: true})
})

When('user clicks on Add Response button of second query and writes response, selects an image, clicks Cancel Response button and again clicks Add Response button', () => {
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('button.chakra-button.css-rdgal7')
        .contains('Add Response')
        .click({force: true})
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.css-1wchpuk')
        .should('exist')
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.txt-area')
        .should('exist')
        .type('This is a test response', {force: true})
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.css-3ehjyz')
        .should('exist')
        .selectFile('Frame 1000002049.png', {force: true})
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('img.css-1bn144m')
        .should('exist')
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('button.chakra-button.css-rdgal7')
        .contains('Cancel Response')
        .click({force: true})
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('button.chakra-button.css-rdgal7')
        .contains('Add Response')
        .click({force: true})
})

When('user clicks first query and clicks Add Response button', () => {
    forumPage.getForumContainer().find('p.chakra-text.css-ykhys7').eq(0).then(($el) => {
        queryName = $el.text()
    })
    forumPage.getForumContainer()
        .find('div.css-keracv')
        .eq(0)
        .find('p.chakra-text.css-ykhys7')
        .click({force: true})
    cy.wait(2500)
    queryPage.getQueryName().then(($el) => {
        qName = $el.text()
        expect(queryName).to.equal(qName)
    })
    // cy.url().should('contain', '?courseId=6384901e721f354c584f0181')
    queryPage.getAddCancelResponse().should('exist').contains('Add Response').click({force: true})
})

When('user clicks first query, clicks Add Response button and clicks Cancel Response button', () => {
    forumPage.getForumContainer().find('p.chakra-text.css-ykhys7').eq(0).then(($el) => {
        queryName = $el.text()
    })
    forumPage.getForumContainer()
        .find('div.css-keracv')
        .eq(0)
        .find('p.chakra-text.css-ykhys7')
        .click({force: true})
    cy.wait(2500)
    queryPage.getQueryName().then(($el) => {
        qName = $el.text()
        expect(queryName).to.equal(qName)
    })
    // cy.url().should('contain', '?courseId=6384901e721f354c584f0181')
    queryPage.getAddCancelResponse().should('exist').contains('Add Response').click({force: true})
    queryPage.getAddCancelResponse().should('exist').contains('Cancel Response').click({force: true})
})

When('user clicks first query, clicks Add Response button, writes response and clicks Cancel Response button', () => {
    forumPage.getForumContainer().find('p.chakra-text.css-ykhys7').eq(0).then(($el) => {
        queryName = $el.text()
    })
    forumPage.getForumContainer()
        .find('div.css-keracv')
        .eq(0)
        .find('p.chakra-text.css-ykhys7')
        .click({force: true})
    cy.wait(2500)
    queryPage.getQueryName().then(($el) => {
        qName = $el.text()
        expect(queryName).to.equal(qName)
    })
    // cy.url().should('contain', '?courseId=6384901e721f354c584f0181')
    queryPage.getAddCancelResponse()
        .should('exist')
        .contains('Add Response')
        .click({force: true})
    queryPage.getResponseField()
    .should('exist')
    .click({force: true})
    .type('This is a test response')
    queryPage.getAddCancelResponse().should('exist').contains('Cancel Response').click({force: true})
})

When('user clicks first query, clicks Add Response button, selects an image and clicks Cancel Response button', () => {
    forumPage.getForumContainer().find('p.chakra-text.css-ykhys7').eq(0).then(($el) => {
        queryName = $el.text()
    })
    forumPage.getForumContainer()
        .find('div.css-keracv')
        .eq(0)
        .find('p.chakra-text.css-ykhys7')
        .click({force: true})
    cy.wait(2500)
    queryPage.getQueryName().then(($el) => {
        qName = $el.text()
        expect(queryName).to.equal(qName)
    })
    // cy.url().should('contain', '?courseId=6384901e721f354c584f0181')
    queryPage.getAddCancelResponse()
        .should('exist')
        .contains('Add Response')
        .click({force: true})
    queryPage.getSelectImage()
        .should('exist')
        .selectFile('Frame 1000002049.png', {force: true})
    queryPage.getUploadedImage()
        .should('exist')
    queryPage.getAddCancelResponse()
        .should('exist')
        .contains('Cancel Response')
        .click({force: true})
})

When('user clicks first query, clicks Add Response button, writes response, selects an image and clicks Cancel Response button', () => {
    forumPage.getForumContainer().find('p.chakra-text.css-ykhys7').eq(0).then(($el) => {
        queryName = $el.text()
    })
    forumPage.getForumContainer()
        .find('div.css-keracv')
        .eq(0)
        .find('p.chakra-text.css-ykhys7')
        .click({force: true})
    cy.wait(2500)
    queryPage.getQueryName().then(($el) => {
        qName = $el.text()
        expect(queryName).to.equal(qName)
    })
    // cy.url().should('contain', '?courseId=6384901e721f354c584f0181')
    queryPage.getAddCancelResponse()
        .should('exist')
        .contains('Add Response')
        .click({force: true})
    queryPage.getResponseField()
        .should('exist')
        .click({force: true})
        .type('This is a test response')
    queryPage.getSelectImage()
        .should('exist')
        .selectFile('Frame 1000002049.png', {force: true})
    queryPage.getUploadedImage()
        .should('exist')
    queryPage.getAddCancelResponse()
        .should('exist')
        .contains('Cancel Response')
        .click({force: true})
})

When('user clicks first query, clicks Add Response button, selects an image and clicks Publish button', () => {
    forumPage.getForumContainer().find('p.chakra-text.css-ykhys7').eq(0).then(($el) => {
        queryName = $el.text()
    })
    forumPage.getForumContainer()
        .find('div.css-keracv')
        .eq(0)
        .find('p.chakra-text.css-ykhys7')
        .click({force: true})
    cy.wait(2500)
    queryPage.getQueryName().then(($el) => {
        qName = $el.text()
        expect(queryName).to.equal(qName)
    })
    // cy.url().should('contain', '?courseId=6384901e721f354c584f0181')
    queryPage.getAddCancelResponse()
        .should('exist')
        .contains('Add Response')
        .click({force: true})
    queryPage.getSelectImage()
        .should('exist')
        .selectFile('Frame 1000002049.png', {force: true})
    queryPage.getUploadedImage()
        .should('exist')
    queryPage.getPublishResponse()
        .should('exist')
        .contains('Publish')
        .click({force: true})
})

When('user clicks first query, clicks Add Response button, writes response and clicks Publish button', () => {
    forumPage.getForumContainer().find('p.chakra-text.css-ykhys7').eq(0).then(($el) => {
        queryName = $el.text()
    })
    forumPage.getForumContainer()
        .find('div.css-keracv')
        .eq(0)
        .find('p.chakra-text.css-ykhys7')
        .click({force: true})
    cy.wait(2500)
    queryPage.getQueryName().then(($el) => {
        qName = $el.text()
        expect(queryName).to.equal(qName)
    })
    // cy.url().should('contain', '?courseId=6384901e721f354c584f0181')
    queryPage.getAddCancelResponse()
        .should('exist')
        .contains('Add Response')
        .click({force: true})
    queryPage.getResponseField()
    .should('exist')
    .click({force: true})
    .type('This is a test response')
    queryPage.getPublishResponse().should('exist').contains('Publish').click({force: true})
})

When('user clicks first query, clicks Add Response button, writes response, selects an image and clicks Publish button', () => {
    forumPage.getForumContainer().find('p.chakra-text.css-ykhys7').eq(0).then(($el) => {
        queryName = $el.text()
    })
    forumPage.getForumContainer()
        .find('div.css-keracv')
        .eq(0)
        .find('p.chakra-text.css-ykhys7')
        .click({force: true})
    cy.wait(2500)
    queryPage.getQueryName().then(($el) => {
        qName = $el.text()
        expect(queryName).to.equal(qName)
    })
    // cy.url().should('contain', '?courseId=6384901e721f354c584f0181')
    queryPage.getAddCancelResponse()
        .should('exist')
        .contains('Add Response')
        .click({force: true})
    queryPage.getResponseField()
        .should('exist')
        .click({force: true})
        .type('This is a test response')
    queryPage.getSelectImage()
        .should('exist')
        .selectFile('Frame 1000002049.png', {force: true})
    queryPage.getUploadedImage()
        .should('exist')
    queryPage.getPublishResponse()
        .should('exist')
        .contains('Publish')
        .click({force: true})
})

Then('user should see the negative toast message', () => {
    courseWatchPage.getToastMessage().should('exist').contains('Please fill required field.')
})

Then('user sees all the queries associated with {string}', (course) => {
    forumPage.getPageVerify().should('exist').and('have.text', 'Forum')
    forumPage.getCourseTitle().should('exist').and('have.text', course)

    // counts the number of queries
    forumPage.getForumContainer().find('.css-keracv').each(($el, index, $list) => {
        const queryName = $el.find('.css-pm7iwl > .chakra-text').text()
            count++
    }).then(() => {
        cy.log(count)   
    })
    count = 0
})

Then('user goes back and finds query textarea is cleared', () => {
    cy.wait(5000)
    cy.go('back')
    courseWatchPage.getQueryField().should('exist').and('have.value', '')
})

Then('user goes back and finds selected image is cleared', () => {
    cy.wait(5000)
    cy.go('back')
    courseWatchPage.getUploadedImage().should('not.exist')
})

Then('user should see the image is removed', () => {
    courseWatchPage.getQueryField().should('exist')
    courseWatchPage.getUploadedImage().should('not.exist')
})

Then('user should see the image is changed', () => {
    courseWatchPage.getQueryField().should('exist')
    courseWatchPage.getUploadedImage().should('exist')
})

Then('user clicks first query and sees the query', () => {
    let queryName, qName
    forumPage.getForumContainer().find('p.chakra-text.css-ykhys7').eq(0).then(($el) => {
        queryName = $el.text()
    })
    forumPage.getForumContainer()
        .find('div.css-keracv')
        .eq(0)
        .find('p.chakra-text.css-ykhys7')
        .click({force: true})
    cy.wait(2500)
    queryPage.getQueryName().then(($el) => {
        qName = $el.text()
        expect(queryName).to.equal(qName)
    })
    // // cy.url().should('contain', '?courseId=6384901e721f354c584f0181')
})

Then('user includes chapter name and should see the positive toast message', () => {
    courseWatchPage.getIncludeChapterPopUp().should('exist')
    courseWatchPage.getIncludeChapterBtn().contains('Yes').click()
    courseWatchPage.getToastMessage().should('exist').and('have.text','Your question has been sent to be reviewed')
})

Then('user does not include chapter name and should see the positive toast message', () => {
    courseWatchPage.getIncludeChapterPopUp().should('exist')
    courseWatchPage.getIncludeChapterNoBtn().contains('No').click()
    courseWatchPage.getToastMessage().should('exist').and('have.text','Your question has been sent to be reviewed')
})

Then('the textarea for Response is opened', () => {
    forumPage.getResponseContainer().should('exist')
    forumPage.getResponseField().should('exist')
})

Then('user should see the negative toast message on Forum Page', () => {
    forumPage.getToastMessage().should('exist').contains('Please fill required field.')
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.txt-area')
        .should('exist')
})

Then('user should see the positive toast message on Forum Page', () => {
    forumPage.getToastMessage().should('exist').contains('Your answer has been sent to be reviewed.')
})

Then('the textarea for Response is closed', () => {
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.css-1wchpuk')
        .should('not.exist')
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.txt-area')
        .should('not.exist')
})

Then('the textarea for Response is opened and the written response is cleared', () => {
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.css-1wchpuk')
        .should('exist')
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.txt-area')
        .should('exist')
        .and('have.value', '')
})

Then('the textarea for Response is opened and the selected image is removed', () => {
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.css-1wchpuk')
        .should('exist')
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.txt-area')
        .should('exist')
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('img.css-1bn144m')
        .should('not.exist')
})

Then('the textarea for Response is opened and the written response and selected image is removed', () => {
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.css-1wchpuk')
        .should('exist')
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('.txt-area')
        .should('exist')
        .and('have.value', '')
    forumPage.getForumContainer().find('.css-keracv').eq(1)
        .find('img.css-1bn144m')
        .should('not.exist')
})

Then('the textarea for Response is opened in Query Page', () => {
    queryPage.getResponseContainer().should('exist')
    queryPage.getResponseField().should('exist')
})

Then('the textarea for Response is closed in Query Page', () => {
    queryPage.getResponseContainer().should('not.exist')
    queryPage.getResponseField().should('not.exist')
})

Then('user clicks Add Response button and the written response is removed', () => {
    queryPage.getAddCancelResponse().should('exist').contains('Add Response').click({force: true})
    queryPage.getResponseField().should('exist').and('have.value', '')
})

Then('user clicks Add Response button and the selected image is removed', () => {
    queryPage.getAddCancelResponse().should('exist').contains('Add Response').click({force: true})
    queryPage.getResponseField().should('exist')
    queryPage.getUploadedImage().should('not.exist')
})

Then('user clicks Add Response button and the written response and selected image is removed', () => {
    queryPage.getAddCancelResponse().should('exist').contains('Add Response').click({force: true})
    queryPage.getResponseField().should('exist').and('have.value', '')
    queryPage.getUploadedImage().should('not.exist')
})

Then('negative toast message should be appeared in Query Page', () => {
    queryPage.getToastMessage().should('exist').contains('Please fill required field.')
    queryPage.getResponseContainer().should('exist')
    queryPage.getResponseField().should('exist')
})

Then('positive toast message should be appeared in Query Page', () => {
    queryPage.getToastMessage().should('exist').contains('Your answer has been sent to be reviewed.')
    queryPage.getResponseContainer().should('not.exist')
    queryPage.getResponseField().should('not.exist')
})

Then('user clicks first query and user sees all the responses associated with the query', () => {
    let queryName, qName
    forumPage.getForumContainer().find('p.chakra-text.css-ykhys7').eq(0).then(($el) => {
        queryName = $el.text()
    })
    forumPage.getForumContainer()
        .find('div.css-keracv')
        .eq(0)
        .find('p.chakra-text.css-ykhys7')
        .click({force: true})
    cy.wait(2500)
    queryPage.getQueryName().then(($el) => {
        qName = $el.text()
        expect(queryName).to.equal(qName)
    })
    // cy.url().should('contain', '?courseId=6384901e721f354c584f0181')
    queryPage.getNoOfResponses().then(($el) => {
        const respNum = $el.text()
        const Num = Number(respNum)
        cy.log(Num)
        if (Num == 0) {
            queryPage.getResponseReader().should('exist').contains('No responses yet')
            queryPage.getAResponse().should('not.exist')
        } else {
            queryPage.getResponseReader().should('exist').contains('No more responses to load')
        }})
})