describe('Agrotech API Testing', () => {
  //it works well
  it('Get', () => {
    cy.request({
      method: 'GET',
      url: "/api"
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
      expect(response.status).to.eq(400)
    })
  })
  it('Auth', ()=>{
    cy.request({
      method: 'POST',
      url: '/api/v1/auth/register-with-phone-number',
      body: {
        phoneNumber: ("+97798"+Math.floor(10000000 + Math.random() * 90000000).toString()),
        firstName: "Test",
        lastName: "User",
        otp: (Math.floor(100000+Math.random() *900000).toString())
      }
    })
    .then((response)=>{
      expect(response.status).to.eq(404)
    })
  })
  it('Auth', ()=>{
    cy.request({
      method: 'POST',
      url: '/api/v1/auth/login-with-email',
      body: {
        email: (Math.floor(10000000 + Math.random() * 90000000).toString())+"@gmail.com",
        password: "Test@123"
      }
    })
    .then((response)=>{
      expect(response.status).to.eq(404)
    })
  })
  it('Refresh Bearer Token', () => {
    cy.request({
      method: 'POST',
      url: '/api/auth/refresh-bearer-token',
      body: {
        token: 'your_token_here'
      }
    })
    .then((response)=>{
      expect(response.status).to.eq(201)
    })
  })
  it('Get', () => {
    cy.request({
      method: 'GET',
      url: "/api/v1/auth/profile"
    })
    .then((response)=>{
      expect(response.status).to.eq(200)
    })
  })
  it('Patch', () => {
    const formData = new FormData();
    formData.append('firstName', 'John');
    formData.append('lastName', 'Doe');
    formData.append('dob', '1990-01-01');
    formData.append('profilePicture', '');

    cy.request({
      method: 'PATCH',
      url: '/api/v1/auth/profile',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  //it works well
  it.only('POST', () => { 
    cy.request({
      method: 'POST',
      url: '/api/v1/role/sync',
    })
    .then((response) => {
      expect(response.status).to.eq(201);
    });
  });
})