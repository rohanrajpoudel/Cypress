// Import the logIn function from login.cy.js
const { logIn } = require('./login.cy.js');
import { getRandomDate } from "../support/test";

describe("into the project's finance", () => {
    it('passes', () => {
        // inFinance()
        // cy.get('.p-1 > :nth-child(3)').click()
        // const button = cy.get(':nth-child(6) > .relative > .w-11')
        // for (let i = 0; i<100; i++){
        //     cy.get(':nth-child(6) > .relative > .w-11').eq(i).click()
        // }
        // for (let i = 0; i<100; i++){
        //     addInstallment("Install "+i, Math.floor(Math.random() * 50000000) + 1)
        // }
        // addInstallment("Install",5500)
        // cy.get('.p-1 > :nth-child(2)').click()
        // add100Payment()
        // validityCheck()
    })
  })

export function activate(n){
    for (let i = 0; i<n; i++){
        cy.get(':nth-child(6) > .relative > .w-11').eq(i).click()
    }    
}

export function add100Payment(n){
    const paymentType = ["cash", "cheque", "transfer"]
    var pType = "cash"
    for (let i = 0; i<=n; i++){
        pType = paymentType[Math.floor(Math.random() * 3)]
        if (pType=="cash"){
            addPayment(pType, getRandomDate(), "Statement" + i, Math.floor(Math.random() * 50000000) + 1, "Note "+i)
            addPayment(pType, getRandomDate(), "Statement" + i, Math.floor(Math.random() * 50000000) + 1, "Note "+i, "", "", "", "variation")
        }
        else if (pType=="cheque"){
            addPayment(pType, getRandomDate(), "Statement" + i, Math.floor(Math.random() * 50000000) + 1, "Note "+i, "My Bank "+i, Math.floor(Math.random() * 555555) + 1)
            addPayment(pType, getRandomDate(), "Statement" + i, Math.floor(Math.random() * 50000000) + 1, "Note "+i, "My Bank "+i, Math.floor(Math.random() * 555555) + 1, "", "variation")
        }
        else {
            addPayment(pType, getRandomDate(), "Statement" + i, Math.floor(Math.random() * 50000000) + 1, "Note "+i, "His Bank "+i, "", Math.floor(Math.random() * 555555) + 1)
            addPayment(pType, getRandomDate(), "Statement" + i, Math.floor(Math.random() * 50000000) + 1, "Note "+i, "His Bank "+i, "", Math.floor(Math.random() * 555555) + 1, "variation")
        }
    }
}
export function add100Installment(n){
    for (let i = 0; i<=n; i++){
        addInstallment("Install "+i, Math.floor(Math.random() * 50000000) + 1)
        }
}


export function inFinance(){
    logIn("poudelrohan58@gmail.com", "rrp09876")
    // cy.get('[href="/admin/project-detail/113/overview?projectName=Rohan&location=Zero"]').click()
    cy.get('[href="/admin/project-detail/11/architecture?projectName=Finance Test&location=Best Location"]').click()
    cy.get('.gap-10 > :nth-child(3)').click()

}

function addInstallment(name, amount, description=null){
    // inFinance()
    cy.get('button.primary-btn.w-fit.py-2').click()
    cy.get('input#name').invoke('attr', 'style', 'visibility: visible')
    cy.get('input#name.input').type(name)
    cy.get('input#amount').invoke('attr', 'style', 'visibility: visible')
    const amountInputs = cy.get('input#amount.input[type="number"][name="amount"]')
    amountInputs.first().type(amount)
    // cy.get('input#amount.input[type="number"][name="amount"]').type(amount)
    if (description!=null){
        const descriptionInputs = cy.get('textarea#description.input')
        descriptionInputs.first().type(description)
    }
    cy.wait(20)
    const addInstallButton = cy.get('.mt-8.primary-btn[type="submit"]')
    addInstallButton.eq(1).click()
}

export function addPayment(type, date, statement, amount, note=" ", bankName=" ", chequeID=" ", transactionID="", variation=""){
    let paymentType ={
        "cash": 0,
        "cheque": 1,
        "transfer": 2
    }
    type=type.toLowerCase()
    // inFinance()
    cy.get('.gap-4 > .primary-btn').click()
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
    // cy.get('form.mt-8').invoke('attr', 'style', 'visibility: visible')
    cy.get('.mt-6 > .mt-8').contains('Add Payment').click()
    // cy.get('form.mt-8 > .mt-8.primary-btn').contains('Add Payment').scrollIntoView().click()
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
