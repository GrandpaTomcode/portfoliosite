submit = (req, res, deps) => {
  // NOTE: Using a promise because the response was not being sent
  return new Promise((resolve, reject) => {
    let Body = req.query.data;
    Body = JSON.parse(Body)
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
    smtpTransport.sendMail(mailOptions, (err) => {
      if (err) {
        console.log(err);
        res.end("Error");
      } else {
        console.log("the email has been sent ")
        resolve(true)
      };
    });
  })


}
exports.submit = submit;
