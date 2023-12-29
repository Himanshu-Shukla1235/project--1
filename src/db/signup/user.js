const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "this email id is alreay exist"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },

  phone: {
    type: Number,
    required: true,
    unique: [true, "already exist"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: (value) => /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(value),
      message:
        "Password must be at least 8 characters long and contain at least one letter and one number.",
    },
  },
  confirmpassword: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: (value) => /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(value),
      message:
        "Password must be at least 8 characters long and contain at least one letter and one number.",
    },
  },
  Token: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

user = new mongoose.model("user", userSchema);

module.exports = user;
