const express = require("express");
const router = express.Router({ mergeParams: true });
const { sendComplain } = require("../controllers/complain");

router.post("/", sendComplain);

module.exports = router;
