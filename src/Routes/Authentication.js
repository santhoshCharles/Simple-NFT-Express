const express = require("express");
const router = express.Router();
const LoginModels = require("../moongose/Schema/LoginDetais");
const LoginDetailsModel = LoginModels.LoginDetailsModel;
const AdminUserDetailModel = LoginModels.AdminUserDetailModel;
const bcrypt = require("bcrypt");

function loginMidleware(req, res, next) {
    try {
      const { email, password } = req.body;
      LoginDetailsModel.find({ email }, async (err, loginList) => {
        if (err) {
          console.log('err', err);
          res.statusCode = 401;
          res.send({ message: "Unauthorized User" });
        } else {
          const validPassword = await bcrypt.compare(
            password,
            loginList[0].password
          );
          if (validPassword) {
            next();
          } else {
            console.log('err', err);
            res.statusCode = 401;
            res.send({ message: "Unauthorized User" });
          }
        }
      });
    } catch (err) {
      console.log('err', err);
      res.statusCode = 401;
      res.send({ message: "Unauthorized User" });
    }
  }

async function createAdminLogin(req, res) {
    const { email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const loginDetails = new LoginDetailsModel({
      email: email,
      password: hashedPassword,
    });
    loginDetails.save((err, newCriden) => {
      if (err) {
        res.send(err);
      } else {
        res.send(newCriden);
      }
    });
}

function login(req, res) {
    const { email } = req.body;
    AdminUserDetailModel.find({ email }, (err, usersDetails) => {
      if (err) {
        console.log('err', err);
        res.statusCode = 500;
        res.send({ message: "Unable to Proccess your request" });
      } else {
        res.send(usersDetails[0]);
      }
    });
}

router.post("/signin", createAdminLogin);
router.post("/", loginMidleware, login);

module.exports = router;