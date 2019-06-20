const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  university: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  } //,
  // teams: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Team"
  //   }
  // ]
});

userSchema.plugin(uniqueValidator);

userSchema.pre("save", async function(next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }
    let hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword, next) {
  try {
    let isMatch = bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    return next(err);
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
