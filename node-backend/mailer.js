var nodemailer = require('nodemailer');

var timer = 0;
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  port: 587,
  auth: {
    user: 'your email id',
    pass: 'your password'
  }
});

var mailOptions = {
  from: 'test.projectdemo007@gmail.com',
  to: 'ravi.kumar@cavisson.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

var interval = setInterval(function() {
    timer += 1;
    if(timer == 6) {
        clearInterval(interval);
    }
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}, 1.8e+6);
