import { baseUrl } from "..";

export const sampleApi = (verificationToken, purpose) =>
  cy.api({
    method: "POST",
    url: baseUrl + "/todos", //targeted url
    body: {
      sampleKey: "sampleValue",
    },
    failOnStatusCode: false,
  });

export const sampleLoginApi = (email, password) => {
  return cy.api({
    method: "POST",
    url: baseUrl + "/login",
    body: {
      email: email,
      password: password,
    },
    failOnStatusCode: false,
  });
};
