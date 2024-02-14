export function defaultAPI (METHOD, URL, BODY = null, HEADERS = null) {
  if (BODY == null) {
    return cy.api({
      method: METHOD,
      url: URL
    })
  }
  else if (HEADERS == null) {
    return cy.api({
      method: METHOD,
      url: URL,
      body: BODY
    })
  } 
  else {
    return cy.api({
      method: METHOD,
      url: URL,
      body: BODY,
      headers: HEADERS
    })
  }
}