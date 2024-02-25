import { defaultAuthAPI } from '../../default/APIs/defaultAuth.api'

export const getAuthToken = () => {
        const body = {
            email: "admin@agri.tech",
            password: "password"
        }
        defaultAuthAPI('POST', '/login-with-email', body)
        .then((response)=>{
            const authToken = response.body.bearerToken
            cypress.env('adminAuthToken', authToken)
        })
    }

