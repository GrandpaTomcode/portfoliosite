const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const jsonParserFunc = require('./boot/setupJsonParser').setupJsonParser;
const path = require('path');
const app = express();
// const jsonParser = bodyParser.json({
//         limit: '10mb',
//         type: 'application/json',
//     });
//
//
// app.use(jsonParser);
app.use(express.static(path.join(__dirname, '../public')));

app.listen(9000, () => {
    console.log('[ya boi is listening on port 9000]');
});
