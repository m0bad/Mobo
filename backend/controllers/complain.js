const db = require("../models");


exports.sendComplain = async (req, res, next) => {
  try {
    const complain = await db.Complain.create({
      text: req.body.text,
      sender: req.params.studentId,
      reciever: req.params.instructorId,
      room: req.params.teamId
    });
    console.log(req.params.studentId);
    console.log(req.params.teamId);
    const user = await db.User.findById(req.params.studentId);
    const team = await db.Team.findById(req.params.teamId);
    user.complains.push(complain._id);
    await user.save();
    team.complains.push(complain._id);
    await team.save();
    return res.status(200).json(complain);
  } catch (err) {
    return next(err);
  }
};
