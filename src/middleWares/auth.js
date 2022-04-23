const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const authToken = function (req, res, next) {
  try {
    let id = req.params.userId;
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).send({
        msg: "Invalid userId",
      });
    }

    let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"];
    if (!token) {
      return res.send({
        msg: "Token is required",
      });
    }

    let tokenverify = jwt.verify(token, "functionup-thorium");

    if (tokenverify.userId !== id) {
      return res.status(401).send({
        msg: "You aren't authorized to perform this action",
      });
    }

    next();

  } catch (error) {
    res.status(500).send({
     msg: error.message
    })
    console.log(error.message);
  }
};


module.exports.authToken = authToken;
