const express = require('express');
const path = require('path');
const app = express();



app.use(express.static(path.join(__dirname, '../public')));



app.listen(9000, () => {
    console.log('[ya boi is listening on port 9000]');
});
