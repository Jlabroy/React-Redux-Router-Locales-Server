const express = require("express");
const fs = require("fs");
const https = require("https");
const path = require("path");
const middleware = require("./middleware");

const app = express();

app.use(...middleware);
app.use(express.static("./build", { extensions: ["html"] }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

const port = 9000;
const key = fs.readFileSync("key.pem", "utf8");
const certificate = fs.readFileSync("cert.pem", "utf8");
const credentials = { key: key, cert: certificate };

const server = https.createServer(credentials, app);
server.listen(port, function() {
  console.log("Server Running on port %s", port);
});
