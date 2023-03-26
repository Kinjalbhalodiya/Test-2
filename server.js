const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/test', (req, res) => {
  res.send('Test')
})

/* istanbul ignore next */
/*if (!module.parent) {*/
  app.listen(port, ()=> {
  console.log('Express started on port 3001');
})

