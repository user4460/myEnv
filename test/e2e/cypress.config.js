const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'uvba4u',
  
  e2e: {
    baseUrl: 'http://localhost:3000'

  }
})
