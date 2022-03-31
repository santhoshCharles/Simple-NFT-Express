const express = require("express");
const router = express.Router();
const AdminUserDetailModel =
  require("../moongose/Schema/LoginDetais").AdminUserDetailModel;
const AuthorDetailsModel =
  require("../moongose/Schema/LoginDetais").AuthorDetailsModel;

async function createUserDetails(req, res) {
  const { firstName, lastName, mobileNumber, type, email, userName, genres } = req.body;
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
        genres: genres
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
  //console.log('id, payload', id, payload)
  try {
    const updateUser = await AdminUserDetailModel.findByIdAndUpdate(id, {
      $set: payload,
    });
    res.send(payload);
  } catch (err) {
    console.log("err", err);
    res.send(err);
  }
}

router.post("/create", createUserDetails);
router.post("/edit", editUserDetails);

module.exports = router;
