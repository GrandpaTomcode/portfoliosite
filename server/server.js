const express = require("express")
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")
const https = require('https')
const fs = require("fs")
const path = require("path")
const submit = require("./sendEmail.js").submit;
const app = express()

let deps = {}
let config
try {
  config = JSON.parse(fs.readFileSync("config.json", "utf-8"));
} catch (e) {
  console.log(e);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));


app.get("/submit", (req, res) => {
  deps.config = config;
  console.log(req.query.data)
  submit(req, res, deps).then(result => {
    res.send("Sent and Recieved")
  }).catch(e => { console.log(e) })
});


app.get("/blog", (req, res) => {
  app.use(express.static(path.join(__dirname, "../blog")))
  res.sendFile(path.join(__dirname, '../blog/blog.html'))

})
// - Server listening
const options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/papasodiepop.me/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/papasodiepop.me/privkey.pem')
}

app.listen(8080)
https.createServer(options, app).listen(8443)
