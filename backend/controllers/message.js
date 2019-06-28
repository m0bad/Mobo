const db = require("../models");
exports.getMessages = async (req, res, next) => {
  try {
    const team = await db.Team.findById(req.params.teamId);
    let result = [];
    const fetchMessage = async message => {
      let Message = await db.Message.findById(message);
      result.push(Message);
    };

    const getMessages = async () => {
      return await Promise.all(
        team.messages.map(message => fetchMessage(message))
      );
    };

    await getMessages();
    // sort the messages by their sent date
    result = result.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

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
