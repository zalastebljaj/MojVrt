var ponudbe = require("../models/trznica_podatki.json");

// Vrni seznam ponudb
var seznam = (req, res) => {
    var rezultat = {
        naslov: "TRŽNICA!",
        podnaslov: "Tu lahko vidite ponudbe in povpraševanja na tržnici.",
        ponudbe: ponudbe
    };
    res.send(rezultat);
}


module.exports = {seznam};