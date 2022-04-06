const express = require("express");
const router = express.Router();
const GenresModel = require("../moongose/Schema/GenresModel");
const escapeRegex = require("../Helper/Helper").escapeRegex;
const PAGE_SIZE = require("../Config/Config").GENRES_PAGE_SIZE;
const { checkAdminAuth } = require("../Helper/MiddleWare");
const { checkAuth } = require("../Helper/MiddleWare");


async function getGenresList(req, res) {
  try {
  const { pageNumber } = req.body;

  const genresList = await GenresModel.find()
    .limit(PAGE_SIZE)
    .skip((pageNumber - 1) * PAGE_SIZE)
    .exec();
  res.send( genresList );
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
  const  id  = req.body?.payload?.id;
  try {
    const deleteGenres = await GenresModel.deleteOne({ _id: id });
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

async function getGenresCount(req, res) {
  try {
    const genresCount = await GenresModel.count({});
    res.send({genresCount});
  } catch(err) {
    console.log('err', err);
  }
}


router.post("/list",checkAuth, getGenresList);
router.post("/genresList",[checkAuth, checkAdminAuth], addGenresList);
router.put("/genresList",[checkAuth,checkAdminAuth], editGenresList);
router.delete("/genresList",[checkAuth,checkAdminAuth], deleteGenresList);
router.post("/search/genres",checkAuth, searchGenres);
router.get("/count",checkAuth, getGenresCount);

module.exports = router;
