var express = require('express');
var router = express.Router();

var ctrlTrznica = require("../controllers/trznica");

/* GET home page. */
router.get("/trznica-seznam", ctrlTrznica.seznam);

module.exports = router;
