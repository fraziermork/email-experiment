'use strict';

let express       = require('express');
let app           = express();
let emailHandler  = require(__dirname + '/lib/email.js');
let bodyParser    = require('body-parser');

app.get('*', (req, res) => {
  console.log('request made to get index page');
  res.sendFile('index.html', {root: '.'});
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.post('/email', emailHandler);

app.listen(3000, () => {
  console.log('listening on 3000');
});
