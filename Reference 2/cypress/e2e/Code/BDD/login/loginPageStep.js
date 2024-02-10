import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';

const LoginPage = require('../../../../support/PageObject/LoginPage')
const HomePage = require('../../../../support/PageObject/HomePage')
const LogHomePage = require('../../../../support/PageObject/LogHomePage')

const homePage = new HomePage()
const loginPage = new LoginPage()
const logHomePage = new LogHomePage()

Given('user opens the meropadhai website', () => {
    cy.visit(Cypress.env('url'))
    homePage.getPageTitle().should('have.text', 'Learn all courses at home.')
})

When('user clicks on Login button', () => {
    homePage.getLoginButton().click()
})

Then('user should be redirected to Login page', () => {
    cy.url().should('include', '/auth/signin')
    loginPage.getPageTitle().should('have.text', 'Sign in to continue')
})

When('user clicks Login button and redirected to Login page', () => {
    homePage.getLoginButton().click()
    cy.url().should('include', '/auth/signin')
    loginPage.getPageTitle().should('have.text', 'Sign in to continue')
})

When('user clicks on arrow icon to login', () => {
    loginPage.submitBtn()
    loginPage.haveTitle().click()
})

Then('user should see error message', () => {
    loginPage.emailEmpty().should('have.text', 'This field is required.')
    loginPage.passwordEmpty().should('have.text', 'Password is required.')
})

When('user enters unregistered email and password', () => {
    loginPage.fillEmail().type(Cypress.env('unregistered_email'))
    loginPage.fillPassword().type(Cypress.env('password'))
})

When('user enters email and password', () => {
    loginPage.fillEmail().type(Cypress.env('emailForumPage'))
    loginPage.fillPassword().type(Cypress.env('password'))
})

When('user enters email and {string}', (password) => {
    loginPage.fillEmail().type(Cypress.env('emailForumPage'))
    loginPage.fillPassword().type(password)
})

When('user clicks on arrow icon for loggin in', () => {
    loginPage.submitBtn()
})

Then('user not existing message is shown', () => {
    loginPage.existenceTest().should('have.text', 'User doesn\'t exist')
})

Then('user should password required atleast 8 characters message is shown', () => {
    loginPage.passwordEmpty().should('have.text', 'Password should be at least 8 characters.')
})

When('user clicks Forgot Password button and redirected to Forgot Password page', () => {
    cy.get('.chakra-text > a:nth-child(1)').click()
    cy.url().should('include', '/user/forgot-password')
    cy.get('h1').should('have.text', 'Forgot Password ?')
    
})

Then('user comes back to Login page and previously filled form is cleared', () => {
    cy.go('back')
    loginPage.fillEmail().should('have.value', '')
    loginPage.fillPassword().should('have.value', '')
})

Then('invalid password message is shown', () => {
    loginPage.existenceTest().should('have.text', 'Invalid Password')
})

Then('user should be successfully logged in and redirected to Home page', () => {
    cy.url().should('include', '/')
    logHomePage.pageTitle().should('have.text', 'On your markGet setLearn!')
})