describe("API Testing", () => {

    // it("Approach-1: Hard coded json object", () => {
    //     const requestBody = {
    //         tourist_name: "John",
    //         tourist_email: "john365@gmail.com",
    //         tourist_location: "New York"
    //     }
    //     cy.request({
    //         method: 'POST',
    //         url: 'http://restapi.adequateshop.com/api/Tourist',
    //         body: requestBody
    //     }).then((response) => {
    //         expect(response.status).to.eq(201)
    //         expect(response.body.tourist_name).to.eq('John')
    //         expect(response.body.tourist_email).to.eq('john365@gmail.com')
    //         expect(response.body.tourist_location).to.eq('New York')
    //     })
    // })

    it("Approach-2: Randomly generated json object", () => {
        const requestBody = {
            tourist_name: Math.random().toString(8).substring(2),
            tourist_email: Math.random().toString(8).substring(2)+"@gmail.com",
            tourist_location: Math.random().toString(10).substring(4)
        }
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
        })
    })

    it.only("Approach-3: Using predefined (fixed) json object", () => {
        cy.fixture('tourist').then((data) => {
        const requestBody = data
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(response.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(response.body.tourist_location).to.eq(requestBody.tourist_location)
        })
        }
        )

    })

})
            