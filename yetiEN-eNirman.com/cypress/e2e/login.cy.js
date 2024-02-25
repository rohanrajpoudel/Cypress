// const { url } = require("./constants")
// const id = Cypress.env("id")
// const pass = Cypress.env("pass")


describe('Login into the system and also create a new project', () => {
  it('passes', () => {
    // logIn("poudelrohan58@gmail.com", "rrp09876")
    // createNewProject("Finance Test","Best Location")
    // cy.wait(2000)
  })
})
export function createNewProject(projectName, location){
    // logIn("poudelrohan58@gmail.com", "rrp09876")
    cy.get('[href="/admin/create-project"]').click()
    cy.get('[name="projectName"]').type(projectName)
    cy.get('[name="location"]').type(location)
    cy.get('[class="mt-8 primary-btn"]').click()
    cy.wait(1000)
}
function logIn(id, pass){
  // Set a custom viewport resolution
  cy.viewport(1440, 900)
  // cy.viewport(1920, 1200)
  // Zoom out by setting CSS zoom property
  // cy.get('body').invoke('css', 'zoom', '0.8')
  // cy.log({url})
  // cy.visit(url)
  cy.visit('/')
  cy.get('#email').type(id)
  cy.get('#password').type(pass)
  cy.get('.cursor-pointer').click()
  cy.get('.primary-btn').click() 
}

// Export functions to make them available for import
module.exports = {
  createNewProject,
  logIn
};