const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    e2e: {
      baseUrl: 'https://app.enirman.com/'
    },
    env: {
      url: process.env["url"],
      id: process.env["id"],
      pass: process.env["pass"],
      // other envs
    },
  },
});
