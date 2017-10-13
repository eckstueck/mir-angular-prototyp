const express = require('express');
const router = express.Router();
const _ = require("underscore");
const https = require("https");
var concat = require('concat-stream');

/* GET api listing. */
router.get('/:classID', (req, res) => {
    const getDocumentURL = "https://www.db-thueringen.de/api/v1/classifications/" + req.params.classID;
    let originalRes = res;
    https.get(getDocumentURL, (res) => {

        res.pipe(concat(function(buffer) {
            var str = buffer.toString();
            originalRes.send(str);
        }));

        res.on('error', (e) => {
            console.log(e);
        });
    });
});

module.exports = router;