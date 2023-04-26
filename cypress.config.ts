import { defineConfig } from 'cypress';
// import registerCodeCoverageTasks from '@cypress/code-coverage/task';
import requiredExample from '@cypress/code-coverage/task';

export default defineConfig({
  defaultCommandTimeout: 5000,
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    // baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      requiredExample(on, config);
      return config;
    },
  },
  video: false,
});
