import mongoose from "mongoose";
var bcrypt = require("bcryptjs");

// define the schema for our user model
var userSchema = new mongoose.Schema({
  local: {
    email: String,
    password: String
  }
});

// generating a hash
userSchema.methods.generateHash = function(password: any) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password: any) {
  return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model("User", userSchema);
