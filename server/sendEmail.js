submit = (req, res, deps) => {
  console.log(req.body);
  let Body = req.query;
  Body = JSON.parse(Body.data)
  console.log(Body);
  const nodemailer = require("nodemailer");
  const config = deps.config;

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: config
  });

  const mailOptions = {
    to: config.toAddress,
    subject: Body.Subject,
    email: Body.Email,
    html:
      "<b>Name: </b> " +
      "<br>" +
      Body.Name +
      "<br>" +
      "<b>Email: </b> " +
      "<br>" +
      Body.Email +
      "<br>" +
      "<b>Message: </b> " +
      "<br>" +
      Body.Message
  };

  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log(err);
      res.end("Error");
    } else {
      console.log("message sent: " + res.mailOptions);
      res.redirect(req.originalUrl())
    }
  });
};

exports.submit = submit;
