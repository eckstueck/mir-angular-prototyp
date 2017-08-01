const express = require('express');
const router = express.Router();
const _ = require("underscore");

/* GET api listing. */
router.get('/', (req, res) => {
    const data = require('./mir.json');
    res.json(data);
});

router.get('/:docId', (req, res) => {
    const data = require('./mir.json');
    for(let i = 0; i < data.length; i++) {}
    var result = _.where(data.documents, {"id": req.params.docId});
    if (result != undefined && result.length > 0) {
        res.json(result[0]);
    }
    else {
        res.status(404);
        res.send("Not found!");
    }
});

module.exports = router;