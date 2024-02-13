describe("Public", () => {
    it("/enterprise", () => {
        cy.request({
            method: "GET",
            url: "/api/v1/public/enterprise",
            qs: {
                page: 1,
                size: 10
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            // expect(response.body.entities).to.have.length(4)
            expect(response.body.size).to.eq(10)
            response.body.entities.forEach(element =>{
                cy.log("ID: "+element.id)
                cy.log("Created: "+element.createdAt)
                cy.log("Updated: "+element.updatedAt)
                cy.log("Name: "+element.name)
                cy.log("Target: "+element.target)
                cy.log("")
            })
        })
    })
    it("/enterprise/{id}", () => {
        let id = 4
        cy.request({
            method: "GET",
            url: "/api/v1/public/enterprise/"+id
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            cy.log("ID: "+response.body.id)
            cy.log("Created: "+response.body.createdAt)
            cy.log("Updated: "+response.body.updatedAt)
            cy.log("Name: "+response.body.name)
            cy.log("Target: "+response.body.target)
        })
    })
    it("/farm-category/dropdown", () => {
        cy.request({
            method: "GET",
            url: "/api/v1/public/farm-category/dropdown"
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            response.body.forEach(element =>{
                cy.log("ID: "+element.id)
                cy.log("Name: "+element.name)
                cy.log("")
            })
        })
    }) 
    it("/product/dropdown", () => {
        cy.request({
            method: "GET",
            url: "/api/v1/public/product/dropdown"
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            response.body.forEach(element =>{
                cy.log("ID: "+element.id)
                cy.log("Name: "+element.name)
                cy.log("Image ID: "+element.image.id)
                cy.log("Created: "+element.image.createdAt)
                cy.log("Updated: "+element.image.updatedAt)
                cy.log("url: "+element.image.url)
                cy.log("")
            })
        })
    })
    //doesn't work
    it("/farm-varient", () => {
        cy.request({
            method: "GET",
            url: "/api/v1/public/farm-varient",
            qs: {
                page: 1,
                size: 1
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    //doesn't work
    it("/farm-varient/{id}", () => {
        let id = 1
        cy.request({
            method: "GET",
            url: "/api/v1/public/farm-varient/"+id
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    //doesn't work
    it("/agrovet", () => {
        cy.request({
            method: "GET",
            url: "/api/v1/client/agrovet",
            qs: {
                page: 1,
                size: 1
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    //doesn't work
    it("/agrovet/{id}", () => {
        let id = 1
        cy.request({
            method: "GET",
            url: "/api/v1/client/agrovet/"+id
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    //doesn't work
    it("/farm", () => {
        cy.request({
            method: "GET",
            url: "/api/v1/public/farm",
            qs: {
                page: 1,
                size: 1,
                rangeInKm: 1,
                // enterprises: ["string1", "string2"],
                searchstring: "string"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it("/farm/{id}", () => {
        let id = 1
        cy.request({
            method: "GET",
            url: "/api/v1/public/farm/"+id
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            cy.log("ID: "+response.body.id)
            cy.log("Name: "+response.body.name)
            cy.log("")
            
        })
    })
    it("/seller", () => {
        let id = 1
        cy.request({
            method: "GET",
            url: "/api/v1/public/seller",
            qs: {
                page: 1
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it("/seller/{id}", () => {
        let id = 1
        cy.request({
            method: "GET",
            url: "/api/v1/public/seller/"+id
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})