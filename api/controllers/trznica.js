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

/**
 * @openapi
 *  /trznica-seznam:
 *   get:
 *    summary: Seznam ponudb.
 *    description: Pokaže seznam vseh ponudb, ki so trnutno v bazi.
 *    tags: [Tržnica]
 *    responses:
 *     '200':
 *      description: <b>OK</b>, vrne seznam ponudb.
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 *         items:
 *          $ref: '#/components/schemas/Ponudba'
 *        example:
 *         - _id: 673fc07e685d1be5450fb10b
 *           ime: Jožica Novak
 *           datum: 2024-11-20T10:53:56.217Z
 *           imam: 
 *            - 10 sadik ledenke
 *            - 5 sadik radiča
 *           iscem:
 *            - sadike jagode
 *           sporocilo: "Lep dan!"
 *         - _id: 673fc07e685d1be5450fb10c
 *           ime: Francka Koren
 *           datum: 2024-11-20T17:59:00.179Z
 *           imam: []
 *           iscem:
 *            - sadike paradižnikov
 *           sporocilo: ''
 *         - _id: 673fc07e685d1be5450fb10d
 *           ime: Jožica Novak
 *           datum: 2024-11-20T10:53:56.217Z
 *           imam:
 *            - preveč jabolk
 *           iscem: []
 *           sporocilo: "Lep dan!"
 */


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