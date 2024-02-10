// const cypress = require("cypress");


describe('template spec', () => {
  it('passes', async () => {
    // cy.intercept('GET','https://octopus-app-2f4az.ondigitalocean.app/api/v1/auth/portal-user-login').as('fetchData');
    // const data = cy.api({
  //   method: 'POST',
  //   url: 'https://octopus-app-2f4az.ondigitalocean.app/api/v1/auth/portal-user-login',
  //   body: {username: "root", password: "12345678"},
  //   failOnStatusCode: false
  // }).as("fetchData")

    cy.visit('https://point.meropadhai.com/home')
    cy.get('form > :nth-child(1) > div > .border-2').type("root")
    cy.get('div.w-full > div > .border-2').type("12345678")
    // cy.get('.bg-primaryColor').click()
    // const data = await cy.api({
    // method: 'POST',
    // url: 'https://octopus-app-2f4az.ondigitalocean.app/api/v1/auth/portal-user-login',
    // body: {username: "root", password: "12345678"},
    // failOnStatusCode: false
    // })
    cy.wait(5000)
    const o = otp()
    const data = cy.api({
      method: 'POST',
      url: 'https://octopus-app-2f4az.ondigitalocean.app/api/v1/auth/portal-user-login',
      body: {username: "root", password: "12345678"},
      failOnStatusCode: false
      })
    cy.wait(5000)
    // cy.log(data.body.otp.toString())
    let a=data.body
    cy.log(JSON.stringify(a))
    cy.get('[style="display: flex; gap: 0.5rem;"] > :nth-child(1) > input').type("1234")
    cy.get('.w-full > .bg-primaryColor').click()
    })
  })

  // it('GET cypress and log',async () => {
  //   const data = await cy.api({
  //     method: 'POST',
  //     url: 'https://octopus-app-2f4az.ondigitalocean.app/api/v1/auth/portal-user-login',
  //     body: {username: "root", password: "12345678"},
  //     failOnStatusCode: false
  //   })
    
  //   const loginData = await cy.api({
  //     method: 'POST',
  //     url: 'https://octopus-app-2f4az.ondigitalocean.app/api/v1/auth/portal-user-otp',
  //     body:{username: "root", code: "1234"},
  //     failOnStatusCode: false
  //   })
  //   console.log(loginData)
  // })
// })

async function otp(){
  const data = await cy.api({
    method: 'POST',
    url: 'https://octopus-app-2f4az.ondigitalocean.app/api/v1/auth/portal-user-login',
    body: {username: "root", password: "12345678"},
    failOnStatusCode: false
    })
  return data.body.otp
}