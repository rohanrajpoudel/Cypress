/// <reference types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const HomePage = require("../../../../support/PageObject/HomePage")
const LoginPage = require("../../../../support/PageObject/LoginPage")
const LogHomePage = require("../../../../support/PageObject/LogHomePage")
const ProfilePage = require("../../../../support/PageObject/ProfilePage")
const VerifyContactPage = require("../../../../support/PageObject/VerifyContactPage")

const homePage = new HomePage()
const loginPage = new LoginPage()
const logHomePage = new LogHomePage()
const profilePage = new ProfilePage()
const verifyContactPage = new VerifyContactPage()

let name = ""
let num = ""

Given('user opens the meropadhai website', () => {
    cy.visit(Cypress.env("url"))
    homePage.getPageTitle().should("have.text", "Learn all courses at home.")
})

When('user clicks Login button and redirected to login page', () => {
    homePage.getLoginButton().click()
    cy.url().should('include', '/auth/signin')
    loginPage.getPageTitle().should('have.text', 'Sign in to continue')
})

When('user logs in with email and password', () => {
    loginPage.fillEmail().type(Cypress.env("emailChangePhoneNumberPage"))
    loginPage.fillPassword().type(Cypress.env("password"))
    loginPage.submitBtn()
})

When('verify Phone pop up box appears for email but user clicks skip button', () => {
    logHomePage.getVerifyPopUp().should('be.visible')
    logHomePage.getVerifyTitle().should('have.text', 'Verify Phone Number')
    logHomePage.getEmailField().should('exist').and('have.value', Cypress.env("emailChangePhoneNumberPage"))
    logHomePage.getNameField().invoke('val').then((text) => {
        name = text
    })
    logHomePage.getSkipBtn().should('exist').contains('Skip').click()
    cy.wait(2000)
})

When('user is redirected to home page and clicks Profile button', () => {
    logHomePage.pageTitle().should('exist').contains('On your markGet setLearn!')
    logHomePage.getAvatarBtn().should('exist').click()
    logHomePage.getProfileBtn().should('exist').click()
    profilePage.getPageTitle().should('have.text', 'Account Setting')
    profilePage.getNameField().should('exist').then((result) => {
        expect(result.text()).to.equal(name)
    })
})

When('user clicks Change button and clicks Submit button', () => {
    profilePage.getChangeNumberBtn().should('exist').click()
    profilePage.getSubmitBtn().should('exist').click()
})

When('user clicks Change button', () => {
    profilePage.getChangeNumberBtn().should('exist').click()
})

When('user enters {string} in the text box and clicks Cancel button', (phone) => {
    profilePage.getChangeNumberField().should('exist').type(phone)
    profilePage.getChangeNumberField().invoke('val').then((text) => {
        num = text
        cy.log(num)
    })
    profilePage.getChangeCancelBtn().should('exist').click()
})

When('user enters {string} in the text box', (phone) => {
    profilePage.getChangeNumberField().should('exist').type(phone)
    profilePage.getChangeNumberField().invoke('val').then((text) => {
        num = text
        cy.log(num)
    })
})

When('user clicks Change button, enters {string} in the text box and clicks Submit button', (phone) => {
    profilePage.getChangeNumberBtn().should('exist').click()
    profilePage.getChangeNumberField().should('exist').type(phone)
    profilePage.getSubmitBtn().should('exist').click()
    profilePage.getToastMessage().should('exist').and('have.text', "OTP has been sent to your contact.")
})

When('user clicks meropadhai button instead of typing OTP code for {string}', (phone) => {
    cy.url().should('contain', '/user/verify-contact')
    verifyContactPage.getPageTitle().should('have.text', 'Enter OTP')
    verifyContactPage.getContactText().should('exist').and('contain', phone)
    verifyContactPage.getLogoBtn().should('exist').click()
})

When('verify Phone pop up box appears for email and contains recently semi-updated contact {string}', (phone) => {
    logHomePage.getVerifyPopUp().should('be.visible')
    logHomePage.getVerifyTitle().should('have.text', 'Verify Phone Number')
    logHomePage.getEmailField().should('exist').and('have.value', Cypress.env("emailChangePhoneNumberPage"))
    logHomePage.getContactField().should('exist').and('have.value', phone)
})

When('user clicks skip button, clicks Profile button, and clicks Avatar', () => {
    logHomePage.getSkipBtn().should('exist').contains('Skip').click()
    logHomePage.getAvatarBtn().should('exist').click()
    logHomePage.getProfileBtn().should('exist').click()
    profilePage.getPageTitle().should('have.text', 'Account Setting')
})

When('user enters {string} in the text box and clicks Submit button', (phone) => {
    profilePage.getChangeNumberField().should('exist').type(phone)
    profilePage.getSubmitBtn().should('exist').click()
})

Then('user should see negative  toast message', () => {
    profilePage.getToastMessage().should('exist').and('have.text', "Phone number cannot be empty.")
})

Then('user clicks Change button and should see the recently typed {string} in the text box', (phone) => {
    profilePage.getChangeNumberBtn().should('exist').click()
    profilePage.getNumEnteredField().should('exist').and('have.value', num)
})

Then('user should see Invalid Contact Number message', () => {
    profilePage.getInvalidNumber().should('be.visible').and('have.text', 'Invalid Contact Number.')
})

Then('user should see the recently semi-updated contact {string} in the text box', (phone) => {
    profilePage.getContactField().should('exist').contains(phone)
})

Then('user should see Number Already Existed message', () => {
    profilePage.getToastMessage().should('exist').and('have.text', "Phone Number already used.")
})