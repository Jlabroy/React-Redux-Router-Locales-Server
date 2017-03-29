const client = require("./client");
const logging = require("./logging");
const security = require("./security");

module.exports = [...client, ...logging, ...security];
