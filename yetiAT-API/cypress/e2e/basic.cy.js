describe('Agrotech API Testing', () => {
  it('Get', () => {
    cy.request({
      method: 'GET',
      url: "/"
  })
    .then((response)=>{
      expect(response.status).to.eq(200)
  })
})
  it('Auth', ()=>{
    cy.request({
      method: 'POST',
      url: '/api/auth/login-with-phone-number',
      body: {
        phoneNumber: ("+97798"+Math.floor(10000000 + Math.random() * 90000000).toString()),
        otp: (Math.floor(100000+Math.random() *900000).toString())
      }
    })
    .then((response)=>{
      expect(response.status).to.eq(201)
    })
  })
})