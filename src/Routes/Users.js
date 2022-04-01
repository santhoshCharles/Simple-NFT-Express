const express = require("express");
const router = express.Router();
const AdminUserDetailModel =
  require("../moongose/Schema/LoginDetais").AdminUserDetailModel;
const AuthorDetailsModel =
  require("../moongose/Schema/LoginDetais").AuthorDetailsModel;

async function createUserDetails(req, res) {
  const { firstName, lastName, mobileNumber, type, email, userName, genres, bio } = req.body;
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
        bio: bio
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
  let updateUser ;
  try {
    switch (payload.type) {
      case "admin":
        updateUser = await AdminUserDetailModel.findByIdAndUpdate(id, {
          $set: payload,
        });
      break;
      case "author":
        console.log('id, payload', id, payload)
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

router.post("/create", createUserDetails);
router.post("/edit", editUserDetails);

module.exports = router;
