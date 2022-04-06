const express = require("express");
const router = express.Router();
const AdminUserDetailModel =
  require("../moongose/Schema/LoginDetais").AdminUserDetailModel;
const AuthorDetailsModel =
  require("../moongose/Schema/LoginDetais").AuthorDetailsModel;
const { checkAdminAndArtistAuth } = require("../Helper/MiddleWare");
const { verifyToken } = require("../Helper/Auth");
const { checkAuth } = require("../Helper/MiddleWare");

async function createUserDetails(req, res) {
  const {
    firstName,
    lastName,
    mobileNumber,
    type,
    email,
    userName,
    genres,
    bio,
  } = req.body;
  let userDetails;
  switch (type) {
    case "admin":
      userDetails = new AdminUserDetailModel({
        firstName: firstName,
        lastName: lastName,
        mobileNumber: mobileNumber,
        type: type,
        email: email,
      });
      break;
    case "author":
      userDetails = new AuthorDetailsModel({
        firstName: firstName,
        lastName: lastName,
        mobileNumber: mobileNumber,
        type: type,
        email: email,
        userName: userName,
        genres: genres,
        bio: bio,
      });
      break;
  }

  userDetails.save((err, newCriden) => {
    if (err) {
      res.send(err);
    } else {
      res.send(newCriden);
    }
  });
}

async function editUserDetails(req, res) {
  const { id, payload } = req.body;
  let updateUser;
  try {
    switch (payload.type) {
      case "admin":
        updateUser = await AdminUserDetailModel.findByIdAndUpdate(id, {
          $set: payload,
        });
        break;
      case "author":
        updateUser = await AuthorDetailsModel.findByIdAndUpdate(id, {
          $set: payload,
        });
        break;
    }
    res.send(updateUser);
  } catch (err) {
    console.log("err", err);
    res.send(err);
  }
}

async function sendUserDetails(req, res) {
  try{
  const user = verifyToken(req.headers["authorization"].split(" ")[1]);
  const userDetails = await AdminUserDetailModel.find({email: user.email});
  res.send({usersDetails: userDetails[0]})
  } catch(err) {
    console.log('err', err)
    res.status(401).send({message: "User not found"});
  }
}

router.post("/create", [checkAuth, checkAdminAndArtistAuth], createUserDetails);
router.post("/edit", [checkAuth, checkAdminAndArtistAuth], editUserDetails);
router.post("/details", [checkAuth, checkAdminAndArtistAuth], sendUserDetails);

module.exports = router;
