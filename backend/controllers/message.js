const db = require("../models");

exports.sendMessage = async (req, res, next) => {
  try {
    const message = await db.Message.create({
      text: req.body.text,
      room: req.params.teamId,
      user: req.params.userId
    });
    const user = await db.User.findById(req.params.userId);
    const team = await db.Team.findById(req.params.teamId);
    user.messages.push(message._id);
    await user.save();
    team.messages.push(message._id);
    await team.save();
    return res.status(200).json(message);
  } catch (err) {
    return next(err);
  }
};
