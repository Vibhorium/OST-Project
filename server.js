
const express = require('express');
const bp = require('body-parser');

const app = express();

app.use('/', express.static(__dirname + "/home"));
app.use('/detected', express.static(__dirname + "/detected"));

app.use(bp.urlencoded({extended: true}))
app.use(bp.json());

let a;

app.post('/unattended', (req, res) => {
    a = req.body;

    console.log(a);
});

app.post('/unattended2', (req, res) => {
    res.send(a);
});

app.listen(8088,function () {
    console.log('Server started at http://localhost:8088');
})