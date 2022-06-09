const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  response.json({
    msg: 'Hi APM!'
  })
})

app.listen(80, () => {
  console.log('Server started! 🚀')
})


const apm = require('elastic-apm-node').start({
  // Override the service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'test-apm',

  // Use if APM Server requires a secret token
  secretToken: '',

  // Set the custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200',

  // Set the service environment
  environment: 'production'
})