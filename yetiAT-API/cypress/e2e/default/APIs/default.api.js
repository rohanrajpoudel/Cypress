export const defaultAPI = (METHOD, URL, BODY = null, HEADERS = null, QS = null) =>
   cy.api({
    method: METHOD,
    url: URL,
    body: BODY,
    headers: HEADERS,
    qs: QS
  })

  
  
// export function defaultAPI (METHOD, URL, BODY = null, HEADERS = null, QS = null) { 
//   if (BODY == null) {
//     return cy.api({
//       method: METHOD,
//       url: URL
//     })
//   }
//   else if (HEADERS == null) {
//     return cy.api({
//       method: METHOD,
//       url: URL,
//       body: BODY
//     })
//   } 
//   else {
//     return cy.api({
//       method: METHOD,
//       url: URL,
//       body: BODY,
//       headers: HEADERS
//     })
//   }
// }