const express = require("express");
const router = express.Router({mergeParams: true});

const {
  createTeam,
  deleteTeam,
  addUser,
  deleteUser
} = require("../controllers/team");

// prefix: /api/team/:userId

router.post("/", createTeam);
router.delete("/:teamId", deleteTeam);
router.post("/:teamId/:userToAddId", addUser);
router.delete("/:teamId/:userToRemoveId", deleteUser);

module.exports = router;
