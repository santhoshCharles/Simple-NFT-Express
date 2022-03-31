const mongose = require("mongoose");
const GENRES_MODEL = require("../properties").GENRES_MODEL;

const GenresSchema = mongose.Schema({
    Title: {type: String, required: true},
    des: String,
})

const GenresModel = mongose.model(GENRES_MODEL, GenresSchema);

module.exports = GenresModel;
