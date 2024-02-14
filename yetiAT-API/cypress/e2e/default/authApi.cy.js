//AgroTech API-Testing

import { defaultAuthAPI } from "./APIs/defaultAuth.api";

describe('Default -Auth', () => {
    it('login-with-phone', ()=>{
        const body = {
            phoneNumber: ("+97798"+Math.floor(10000000 + Math.random() * 90000000).toString()),
            otp: (Math.floor(100000+Math.random() *900000).toString())
          }
        defaultAuthAPI('POST', '/login-with-phone-number', body)
        .then((response)=>{
            expect(response.status).to.eq(400)
        })
      })
    it('register-with-phone', ()=>{
        const body = {
            phoneNumber: ("+97798"+Math.floor(10000000 + Math.random() * 90000000).toString()),
            firstName: "Test",
            lastName: "User",
            otp: (Math.floor(100000+Math.random() *900000).toString())
            }
        defaultAuthAPI('POST', '/register-with-phone-number', body)
        .then((response)=>{
            expect(response.status).to.eq(404)
        })
      })
    it('login-with-email', ()=>{
        const body = {
            email: (Math.floor(10000000 + Math.random() * 90000000).toString())+"@gmail.com",
            password: "Test@123"
          }
        defaultAuthAPI('POST', '/login-with-email', body)
        .then((response)=>{
            expect(response.status).to.eq(404)
        })
      })
    it('Refresh-Bearer-Token', () => {
        const body = {
            token: 'Refreshed_token_here'
          }
        defaultAuthAPI('POST', '/refresh-bearer-token', body)
        .then((response)=>{
            expect(response.status).to.eq(201)
        })
      })
    it('Get-Profile', () => {
        defaultAuthAPI('GET', "/profile")
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
        const headers = {
            'Content-Type': 'multipart/form-data'
          }
        defaultAuthAPI('PATCH', '/profile', formData, headers)
        .then((response) => {
            expect(response.status).to.eq(200);
        });
      });
})