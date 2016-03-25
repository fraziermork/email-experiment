// 'use strict';
// let nodemailer = require('nodemailer');
// //https://nodemailer.com/
// 
// let transporter = nodemailer.createTransporter();
// 
// transporter.sendMail({data}, (err, info) => {
//   
// });
// //form needs first name, last name, their email address, textbox, send button
// 
// module.exports = function(data){
//   
//   
//   
// };


'use strict';
let Mailgun = require('mailgun-js');
let mailgun = new Mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_TEST_DOMAIN});


let testData = {
  from: 'fraziermork@gmail.com',
  to: process.env.OTHER_EMAIL,
  subject: 'TEST',
  html: 'TESTING'
};
mailgun.messages().send(testData, function(err, body) {
  if (err){
    console.log('Error occured', err);
  } else {
    console.log('success');
    console.log(body);
  }
});
