const AJV = require('ajv')
const ajv = new AJV()
const schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "array",
    "properties": {
      "id": {
        "type": "number"
      },
      "title": {
        "type": "string"
      },
      "price": {
        "type": "number"
      },
      "description": {
        "type": "string"
      },
      "category": {
        "type": "string"
      },
      "image": {
        "type": "string"
      },
      "rating": {
        "type": "object",
        "properties": {
          "rate": {
            "type": "number"
          },
          "count": {
            "type": "number"
          }
        },
        "required": [
          "rate",
          "count"
        ]
      }
    },
    "required": [
      "id",
      "title",
      "price",
      "description",
      "category",
      "image",
      "rating"
    ]
  }
describe('Schema Verification', () => {
  it('Schema Validation against response', () => {
    cy.request({
      method: 'GET',
      url: 'https://fakestoreapi.com/products'
    })
      .then((response) => {
        expect(response.status).to.eq(200)
        const validate = ajv.compile(schema)
        const isValid = validate(response.body)
        expect(isValid).to.be.true
      })
  })
})