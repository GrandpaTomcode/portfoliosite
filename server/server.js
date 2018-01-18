const express = require("express")
const nodemailer = require("nodemailer")
const bodyParser = require("body-parser")
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

app.get('/health-check', (req, res) => res.sendStatus(200));
app.get("/blog", (req, res) => {
  app.use(express.static(path.join(__dirname, "../blog")))
  res.sendFile(path.join(__dirname, '../blog/blog.html'))

})
// - Server listening
app.listen(8080, () => {
  console.log("[ya boi is listening on port 8080]");
});
