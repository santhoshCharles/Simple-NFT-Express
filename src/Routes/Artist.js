const express = require("express");
const router = express.Router();
const ArtistModel = require("../moongose/Schema/ArtistList");
const Helper = require("../Helper/Helper");
//const ArtistListModel = require("../moongose/Schema/ArtistList");
const escapeRegex = Helper.escapeRegex;

function saveArtistList(req, res) {
  const { UserName, Email, WalletAddress } = req.body;
  const artistDetails = new ArtistModel({
    UserName: UserName,
    Email: Email,
    WalletAddress: WalletAddress,
  });
  artistDetails.save((err, newCriden) => {
    if (err) {
      res.send(err);
    } else {
      res.send(newCriden);
    }
  });
}

let artistCount = null;

async function getArtistList(req, res) {
  const { pageNumber } = req.body;
  const pageLimit = 10;
  const artistList = await ArtistModel.find()
    .limit(pageLimit)
    .skip((pageNumber - 1) * 10)
    .exec();
  artistCount =
    artistCount === null ? await ArtistModel.count({}) : artistCount;
  res.send({ artistList, artistCount });
}

async function searchArtistList(req, res) {
  const { UserName } = req.body;
  const regex = new RegExp(escapeRegex(UserName));
  const artistResult = await ArtistModel.find({
    $or: [{ UserName: regex }, { Email: regex }],
  });
  res.send(artistResult);
}

router.post("/", saveArtistList);
router.post("/list", getArtistList);
router.post("/search", searchArtistList);

module.exports = router;