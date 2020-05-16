const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const https = require('https')

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/data'));
app.use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
 res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
 res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
 next();
});

app.get('/', function(req, res) {
 res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.get('/data', function(req, res) {
 res.header("Content-Type", 'application/json');
 res.sendFile(path.join(__dirname, 'data.json'));
});

app.listen(port, () => {
 console.log(`listening on ${port}`)
});