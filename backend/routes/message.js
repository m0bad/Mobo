const express = require("express");
const router = express.Router({ mergeParams: true });
const { sendMessage } = require("../controllers/message");

router.post("/", sendMessage);

module.exports = router;
