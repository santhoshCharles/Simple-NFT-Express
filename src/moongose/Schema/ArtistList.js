const mongose = require("mongoose");

const ArtistSchema = mongose.Schema({
    UserName: String,
    Email: String,
    WalletAddress: String
})

const ArtistModel = mongose.model("ArtistList", ArtistSchema);

module.exports = ArtistModel;
