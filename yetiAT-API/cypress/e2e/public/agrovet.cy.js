//AgroTech API-Testing

import { publicAgrovetAPI } from "./APIs/publicAgrovet.api";

describe('Agrovet API', () => {
    it('Agrovet-API', () => {
        const qs = { 
            page: 1, 
            size: 10,
            longitude: 10,
            latitude: 10,
            rangeInKm: null,
            enterprise: [1,1],
            search: "null"
        };
        publicAgrovetAPI('/', qs)
        .then((response)=>{
            expect(response.status).to.eq(200)
            cy.log("ID: "+response.body.entities[0].id)
            cy.log("Status: "+response.body.entities[0].name)
            cy.log("Location: "+response.body.entities[0].address)
        })
    })
    it('ID-Agrovet-API', () => {
        const id = 1;
        publicAgrovetAPI('/'+id)
        .then((response)=>{
            expect(response.status).to.eq(200)
            cy.log("ID: "+response.body.id)
            cy.log("Status: "+response.body.name)
            cy.log("Location: "+response.body.address)
        })
    })
})