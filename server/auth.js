const express = require('express');
const router = express.Router();
const _ = require("underscore");
const https = require("https");
var concat = require('concat-stream');

router.get('/', (req, res) => {
	const url = "https://www.db-thueringen.de/api/v1/auth";
    var newReq = https.request(url, (newRes) => {
    	var headers = newRes.headers;
        res.writeHead(newRes.statusCode, headers);
        newRes.pipe(res);
    }).on('error', function(err) {
    	res.statusCode = 500;
    	res.end();
    });
    
    req.pipe(newReq);
});

router.post('/login', (req, res) => {
	const url = "https://www.db-thueringen.de/api/v1/auth/login";
	
	console.log(req);
	var newReq = https.request(url, (newRes) => {
    	var headers = newRes.headers;
        res.writeHead(newRes.statusCode, headers);
        newRes.pipe(res);
    }).on("error", function(err) {
    	console.log(err);
    	res.statusCode = 500;
    	res.end();
    });
    
    req.pipe(newReq);
});

module.exports = router;