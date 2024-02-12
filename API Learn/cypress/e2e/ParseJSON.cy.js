describe("Parsing JSON Response", ()=>{
    let title = []
    let price = []
    let price_t = 0
    it("Simple JSON Response",()=>{
        cy.request({
            method:'GET',
            url: "https://fakestoreapi.com/products",
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[0].id).to.eq(1)
            expect(response.body[0].price).to.eq(109.95)
            expect(response.body[0].rating.rate).to.eq(3.9)
        })
    })
    it("Next JSON Response",()=>{
        cy.request({
            method:'GET',
            url: "https://fakestoreapi.com/products",
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[19].id).to.eq(20)
            expect(response.body[19].price).to.eq(12.99)
            expect(response.body[19].rating.rate).to.eq(3.6)
        })
    })
    it.only("Capture all title and Price", ()=>{
        let i = 0
        cy.request({
            method:'GET',
            url: "https://fakestoreapi.com/products",
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            // for (i=0; i<response.body.length; i++)
            // {
            //     title[i]=response.body[i].title
            //     price[i]=response.body[i].price 
            // }
            response.body.forEach(element =>{
                cy.log(element.price)
            })
            // expect(price_t).to.eq(188.24)
            // for (i=0; i<response.body.length; i++)
            // {
            //     cy.log("Title: "+ title[i]) 
            //     cy.log("Price: $"+ price[i]) 
            // }

        })
    })

})