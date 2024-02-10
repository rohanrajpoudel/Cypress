import { baseUrl } from "..";

export const sampleApi2 = async (token, data) => {
  const formData = new FormData();
  formData.append("sampleKey", data.key1);
  formData.append("sampleKey2", data.key2);

  const fileOutput = await cy
    .fixture("sample.jpeg", "binary")
    .then((file) => Cypress.Blob.binaryStringToBlob(file, "image/jpeg"));

  architectureData.append("fileFieldName", fileOutput, "sample.jpeg");

  return cy.api({
    method: "POST",
    url: baseUrl + "/targeted-url",
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    failOnStatusCode: false,
  });
};
