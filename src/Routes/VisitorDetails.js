const express = require("express");
const router = express.Router();
const VisitorDetailsModel = require("../moongose/Schema/LoginDetais").VisitorDetailsModel;

 async function createVisitor(req, res) {
    const { email, walletAddress } = req.body;
    const visitorDetails = new VisitorDetailsModel({
      email: email,
      walletAddress: walletAddress,
    });
    visitorDetails.save((err, newCriden) => {
      if (err) {
        res.send(err);
      } else {
        res.send(newCriden);
      }
    });
}


router.post("/create", createVisitor);

module.exports = router;