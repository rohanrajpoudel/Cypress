import { defaultAPI } from "../../default/APIs/default.api";
import { getAuthToken } from "./adminAuthToken.api";

export function adminAPI (method, subURL, body = null, headers = null, qs = null) { 
    getAuthToken();
    const authToken = Cypress.env('authToken');
    cy.log(authToken)
    if (headers == null) {
        headers = {
            authorization: `Bearer ${authToken()}`
        }
    }
    cy.log(headers)
    return defaultAPI(method, `/api/v1/admin${subURL}`, body, headers, qs);
}