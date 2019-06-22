const express = require("express");
const router = express.Router({ mergeParams: true });
const { sendComplain } = require("../controllers/complain");
const { isTeamMember } = require("../middlewares");

router.post("/", isTeamMember, sendComplain);

module.exports = router;
