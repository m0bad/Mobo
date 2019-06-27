const express = require("express");
const router = express.Router({ mergeParams: true });
const { isLoggedIn, isInstructor, isTeamMember } = require("../middlewares");
const {
  getTeams,
  getMembers,
  createTeam,
  deleteTeam,
  addUser,
  deleteUser
} = require("../controllers/team");

// prefix : /api/teams/:userId

// list user teams
router.get("/", isLoggedIn, getTeams);
// create new team
router.post("/", isLoggedIn, createTeam);
// list members of a team
router.get("/:teamId/members", isLoggedIn,  getMembers);
// delete a team
router.delete("/:teamId", isLoggedIn, isInstructor, deleteTeam);
// add user to team
router.post("/:teamId/:userToAddId", isLoggedIn, isInstructor, addUser);
// delete user from team
router.delete("/:teamId/:userToRemoveId", isLoggedIn, isInstructor, deleteUser);

module.exports = router;
