const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    /*defaultCommandTimeout: 30000,
    viewportHeight: 900,
    viewportWidth: 1400,
    waitForAnimations: true,
    watchForFileChanges: true,
    chromeWebSecurity: false,*/
    specsPattern: 'cypress\e2e\allspec.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
