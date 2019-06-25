const db = require("../models");

exports.getTeams = async (req, res, next) => {
  try {
    let user = await db.User.findById(req.params.userId);
    let result = [];
    let userTeams = user.teams.map(async t => {
      let team = await db.Team.findById(t);
      result.push(team);
    });
    await Promise.all(userTeams);
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};

exports.createTeam = async (req, res, next) => {
  try {
    let creator = await db.User.findById(req.params.userId);
    const { name, imageUrl, githubRepo } = req.body;
    let team = await db.Team.create({
      name,
      imageUrl,
      githubRepo
    });
    // add the user to team instructors
    team.instructors.push(creator);
    await team.save();
    // add the team to user teams []
    creator.teams.push(team);
    await creator.save();
    let instructor_name = creator.username;
    return res.status(200).json({
      name,
      githubRepo,
      instructor_name
    });
  } catch (err) {
    return next(err);
  }
};

exports.deleteTeam = async (req, res, next) => {
  try {
    // NOTE : don't use findByIdAndRemove
    // it won't work with the pre method (in team.js model file)
    let team = await db.Team.findById(req.params.teamId);
    await team.remove();
    return res.status(200).json(team);
  } catch (err) {
    return next(err);
  }
};

exports.addUser = async (req, res, next) => {
  try {
    let team = await db.Team.findById(req.params.teamId);
    let user = await db.User.findById(req.params.userToAddId);
    team.students.push(user);
    await team.save();
    user.teams.push(team);
    await user.save();
    return res.status(200).json(team);
  } catch (err) {
    return next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    let team = await db.Team.findById(req.params.teamId);
    let user = await db.User.findById(req.params.userToRemoveId);
    // team.student.filter(student => student._id !== req.params.userToRemoveId);
    team.students.remove(user);
    await team.save();
    user.teams.remove(team);
    await user.save();
    return res.status(200).json(team);
  } catch (err) {
    return next(err);
  }
};
