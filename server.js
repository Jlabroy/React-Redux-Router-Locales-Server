const compression = require('compression');
var csp = require('helmet-csp');
const express = require('express');
const fs = require('fs');
const helmet = require('helmet');
const hpp = require('hpp');
const https = require('https');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(helmet());
app.use(hpp());
app.use(morgan('combined'));
app.use(compression());
app.use(csp({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'"],
    imgSrc: ['img.com', 'data:'],
    sandbox: ['allow-forms', 'allow-scripts'],
    reportUri: '/report-violation',
    objectSrc: ["'none'"]
  }
}));
app.use(express.static('./build', {extensions: ['html']}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

const port = 9000;
const key = fs.readFileSync('key.pem', 'utf8');
const certificate = fs.readFileSync('cert.pem', 'utf8');
const credentials = {key: key, cert: certificate}

const server = https.createServer(credentials, app);
server.listen(port, function() {
  console.log('Server Running on port %s', port);
});
