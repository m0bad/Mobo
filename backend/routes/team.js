const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn, isInstructor } = require("../middlewares");
const {
  createTeam,
  deleteTeam,
  addUser,
  deleteUser
} = require("../controllers/team");

// prefix: /api/team/:userId

router.post("/", isLoggedIn, createTeam);
router.delete("/:teamId", isLoggedIn, isInstructor, deleteTeam);
router.post("/:teamId/:userToAddId", isLoggedIn, isInstructor, addUser);
router.delete("/:teamId/:userToRemoveId", isLoggedIn, isInstructor, deleteUser);

module.exports = router;
