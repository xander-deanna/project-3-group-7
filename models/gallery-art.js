const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artSchema = new Schema({
    id: { type: String, required: true},
    title: { type: String, required: true },
    artist: { type: String, required: true },
    date: { type: String, required: true },
    medium: { type: String, required: true }
});

const Artworks = mongoose.model("Artworks", artSchema);

module.exports = Artworks;