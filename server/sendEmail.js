submit = (req, res, deps) => {
    const nodemailer = require('nodemailer');
    const config = deps.config
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: config
    })

    const mailOptions = {
        to: config.toAddress,
        subject: req.body.subject,
        email: req.body.email,
        html: '<b>Name: </b> ' + '<br>' + req.body.name +
            '<br>'
            + '<b>Email: </b> ' + '<br>' + req.body.email +
            '<br>'
            + '<b>Message: </b> ' + '<br>' + req.body.message

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