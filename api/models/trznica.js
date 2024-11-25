import mongoose from "mongoose";

/**
 * @openapi
 *  components:
 *   schemas:
 *    Ponudba:
 *     type: object
 *     description: Ponudbe na tržnici.
 *     properties:
 *      _id:
 *       type: string
 *       description: <b>Enolični identifikator</b> ponudbe.
 *       example: 673fc07e685d1be5450fb10b
 *      ime:
 *       type: string
 *       description: <b>Ime</b> ponudnika.
 *       example: Jožica Novak
 *      datum:
 *       type: string
 *       description: <b>Čas</b> objave ponudbe.
 *       example: 2024-11-20T16:06:16.416Z
 *      imam:
 *       type: array
 *       items:
 *        type: string
 *       description: <b>Produkti</b>, ki jih ponudnik <b>ima</b>.
 *       example:
 *        - 10 sadik ledenke
 *        - 5 sadik radiča
 *      iscem:
 *       type: array
 *       items:
 *        type: string
 *       description: <b>Produkti</b>, ki jih ponudnik <b>išče</b>.
 *       example:
 *        - sadike jagode
 *      sporocilo:
 *       type: string
 *       description: Morebitno <b>sporočilo</b>, ki ga ponudnik doda ponudbi.
 *       example: 'Lep dan!'
 */

// Shema za ponudbe na trznici (enolicni identifikator generira MongoDB in je oblike _id)
const ponudbeShema = new mongoose.Schema({
    ime: {type: String, required: true},
    datum: {type: Date, "default": Date.now},
    imam: {type: [String]},
    iscem: {type: [String]},
    sporocilo: {type: String}
});

export default mongoose.model("Ponudba", ponudbeShema, "Ponudbe");