require("dotenv").config();
const jwt = require("jsonwebtoken");
const db = require("../models");

exports.isLoggedIn = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (decoded) {
        next();
      } else {
        return next({
          status: 401,
          messages: "Please Login First"
        });
      }
    });
  } catch (err) {
    return next({
      status: 401,
      messages: "Please Login First"
    });
  }
};

exports.isInstructor = async (req, res, next) => {
  try {
    const team = await db.Team.findById(req.params.teamId);
    let is_instructor = team.instructors.includes(req.params.userId);
    if (is_instructor) {
      return next();
    } else {
      return next({
        status: 401,
        message: "Unauthorized"
      });
    }
  } catch (err) {
    return next({
      status: 401,
      message: "Unauthorized"
    });
  }
};

// exports.isTeamMember = async (req, res, next) => {
//
// }
