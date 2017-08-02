// polyfills
require("zone.js/dist/zone-node");
require("reflect-metadata");
require("rxjs/Rx");
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const express_engine_1 = require("@nguniversal/express-engine");
const app_server_module_1 = require("./build/app.server.module");

// Get our API routes
const api = require('./server/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('html', express_engine_1.ngExpressEngine({
  bootstrap: app_server_module_1.AppServerModule
}));

app.set('view engine', 'html');
app.set('views', __dirname);

app.use('/', express.static( __dirname, {index: false}));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.render('index', { req });
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`APP running on localhost:${port}`));