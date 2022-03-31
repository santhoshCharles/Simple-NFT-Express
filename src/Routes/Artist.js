const express = require("express");
const router = express.Router();
const ArtistModel = require("../moongose/Schema/ArtistListModel");
const Helper = require("../Helper/Helper");
const escapeRegex = Helper.escapeRegex;
const config = require("../Config/Config");
const PAGE_SIZE = config.ARTIST_PAGE_SIZE;

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
  const artistList = await ArtistModel.find()
    .limit(PAGE_SIZE)
    .skip((pageNumber - 1) * PAGE_SIZE)
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