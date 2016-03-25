'use strict';

let express       = require('express');
let app           = express();
let emailHandler  = require(__dirname + '/lib/email.js');


app.get('*', (req, res) => {
  console.log('request made to get index page');
  res.sendFile('index.html', {root: '.'});
});

app.listen(3000, () => {
  console.log('listening on 3000');
});
