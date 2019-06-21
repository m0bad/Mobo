const mongoose = require("mongoose");
const User = require("./user");
const Message = require("./message");
const Complain = require("./complain");

const teamSchema = new mongoose.Schema({
  githubRepo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  instructors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
    }
  ],
  complains: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Complain"
    }
  ]
});

const clearUserRecords = async user => {
  let _user = await User.findById(user);
  _user.teams.remove(this.id);
  await _user.save();
};

const clearMessageRecords = async message => {
  let _message = await Message.findByIdAndRemove(message);
  await _message.save();
};

const clearComplainRecords = async complain => {
  let _complain = await Complain.findByIdAndRemove(complain);
  await _complain.save();
};

teamSchema.pre("remove", async function(next) {
  try {
    // clear the students records
    await Promise.all(
      this.students.map(student => {
        clearUserRecords(student);
      })
    );
    // clear the instructors records
    await Promise.all(
      this.instructors.map(instructor => {
        clearUserRecords(instructor);
      })
    );
    // clear the messages record
    await Promise.all(
      this.messages.map(message => {
        clearMessageRecords(message);
      })
    );
    // clear the complains record
    await Promise.all(
      this.complains.map(complain => {
        clearComplainRecords(complain);
      })
    );

    return next;
  } catch (err) {
    return next(err);
  }
});

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
