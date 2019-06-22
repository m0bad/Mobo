const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn, isInstructor } = require("../middlewares");
const {
  createTeam,
  deleteTeam,
  addUser,
  deleteUser
} = require("../controllers/team");

// create new team
router.post("/", isLoggedIn, createTeam);
// delete a team
router.delete("/:teamId", isLoggedIn, isInstructor, deleteTeam);
// add user to team
router.post("/:teamId/:userToAddId", isLoggedIn, isInstructor, addUser);
// delete user from team
router.delete("/:teamId/:userToRemoveId", isLoggedIn, isInstructor, deleteUser);

module.exports = router;
