// Import the logIn function from login.cy.js
const { logIn } = require('./login.cy.js')
const id = Cypress.env("id")
const pass = Cypress.env("pass")
import 'cypress-file-upload'

describe("check and add some variation", () => {
    it('passes', () => {
        // variationList()
        // logIn(id, pass)
        // cy.get('[href="/admin/project-detail/6/architechure?projectName=New House&location=Srijana Chowk"]').click()
        // add100Variation()
        // addVariation("name", -5500, "5 month", "          Description         ", "file1_0byte.pdf")
        // addPayment("traNsfer", "2012-12-12", "statement", -5500, "abc", "Rohan Bank", 12345, 123345, "variation")
        // validityCheck()
    })
  })
export function add100Variation(n){
    
    cy.get('.gap-10 > :nth-child(6)').click()
    addFirstVariation()
    for (let i = 1; i<=n; i++){
        addVariation("Positive Variation "+i, Math.floor(Math.random() * 50000000) + 1, ""+i+" month", "          Description         "+i, "file1_0byte.pdf")
        addVariation("Negative Variation "+i, -Math.floor(Math.random() * 50000000) + 1, "-"+i+" month", "          Description         "+i, "file1_0byte.pdf")
    }
}
function variationList(){
    logIn(id, pass)
    cy.get('[href="/admin/project-detail/6/architechure?projectName=New House&location=Srijana Chowk"]').click()
    cy.get('.gap-10 > :nth-child(3)').click()
    cy.get('.p-1 > :nth-child(3)').click()
}
function addFirstVariation(){
    cy.get('.my-32 > .primary-btn')
    .contains('Add Variation')
    .click()
    cy.get('form.mt-8 > :nth-child(1) > #title').eq(0).type("First Var")
    cy.get('input#priceVariation.input').invoke('attr', 'style', 'visibility: visible')
    cy.get('input#priceVariation.input').eq(0).type(123)
    cy.get('form.mt-8 > :nth-child(4) > #timeVariation').eq(0).type("Some time")
    cy.get('form.mt-8 > :nth-child(5) > #description').eq(0).type("Some Description")
    cy.get('label.mt-4 input[type="file"]').invoke('attr', 'class', '')
    cy.get('label.mt-4 input[type="file"]').eq(0).attachFile({
        filePath: "file1_0byte.pdf"
    })
    cy.wait(100)
    cy.get('form.mt-8 > .mt-8').eq(0).click()
}
function addVariation(title, price, time, description, fileName){
    cy.get('div.flex.justify-between.items-center')
    .contains('Create Variation')
    .click()
    cy.get('form.mt-8 > :nth-child(1) > #title').eq(1).type(title)
    cy.get('input#priceVariation.input').invoke('attr', 'style', 'visibility: visible')
    cy.get('input#priceVariation.input').eq(1).type(price)
    cy.get('form.mt-8 > :nth-child(4) > #timeVariation').eq(1).type(time)
    cy.get('form.mt-8 > :nth-child(5) > #description').eq(1).type(description)
    cy.get('label.mt-4 input[type="file"]').invoke('attr', 'class', '')
    cy.get('label.mt-4 input[type="file"]').eq(1).attachFile({
        filePath: fileName
    })
    cy.wait(100)
    cy.get('form.mt-8 > .mt-8').eq(1).click()
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
