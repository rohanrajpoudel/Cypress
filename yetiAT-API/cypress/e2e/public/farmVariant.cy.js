//AgroTech API-Testing

import { publicFarmVariantAPI } from "./APIs/publicFarmVariant.api";

describe('Farm Variant API', () => {
    it('Farm-Variant-API', () => {
        const qs = { 
            page: 1, 
            size: 10,
            longitude: 10,
            latitude: 10,
            rangeInKm: null,
         };
        publicFarmVariantAPI('/', qs)
        .then((response)=>{
            expect(response.status).to.eq(200)
            // cy.log("ID: "+response.body.entities[0].id)
            // cy.log("Description: "+response.body.entities[0].description)
            // cy.log("Product: "+response.body.entities[0].product.name)
        })
    })
    it('ID-Farm-Variant-API', () => {
        const id = 1
        publicFarmVariantAPI("/"+id)
        .then((response)=>{
            expect(response.status).to.eq(200)
            cy.log("ID: "+response.body.id)
            cy.log("Description: "+response.body.description)
            cy.log("Cost: "+response.body.price)
        })
    })
})