/// <reference types="cypress" />
/// <reference types="cypress-iframe" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import 'cypress-iframe'

const LoginPage = require('../../../../support/PageObject/LoginPage')
const HomePage = require('../../../../support/PageObject/HomePage')
const LogHomePage = require('../../../../support/PageObject/LogHomePage')
const RegisterPage = require('../../../../support/PageObject/RegisterPage')

const homePage = new HomePage()
const loginPage = new LoginPage()
const logHomePage = new LogHomePage()
const registerPage = new RegisterPage()


Given('user opens the meropadhai website', () => {
    cy.visit(Cypress.env('url'))
    homePage.getPageTitle().should('have.text', 'Learn all courses at home.')
})

When('user clicks on the Register button', () => {
    homePage.getRegisterButton().click()
    cy.url().should('include', '/auth/signup')
    registerPage.getTitle().should('exist').should('have.text', 'Signup.')
    cy.wait(8000)
})

When('user clicks on the signup with google button and next window opens', () => {
    cy.get('iframe[id*="gsi_"]').click().then($iframe => {
        const $body = $iframe.contents().find('body')
    })
})