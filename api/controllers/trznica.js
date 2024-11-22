import ponudbe from "../../data/trznica_podatki.json" assert { type : "json"};
import Ponudba from "../models/trznica.js";

// Vrni seznam ponudb
var seznam = (req, res) => {
    var rezultat = {
        naslov: "TRŽNICA!",
        podnaslov: "Tu lahko vidite ponudbe in povpraševanja na tržnici.",
        ponudbe: ponudbe
    };
    res.send(rezultat.ponudbe);
}

var ponudbeSeznam = async (req, res) => {
    try {
        let seznamPonudb = await Ponudba.find().exec();
        if (!seznamPonudb) {
            res.status(404).json({"Sporočilo": "Ni podatkov."});
        } else {
            res.status(200).json(seznamPonudb);
        }
    } catch(err) {
        res.status(500).json({"Sporočilo": "Napaka na strežniku: " + err.message + "."});
    }
}


export default {
    seznam,
    ponudbeSeznam
};