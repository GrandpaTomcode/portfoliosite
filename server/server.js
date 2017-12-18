const express = require('express');
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser');
const fs = require('fs')
const path = require('path');
const validator = require('express-validator')
const submit = require('./sendEmail.js').submit;
const app = express();
let deps = {}
let config

try {
    config = JSON.parse(fs.readFileSync('config.json', 'utf-8'))
} catch (e) {
    console.log(e)
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(validator())

app.post('/submit', (req, res) => {
    req.checkBody('leader_email', "Enter a valid email address.").isEmail().withMessage('must be an email')
    let error = req.validationErrors()
    if (error) {
        console.log(error)
        return
    } else {
        deps.config = config
        submit(req, res, deps)
    }


})

app.listen(9000, () => {
    console.log('[ya boi is listening on port 9000]');
});
