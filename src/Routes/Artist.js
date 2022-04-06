const express = require("express");
const router = express.Router();
const ArtistModel = require("../moongose/Schema/LoginDetais").AuthorDetailsModel;
const Helper = require("../Helper/Helper");
const escapeRegex = Helper.escapeRegex;
const config = require("../Config/Config");
const PAGE_SIZE = config.ARTIST_PAGE_SIZE;
const { checkAuth } = require("../Helper/MiddleWare");

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

async function getArtistList(req, res) {
  const { pageNumber } = req.body;
  const artistList = await ArtistModel.find()
    .limit(PAGE_SIZE)
    .skip((pageNumber - 1) * PAGE_SIZE)
    .exec();
  
  res.send(artistList);
}

async function searchArtistList(req, res) {
  const { UserName } = req.body;
  const regex = new RegExp(escapeRegex(UserName));
  const artistResult = await ArtistModel.find({
    $or: [{ userName: regex }, { email: regex }],
  });
  res.send(artistResult);
}

async function getArtistCount(req, res) {
  try {
    const artistCount = await ArtistModel.count({});
    res.send({artistCount});
  } catch(err) {
    console.log('err', err);
  }
}


router.post("/", checkAuth, saveArtistList);
router.post("/list", checkAuth, getArtistList);
router.post("/search", checkAuth, searchArtistList);
router.get("/count", checkAuth, getArtistCount);

module.exports = router;