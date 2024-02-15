//AgroTech API-Testing

import { publicEnterpriseAPI } from "./APIs/publicEnterprise.api";

describe('Enterprise API', () => {
    it('List-Enterprise-API', () => {
        const qs = { page: 1, size: 10 };
        publicEnterpriseAPI('/', qs)
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.size).to.eq(10)
        })
    })
    it('Dropdown-Enterprise-API', () => {
        const targets = ['farm', 'agrovet', 'seller']
        const qs = { target: targets[Math.floor(Math.random() * 3)] };
        publicEnterpriseAPI('/dropdown',qs)
        .then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(qs)
            response.body.forEach(element =>{
                cy.log("ID: "+element.id)
                cy.log("Name: "+element.name)
                cy.log("")
            })
        })
    })
    it('ID-Enterprise-API', () => {
        const id = Math.floor(Math.random() * 3)+1
        publicEnterpriseAPI("/"+id)
        .then((response)=>{
            expect(response.status).to.eq(200)
            cy.log("ID: "+response.body.id)
            cy.log("Name: "+response.body.name)
            cy.log("Target: "+response.body.target)
        })
    })
})