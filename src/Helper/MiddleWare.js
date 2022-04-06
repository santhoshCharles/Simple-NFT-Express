const { verifyToken } = require("./Auth");
const LoginDetailsModel = require("../moongose/Schema/LoginDetais").LoginDetailsModel;
const bcrypt = require("bcrypt");

function checkAdminAuth(req, res, next) {
  try {
    const user = verifyToken(req.headers["authorization"].split(" ")[1]);
    switch (user.type) {
      case "admin":
        next();
        break;
      case "author":
        return res.status(403).send({ message: "unauthorized access" });
      case "visitor":
        return res.status(403).send({ message: "unauthorized access" });
    }
  } catch (err) {
    console.log("err", err);
  }
}

function checkAdminAndArtistAuth(req, res, next) {
  try {
    const user = verifyToken(req.headers["authorization"].split(" ")[1]);
    switch (user.type) {
      case "admin":
        next();
        break;
      case "author":
        next();
        break;
      case "visitor":
        return res.status(403).send({ message: "unauthorized access" });
    }
  } catch (err) {
    console.log("err", err);
  }
}

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

function checkAuth(req, res, next) {
    try {
      const user = verifyToken(req.headers["authorization"].split(" ")[1]);
      if(user !== null) next();
    } catch(err) {
        res.statusCode = 401;
        res.send({ message: "Token Expired" });
    }
} 

module.exports = {
  checkAdminAuth,
  checkAdminAndArtistAuth,
  loginMidleware,
  checkAuth
};
