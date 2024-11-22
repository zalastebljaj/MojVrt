import mongoose from "mongoose";

// Shema za ponudbe na trznici (enolicni identifikator generira MongoDB in je oblike _id)
const ponudbeShema = new mongoose.Schema({
    ime: {type: String, required: true},
    datum: {type: Date, "default": Date.now},
    imam: {type: [String]},
    iscem: {type: [String]},
    sporocilo: {type: String}
});

export default mongoose.model("Ponudba", ponudbeShema, "Ponudbe");