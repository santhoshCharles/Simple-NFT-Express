require('dotenv').config()

const express = require("express");
const router = express.Router();
const LoginModels = require("../moongose/Schema/LoginDetais");
const LoginDetailsModel = LoginModels.LoginDetailsModel;
const AdminUserDetailModel = LoginModels.AdminUserDetailModel;
const bcrypt = require("bcrypt");
const { newToken, validateRefreshToken } = require("../Helper/Auth");
const { checkAdminAuth, loginMidleware } = require("../Helper/MiddleWare");

async function createAdminLogin(req, res) {
    const { email, password, type } = req.body;
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
        const { token, refreshToken } = newToken({email: email, type: type});
        res.send({token, refreshToken})
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
        const { token, refreshToken } = newToken({email: email, type: usersDetails[0].type});
        res.send({token: token, usersDetails: usersDetails[0], refreshToken});
      }
    });
}

function sendNewToken(req, res) {
  //const { email, type } = req.body;
  try {
    //console.log('send new token', req.headers, req.headers["refreshtoken"])
    const newToken = validateRefreshToken(req.headers["refreshtoken"].split(" ")[1]);
    if(newToken === null ) {
      res.statusCode = 401;
      res.send({ message: "Unauthorized User" });
    } else {
      res.send(newToken)
    }
  } catch(err) {
    console.log('catch', err)
    res.sendStatus(403);
  }
}

router.post("/signin",checkAdminAuth, createAdminLogin);
router.post("/", loginMidleware, login);
router.post("/newToken", sendNewToken)

module.exports = router;