///<reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/')
    cy.get(':nth-child(2) > .gb_E').click()
    cy.get('#APjFqb').type("Rohan Raj Poudel{enter}")
    // cy.contains('Rohan Raj Poudel').click()
  })
})