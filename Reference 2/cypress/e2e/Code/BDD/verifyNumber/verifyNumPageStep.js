/// <reference types="cypress" />

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
let timer = 0



Given("user opens the meropadhai website", () => {
    cy.visit(Cypress.env("url"))
    homePage.getPageTitle().should("have.text", "Learn all courses at home.")
})

When('user clicks Login button and redirected to login page', () => {
    homePage.getLoginButton().click()
    cy.url().should('include', '/auth/signin')
    loginPage.getPageTitle().should('have.text', 'Sign in to continue')
})

When('user logs in with {string} and {string}', (email, password) => {
    loginPage.fillEmail(email)
    loginPage.fillPassword(password)
    loginPage.submitBtn()
})

When('user clicks Skip button', () => {
    logHomePage.getSkipBtn().should('exist').contains('Skip').click()
    cy.wait(2500)
})

When('user types {string} in phone number field', (phone) => {
    logHomePage.getContactField().should('exist').type(phone)    
})

When('user checks whether the entered {string} is not saved in contact field of profile page', (phone) => {
    logHomePage.getAvatarBtn().should('exist').click()
    logHomePage.getProfileBtn().should('exist').click()
    profilePage.getPageTitle().should('have.text', 'Account Setting')
    profilePage.getNameField().should('exist').then((result) => {
        expect(result.text()).to.equal(name)
    })
    profilePage.getContactField().should('not.contain', phone)
    cy.go('back')
    cy.wait(2500)
})

When('user logs out from the website', () => {
    logHomePage.getAvatarBtn().should('exist').click()
    logHomePage.getLogoutBtn().should('exist').click()
    cy.wait(2500)
    homePage.getPageTitle().should("have.text", "Learn all courses at home.")
})

When('user clicks Verify button for {string} but cancel the verification', (phone) => {
    logHomePage.getVerifyContact().should('exist').contains('Verify').click()
    verifyContactPage.getPageTitle().should('have.text', 'Enter OTP')
    verifyContactPage.getContactText().should('exist').contains(phone).click()
    cy.go('back')
    logHomePage.getVerifyPopUp().should('exist')
    logHomePage.getVerifyTitle().should('have.text', 'Verify Phone Number')
    logHomePage.getSkipBtn().should('exist').contains('Skip').click()
})

When('user checks whether the entered {string} is saved in contact field of profile page', (phone) => {
    logHomePage.getAvatarBtn().should('exist').click()
    logHomePage.getProfileBtn().should('exist').click()
    profilePage.getPageTitle().should('have.text', 'Account Setting')
    profilePage.getNameField().should('exist').then((result) => {
        expect(result.text()).to.equal(name)
    })
    profilePage.getContactField().should('contain', phone)
    cy.go('back')
    cy.wait(2500)
})

When('user types already used {string} in phone number field', (phone) => {
    logHomePage.getContactField().should('exist').type(phone)
})

When('user clicks Verify button and sees error message', (phone) => {
    logHomePage.getVerifyContact().should('exist').contains('Verify').click()
    logHomePage.getToastMessage().should('exist').contains("Phone Number already used.")
    logHomePage.getSkipBtn().should('exist').contains('Skip').click()

})

When('user clicks Verify button for {string} and verify the phone number', (phone) => {
    logHomePage.getVerifyContact().should('exist').contains('Verify').click()
    verifyContactPage.getPageTitle().should('have.text', 'Enter OTP')
    verifyContactPage.getContactText().should('exist').contains(phone).click()
    cy.wait(5000)
    verifyContactPage.getContinueBtn().should('exist').contains('Continue').click()
    verifyContactPage.getToastMessage().should('exist').contains("OTP didn't match")
    cy.wait(50000)
    verifyContactPage.getContinueBtn().should('exist').contains('Continue').click()
    verifyContactPage.getToastMessage().should('exist').contains("Otp has expired.")
    verifyContactPage.getResendBtn().should('exist').contains('Resend').click()
    verifyContactPage.getToastMessage().should('exist').contains("OTP sent to your contact number.")
    cy.wait(20000)
    verifyContactPage.getContinueBtn().should('exist').contains('Continue').click()
    verifyContactPage.getToastMessage().should('exist').contains("Contact number updated successfully.")
    cy.wait(2500)
})

Then('verify phone number pop up should appear with {string}', (email) => {
    logHomePage.getVerifyPopUp().should('exist')
    logHomePage.getVerifyTitle().should('have.text', 'Verify Phone Number')
    logHomePage.getEmailField().should('exist').and('have.value', email)
    logHomePage.getNameField().invoke('val').then((text) => {
        name = text
    })
})

Then('user should be redirected to home page', () => {
    logHomePage.pageTitle().should('have.text', 'On your markGet setLearn!')
})

Then('contact field should be empty in pop up box',() => {
    cy.wait(2500)
    logHomePage.getContactField().should('exist').and('have.value', '')
})

Then('contact field should contain {string} in pop up box', (phone) => {
    logHomePage.getContactField().should('exist').and('have.value', phone)
})

Then('user is redirected to home page and doesnot see Verify Popup box anymore', () => {
    logHomePage.pageTitle().should('have.text', 'On your markGet setLearn!')
    logHomePage.getVerifyPopUp().should('not.exist')
})