const express = require("express");
const router = express.Router({ mergeParams: true });
const { sendMessage, getMessages } = require("../controllers/message");
const { isLoggedIn, isTeamMember } = require("../middlewares");
// prfix : /api/teams/messages/:teamId/:userId

router.get("/", isLoggedIn, isTeamMember, getMessages);

router.post("/", isLoggedIn, isTeamMember, sendMessage);

module.exports = router;
