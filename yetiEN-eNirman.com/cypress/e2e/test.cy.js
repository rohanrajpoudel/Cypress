import { addPayment } from "./financeRohan.cy";
import { add100Installment } from "./financeRohan.cy";
import { add100Payment } from "./financeRohan.cy";
import { activate } from "./financeRohan.cy";
import { add100Variation } from "./variation.cy";
import { inFinance } from "./financeRohan.cy";
import { getRandomDate } from "../support/test";
const { createNewProject } = require('./login.cy.js');
const { logIn } = require('./login.cy.js')
const id = Cypress.env("id")
const pass = Cypress.env("pass")





describe("Finance all", () => {
    const n=20
    const houseName = "Fin Testing"
    const houseLocation = "Location"
    item_number = 26
    it('Create new project', () => {
        logIn(id, pass)
        createNewProject(houseName,houseLocation)
    })
    it('Add 2n installment', () => {
        logIn(id, pass)
        cy.get('[href="/admin/project-detail/'+item_number+'/architecture?projectName='+houseName+'&location='+houseLocation+'"]').click()
        cy.get('p.flex.gap-2.items-center').contains('Finance').click()
        add100Installment(2*n)
    })
    it('Activate all installment', () => {
        logIn(id, pass)
        cy.get('[href="/admin/project-detail/'+item_number+'/architecture?projectName='+houseName+'&location='+houseLocation+'"]').click()
        cy.get('p.flex.gap-2.items-center').contains('Finance').click()
        activate(2*n)
    })
    it('Add positive and negative variation', () => {
        logIn(id, pass)
        cy.get('[href="/admin/project-detail/'+item_number+'/architecture?projectName='+houseName+'&location='+houseLocation+'"]').click()
        cy.get('p.flex.gap-2.items-center').contains('Variations').click()
        add100Variation(n)
    })
    it('Activate all variations', () => {
        logIn(id, pass)
        cy.get('[href="/admin/project-detail/'+item_number+'/architecture?projectName='+houseName+'&location='+houseLocation+'"]').click()
        cy.get('p.flex.gap-2.items-center').contains('Finance').click()
        cy.get('.p-1 > :nth-child(3)').click()
        activate(2*n)
    })
    it('Add 2n payment (n installment, n Variation) ', () => {
        logIn(id, pass)
        cy.get('[href="/admin/project-detail/'+item_number+'/architecture?projectName='+houseName+'&location='+houseLocation+'"]').click()
        cy.get('p.flex.gap-2.items-center').contains('Finance').click()
        cy.get('.p-1 > :nth-child(2)').click()
        add100Payment(n)
    })
    // it.only('Selete all Installment', () => {
    //     logIn(id, pass)
    //     cy.get('[href="/admin/project-detail/'+item_number+'/architecture?projectName='+houseName+'&location='+houseLocation+'"]').click()
    //     cy.get('p.flex.gap-2.items-center').contains('Finance').click()
    //     for (let i = 0; i<2*n; i++){
    //         cy.get('button.p-2.cursor-pointer.rounded-full.h-fit.bg-neutral-50').eq(i).click()
    //         cy.get('button.primary-btn-md.bg-supporting-error.text-base.rounded-lg.px-4.py-2').contains("Delete").click()
    //     }
    // })
})