//AgroTech API-Testing

import { publicAPI } from "./APIs/public.api";

describe('Dropdown API', () => {
    it('Farm-Category-Dropdown-API', async () => {
        publicAPI('/farm-category/dropdown')
        .then((response)=>{
            expect(response.status).to.eq(200)
            response.body.forEach(element =>{
                cy.log("ID: "+element.id)
                cy.log("Name: "+element.name)
                cy.log("")
            })
        })
    })
    it('Product-Dropdown-API', async () => {
        const qs = { category: '3' }
        publicAPI('/product/dropdown', qs)
        .then((response)=>{
            expect(response.status).to.eq(200)
            response.body.forEach(element =>{
                cy.log("ID: "+element.id)
                cy.log("Name: "+element.name)
                cy.log("")
            })
        })
    })
})