//AgroTech API-Testing

import { defaultAuthAPI } from "./APIs/defaultAuth.api";
let authToken = ["eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjgsImlhdCI6MTcwODA3NzI1MywiZXhwIjoxNzA4MTYzNjUzfQ.qyiX15WWPxxY3S5gtI3ayRbYgYEOPWeJVCxA7pCU2iI","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsImlhdCI6MTcwODA3NzQ2MiwiZXhwIjoxNzA4MTYzODYyfQ.CYkJvNcek4r_v_2oCopza9O0Ya6j7I5Loa60Db2C4hU"];

describe('Default -Auth', () => {
    // Login Successful
    // it.only('login-with-phone', ()=>{
    //     const body = {
    //         phoneNumber: "+9779840043605",
    //         otp: "499736"
    //       }
    //     defaultAuthAPI('POST', '/login-with-phone-number', body)
    //     .then((response)=>{
    //         expect(response.status).to.eq(201)
    //     })
    //   })
    //Registered 
    // it('register-with-phone', ()=>{
    //     const body = {
    //         phoneNumber: "+9779840043605",
    //         firstName: "Test",
    //         lastName: "User Me",
    //         otp: "372324"
    //         }
    //     defaultAuthAPI('POST', '/register-with-phone-number', body)
    //     .then((response)=>{
    //         expect(response.status).to.eq(201)
    //     })
    //   })
    //login with email works well
    it('login-with-email', ()=>{
        const body = {
            email: "admin@agri.tech",
            password: "password"
          }
        defaultAuthAPI('POST', '/login-with-email', body)
        .then((response)=>{
            expect(response.status).to.eq(201)
        })
      })
    it('Refresh-Bearer-Token', () => {
        const body = {
            token: 'Refreshed_token_here'
          }
        const headers= {
            authorization: `Bearer ${authToken}`
          }
        defaultAuthAPI('POST', '/refresh-bearer-token', body, headers)
        .then((response)=>{
            expect(response.status).to.eq(201)
        })
      })
    //Get profile works well
    it.only('Get-Profile', () => {
        const headers= {
          authorization: `Bearer ${authToken[0]}`
        }
        defaultAuthAPI('GET', "/profile", null, headers)
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
      })
    //patch profile works well
    it('Patch', () => {
      const headers= {
        authorization: `Bearer ${authToken[0]}`,
        'Content-Type': 'multipart/form-data'
      }
        const formData = new FormData();
        formData.append('firstName', 'John');
        formData.append('lastName', 'Doe');
        // formData.append('email', 'poudelrohan58@gmail.com');
        formData.append('dob', '1990-01-01');
        formData.append('profilePicture', '');
        defaultAuthAPI('PATCH', '/profile', formData, headers)
        .then((response) => {
            expect(response.status).to.eq(200);
        });
      });
})