const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const artSchema = new Schema({
    userId: { type: String, required: true },
    title: { type: String, required: true },
    artist: { type: String, required: true },
    date: { type: String, required: false },
    medium: { type: String, required: false },
    dimensions: { type: String, required: false },
    imgUrl: { type: String, required: false }
});

const Artworks = mongoose.model("Artworks", artSchema);

module.exports = Artworks;