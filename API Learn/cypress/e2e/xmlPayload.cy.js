// Import the necessary libraries
import { parseString } from 'xml2js';

// Define your test
describe('XML Payload and Response Parsing', () => {
  it('should handle XML payload and parse XML response', () => {
    // Define your XML payload
    const xmlPayload = `
      <Pet>
        <id>0</id>
        <age>30</age>
      </Pet>
    `;

    // Send a request with the XML payload
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet',
      body: xmlPayload,
      headers: {
        'Content-Type': 'application/xml',
        'accept': 'application/xml'
      },
    }).then((response) => {
      // Parse the XML response
      parseString(response.body, (err, result) => {
        if (err) {
          throw new Error('Failed to parse XML response');
        }

        // Access the parsed XML data
        const id = result.Pet.id[0];
        // const age = result.root.age[0];

        // Perform assertions on the parsed data
        expect(id).to.equal(0);
        // expect(age).to.equal('30');
      });
    });
  });
});
