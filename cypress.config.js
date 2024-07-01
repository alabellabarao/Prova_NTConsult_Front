const { defineConfig } = require("cypress");
const   createBundler = require ("@bahmutov/cypress-esbuild-preprocessor")
const { addCucumberPreprocessorPlugin } = require ("@badeball/cypress-cucumber-preprocessor")
const { createEsbuildPlugin } = require ("@badeball/cypress-cucumber-preprocessor/esbuild")
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.grocerycrud.com/v1.x/demo/bootstrap_theme',
    specPattern: "cypress/e2e/features/*.feature",
    stepDefinitions: 'cypress/support/step_definitions/**/*.js',
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', cucumber())

      // Qualquer outra configuração ou evento que você precise
    
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});
