const mongose = require("mongoose");
const ARTIST_MODEL = require("../properties").ARTIST_MODEL;

const ArtistSchema = mongose.Schema({
    UserName: { type: String, required: true},
    Email: { type: String, required: true},
    WalletAddress: String
})

const ArtistModel = mongose.model(ARTIST_MODEL, ArtistSchema);

module.exports = ArtistModel;
