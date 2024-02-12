
describe("Query", () => {
    it("Passing Query Paramaters", () => {
        cy.request({
            method: "GET",
            url: "https:reqres.in/api/users",
            qs: {page: 2}
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.page).to.eq(2)
            expect(response.body.data).to.have.length(6)
            expect(response.body.data[1].id).to.eq(8)
            // expect(response.body.data[0].first_name).to.eq("Michael")
        })
    })
})