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


module.exports = (req, res) => {
  console.log('post made to /email');
  
  let emailData = {
    from: req.body.name + ' <' + req.body['sender-email'] + '>',
    to: 'fraziermork@gmail.com',
    subject: req.body['email-subject'],
    html: req.body['email-body']
  };
  mailgun.messages().send(emailData, function(err, body) {
    if (err){
      console.log('Error occured', err);
      res.status(404).end('Send failure');
    } else {
      console.log('success');
      console.log(body);
      res.status(200).end('Email sent');
    }
  });
  
};
