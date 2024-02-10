const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const xlsx = require("node-xlsx").default;

module.exports = defineConfig({
  projectId: 'v4n17b',
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  experimentalSessionAndOrigin: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
      on('task', {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try{
              const data = xlsx.parse(filePath);
              const sheet = data[0].data;
              const headers = sheet[0];
              const rows = sheet.slice(1);
              const result = rows.map(row => {
                return row.reduce((obj, cell, index) => {
                  obj[headers[index]] = cell;
                  return obj;
                }, {});
              });
              resolve(result);
            } catch(err) {
              reject(err);
            }
          })
        }
      })
    },
    specPattern: 'cypress/e2e/Code/BDD/*.feature',
  },
});
