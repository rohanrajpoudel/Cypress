/// <reference types="cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

const LoginPage = require('../../../../support/PageObject/LoginPage')
const HomePage = require('../../../../support/PageObject/HomePage')
const LogHomePage = require('../../../../support/PageObject/LogHomePage')
const ExplorePage = require('../../../../support/PageObject/ExplorePage')
const CourseDetailsPage = require('../../../../support/PageObject/CourseDetailsPage')
const CartPage = require('../../../../support/PageObject/CartPage')
const EsewaPage = require('../../../../support/PageObject/EsewaPage')
const MyLibrary = require('../../../../support/PageObject/MyLibrary')


const homePage = new HomePage()
const loginPage = new LoginPage()
const logHomePage = new LogHomePage()
const explorePage = new ExplorePage()
const courseDetailsPage = new CourseDetailsPage()
const cartPage = new CartPage()
const eSewaPage = new EsewaPage()
const myLibrary = new MyLibrary()


Given('user opens the meropadhai website', () => {
    cy.visit(Cypress.env('url'))
    homePage.getPageTitle().should('have.text', 'Learn all courses at home.')
})

When('user goes to login page and logs in with email and password', (email, password) => {
    homePage.getLoginButton().click()
    cy.url().should('include', '/auth/signin')
    loginPage.getPageTitle().should('have.text', 'Sign in to continue')
    loginPage.fillEmail().type(Cypress.env('emailBuyCoursePage')) 
    loginPage.fillPassword().type(Cypress.env('password'))
    loginPage.submitBtn()
    logHomePage.pageTitle().should('have.text', 'On your markGet setLearn!')
})

When('user clicks on the explore button', () => {
    logHomePage.getVerifyPopUp().should('exist')
    logHomePage.getSkipBtn().should('exist').contains('Skip').click()
    logHomePage.coursesBtn().click()
    cy.url().should('include', '/courses')
    explorePage.getPageTitle().should('have.text', 'Explore courses, topics and skills')
})

When('user selects the course {string}', (courseName) => {
    explorePage.getGridContainer().find('.css-bc2ghm').each(($el, index, $list) => {

        const courseNaam = $el.find('h2.css-28pdcr').text()
        
        if (courseNaam.includes(courseName)) {
             // Scrolls 'footer' into view
            cy.wrap($el).find('.css-6y3qij').click({force: true})
        }
    })
    courseDetailsPage.getCourseTitle().should('exist').contains(courseName)
})

When('user clicks on the buy now button', () => {
    let buyNowButton = courseDetailsPage.getBuyNowBtn()
    if(buyNowButton.contains('Buy Now')){
        buyNowButton.click({force: true})
        cy.log("Choose Course Pricing popup is displayed")
        courseDetailsPage.getPricePopUp().should('exist')
    }
})

When('user choses course pricing for {string} and continues', (month) => {
    if(courseDetailsPage.getDropdown().select(month)){
        courseDetailsPage.getPrice().should('exist').and('have.text', 'Rs. 199')
    }
    if(courseDetailsPage.getContinueBtn().contains('Rs.199')){
        cy.log("Continue button is enabled")
        courseDetailsPage.getContinueBtn().click()
    }
    cy.url().should('include', '/cart')
})

When('user clicks Checkout button, selects e-Sewa payment method and checkout with {string}', (courseName) => {
    
    //Proper validation with Checkout button
    cartPage.getCartTitle().should('have.text', 'Course in Cart')
    cartPage.getPriceSummary().should('exist').and('have.text', 'Price Summary')
    cartPage.getCourseName().should('exist').and('have.text', courseName)
    let sum = 0
    let total = 0
    cartPage.getPricePerCourse().should('exist').each(($el, index, $list) => {
        const amount = $el.text()
        let result = amount.split(".")
        result = result[1].trim()
        cy.log(result)
        sum = Number(sum) + Number(result)
    }).then( () => {
        cy.log(sum)
    })
    cy.wait(1500)
        // cartPage.getTotalPrice().should('exist').and('have.text', 'Rs. ' + sum)

    cartPage.getTotalPrice().should('exist').then( (elem) =>{
        const amount = elem.text()
        let result = amount.split(" ")
        let res = result[1].split(".")
        total = res[0]

        cy.log(total)
        cy.wait(1500)
        if(expect(Number(total)).to.equal(sum)){
            cartPage.getCheckoutBtn().click()
            cartPage.getPaymentPopUp().should('exist')

            //user selects e-Sewa payment method and checkout
            cartPage.getESewaMethod().check().should('be.checked')
            cartPage.getActualCheckout().click()
        }
    })
})

When('user is redirected to e-Sewa website, fills form with your eSewaId and eSewaPassword, buys properly', () => {
    eSewaPage.getESewaVerify().should('have.text', 'Please login to make your payment ')
    eSewaPage.getESewaId(Cypress.env('esewaID'))
    eSewaPage.getESewaPassword(Cypress.env('esewaPW'))
    eSewaPage.getESewaLogin().click()
    eSewaPage.getWarningMessage()
        .should('have.text', ' Please enter token sent to your phone carefully. You only have one attempt for security reason. ')
    eSewaPage.getTokenField().should('exist')
    cy.wait(20000)
    eSewaPage.getContinuePayment().click()
    eSewaPage.getDetailEsewaId().should('have.value', Cypress.env('esewaID'))
    eSewaPage.getDetailName().type('Suraj Nepali')
    eSewaPage.getDetailContact().type(Cypress.env('esewaID'))
    eSewaPage.getDetailAddress().type('Pokhara')
    eSewaPage.getDetailEmail().type('surajnepali7896@gmail.com')
    eSewaPage.getContPayBtn().click()
    eSewaPage.getConfirmPayment().contains('Confirm').click()
       
})

Then('user is redirected to meropadhai website and {string} is bought', (courseName) => {
    cy.url().should('include', '/my-library')
    myLibrary.getPageTitle().should('have.text', 'My Learning')
    myLibrary.getCourseName().should('exist').and('have.text', courseName)
})