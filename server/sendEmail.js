submit = (req, res, deps) => {
  // check that .contactInformation exists in the .params object)

    console.log(req.body.params.contactInformation)
    let Body = req.body.params.contactInformation
    Body = JSON.parse(Body)
    console.log(Body)
    const nodemailer = require('nodemailer');
    const config = deps.config
    
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: config
    })

    const mailOptions = {
        to: config.toAddress,
        subject: Body.subject,
        email: Body.email,
        html: '<b>Name: </b> ' + '<br>' + Body.name +
            '<br>'
            + '<b>Email: </b> ' + '<br>' + Body.email +
            '<br>'
            + '<b>Message: </b> ' + '<br>' + Body.message

    }
    console.log(mailOptions)
    smtpTransport.sendMail(mailOptions, (err, res) => {
        if (err) {
            console.log(err)
            res.end('Error')
        } else {
            console.log('message sent: ' + res.mailOptions)
            res.redirect(req.get('referer'))
        }

    })

}

exports.submit = submit
