describe("Header and Cookies", () => {
    let authToken=null
    let order_Id = null
    before("Create  access token first", () => {
        let client_Email = Math.random().toString(6).substring(3)+"@gmail.com"
        cy.request({
            method: "POST",
            url: "https://simple-books-api.glitch.me/api-clients/",
            headers: {
                'content-type': 'application/json'
                },
            body: {
                clientName: "Test Client Me",
                clientEmail: client_Email
                }
        })
        .then((response) => {
            expect(response.status).to.eq(201)
            authToken = response.body.accessToken
            cy.log(authToken)
            // expect(response.body.clientName).to.eq("Test Client Me")
            // expect(response.body.clientEmail).to.eq(client_Email)
        })
    })
    before("Create an order", () => {
        cy.request({
            method: "POST",
            url: "https://simple-books-api.glitch.me/orders/",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: {
                bookId: 4,
                customerName: "Test Customer"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(201)
            // expect(response.body.customerName).to.eq("Test Customer")
            // expect(response.body.bookId).to.eq(4)
            expect(response.body.created).to.eq(true)
            order_Id = response.body.orderId
            cy.log(order_Id)
        })
    })
    it("Fetch the order", () => {
        cy.request({
            method: "GET",
            url: "https://simple-books-api.glitch.me/orders/",
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            cookies:{
                cookieName: "MyCookie"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(1)
            expect(response.body[0].bookId).to.eq(4)
            expect(response.body[0].customerName).to.eq("Test Customer")
            expect(response.body[0].id).to.eq(order_Id)
        })
    })
})