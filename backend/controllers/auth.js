const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  try {
    let user = await db.User.create(req.body);
    let { username, id, university } = user;
    let token = jwt.sign(
      {
        id,
        username,
        university
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      username,
      university,
      id,
      token
    });
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Sorry, that username and/or emil is already taken";
    }
    return next({
      status: 400,
      message: err.message
    });
  }
};

exports.signin = async (req, res, next) => {
  try {
    let user = await db.User.findOne({
      email: req.body.email
    });
    let { username, id, university } = user;
    let isMatch = await user.comparePassword(req.body.password);
    if (isMatch) {
      let token = jwt.sign(
        {
          id,
          username,
          university
        },
        process.env.SECRET_KEY
      );
      return res.status(200).json({
        username,
        university,
        id,
        token
      });
    } else {
      return next({
        status: 400,
        message: "Invalid Email/Password"
      });
    }
  } catch (err) {
    return next({ status: 400, message: 'Invalid Email/Password'});
  }
};
