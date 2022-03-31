const express = require("express");
const router = express.Router();
const GenresModel = require("../moongose/Schema/GenresModel");
const escapeRegex = require("../Helper/Helper").escapeRegex;
const PAGE_SIZE = require("../Config/Config").GENRES_PAGE_SIZE;

let genresCount = null;

async function getGenresList(req, res) {
  try {
  const { pageNumber } = req.body;
  console.log('pageNumber', pageNumber)

  const genresList = await GenresModel.find()
    .limit(PAGE_SIZE)
    .skip((pageNumber - 1) * PAGE_SIZE)
    .exec();
  genresCount =
    genresCount === null ? await GenresModel.count({}) : genresCount;
    console.log('getGenresList', genresList, genresCount)
  res.send({ genresList, genresCount });
  } catch(err) {
    console.log('err', err);
  }
}

const getAllGenres = async () => await GenresModel.find();

function addGenresList(req, res) {
  const { Title, des } = req.body;
  try {
    const genresDetails = new GenresModel({
      Title: Title,
      des: des,
    });
    genresDetails.save({}, async (err, newGenres) => {
      const genresList = await getAllGenres();
      res.send(genresList);
    });
  } catch (err) {
    res.statusCode = 401;
    res.send("Somthing going wrong");
  }
}

async function editGenresList(req, res) {
  const { id, payload } = req.body;
  console.log("id", id, payload, req.body);
  try {
    const updateGenres = await GenresModel.findByIdAndUpdate(id, {
      $set: payload,
    });
    const genresList = await getAllGenres();
    res.send(genresList);
  } catch (err) {
    res.statusCode = 401;
    res.send("Somthing going wrong");
  }
}

async function deleteGenresList(req, res) {
  const { id } = req.body.payload;
  try {
    const deleteGenres = await GenresModel.deleteOne({ _id: id });
    console.log("deleteGenres", deleteGenres);
    const genresList = await getAllGenres();
    res.send(genresList);
  } catch (err) {
    console.log("err", err);
    res.statusCode = 401;
    res.send("Somthing going wrong");
  }
}

const searchGenres = async (req, res) => {
  const { title } = req.body;
  const regex = new RegExp(escapeRegex(title));
  const genresResult = await GenresModel.find({ Title: regex });
  res.send(genresResult);
};

router.post("/list", getGenresList);
router.post("/genresList", addGenresList);
router.put("/genresList", editGenresList);
router.delete("/genresList", deleteGenresList);
router.post("/search/genres", searchGenres);

module.exports = router;
