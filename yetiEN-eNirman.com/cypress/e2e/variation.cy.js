// Import the logIn function from login.cy.js
const { logIn } = require('./login.cy.js')
const id = Cypress.env("id")
const pass = Cypress.env("pass")
import 'cypress-file-upload'


// Set a custom viewport resolution


describe("check and add some variation", () => {
    it('passes', () => {
        // variationList()
        addVariation("name", -5500, "5 month", "          Description         ", "file1_0byte.pdf")
        // addPayment("traNsfer", "2012-12-12", "statement", -5500, "abc", "Rohan Bank", 12345, 123345, "variation")
        // validityCheck()
    })
  })

function variationList(){
    logIn("poudelrohan58@gmail.com", "rrp09876")
    cy.get('[href="/admin/project-detail/113/overview?projectName=Rohan&location=Zero"]').click()
    // cy.get('[href="/admin/project-detail/114/overview?projectName=New House&location=Srijana Chowk"]').click()
    cy.get('.gap-10 > :nth-child(4)').click()
    cy.get('.p-1 > :nth-child(3)').click()
}

function addVariation(title, price, time, description, filePath){
    cy.log(id)
    logIn(id, pass)
    cy.get('[href="/admin/project-detail/113/overview?projectName=Rohan&location=Zero"]').click()
    // cy.get('[href="/admin/project-detail/114/overview?projectName=New House&location=Srijana Chowk"]').click()
    // cy.get('.gap-10 > :nth-child(7)').click()
    cy.get('form.mt-8 > :nth-child(1) > #title').click()
    cy.get('.primary-btn').contains("Create Variation").click()
    // cy.get('form.mt-8').invoke('attr', 'style', 'visibility: visible')
    // // cy.get('[placeholder="Eg. Variation of kitchen"]').type(title)
    // cy.get('#priceVariation').type(price)
    // cy.get('#timeVariation').type(time)
    // cy.get('#description').type(description)
    // cy.fixture(filePath).then(fileContent => {
    //     cy.get('.mt-4 .primary-btn').invoke('val', fileContent)
    //   })
    cy.fixture('file1_0byte.pdf').then(fileContent => {
        cy.get('.primary-btn > p').attachFile({
          fileContent: fileContent.toString(),
          fileName: 'file1_0byte.pdf',
          mimeType: 'application/pdf', // Adjust the MIME type according to your file
        })
    })
    cy.wait(2000)
    cy.get('form.mt-8 > .mt-8').click()
}

function addPayment(type, date, statement, amount, note=" ", bankName=" ", chequeID=" ", transactionID="", variation=""){
    let paymentType ={
        "cash": 0,
        "cheque": 1,
        "transfer": 2
    }
    type=type.toLowerCase()
    inFinance()
    cy.get('.p-1 > :nth-child(2)').click()
    cy.get('.p-0 > .primary-btn').click()
    cy.get('#type').closest('fieldset').invoke('attr', 'style', 'visibility: visible')
    cy.get('.mt-6 > :nth-child(1) > #type').select(type)
    cy.get('input[type="date"]').type(date)
    switch (paymentType[type]) {
        case 0:
            break
        case 1:
            cy.get('[placeholder="Bank name/branch"]').type(bankName)
            cy.get('[placeholder="cheque number"]').type(chequeID)
            break
        case 2:
            cy.get('[placeholder="Customer bank"]').type(bankName)
            cy.get('[placeholder="Transaction id"]').type(transactionID)
            break
    }
    cy.get(':nth-child(3) > #statement').type(statement)
    cy.get(':nth-child(4) > #amount').type(amount)
    if (note!=" "){
        cy.get(':nth-child(5) > #note').type(note)
    }
    if (variation.toLowerCase()=="variation"){
        cy.get('.mt-6 > .flex > .relative > .w-11').click()
    }
    // cy.get('#EZDrawer__containerllpfl > .mt-6 > .mt-8').click()
    // cy.get('.EZDrawer__container .button.mt-8.primary-btn').click()//not working
    cy.get('form.mt-8').invoke('attr', 'style', 'visibility: visible')
    // cy.get('button.mt-8.primary-btn').click()
    cy.get('form.mt-8 > .mt-8.primary-btn').contains('Add Payment').scrollIntoView().click()
    // cy.get('#EZDrawer__containerdauox > .mt-6 > .mt-8').click()
}

function validityCheck(){
    let validName = "abc"
    let c =""
    let i = 0
    for (i = 0 ; i<256; i++){
        c+="a"
    }
    let inValidName = ["a", "ab", c]
    let validAmount = 5000
    let inValidAmount = ["5432", "5,432", 0, 0.000000001]
    let values = [
        {
            value: "a",
            isValid: false,
        }
    ]
    let validDescription = "I'm Rohan Raj Poudel"
    addInstallment(validName, validAmount, validDescription)
    // i = 0
    // while(i<inValidName.length){
    //     addInstallment(inValidName[i],validAmount,validDescription)
    //     i++
    // }
    // i = 0
    // while(i<inValidAmount.length){
    //     addInstallment(validName,inValidAmount[i],validDescription)
    //     i++
    // }
}