const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },

    email: {
      type: String,
      unique: true,
    },

    phone_number: {
      type: String,
      unique: true,
      required: [true, "Please add provide a phone number"],
    },

    role: {
      type: String,
      enum: ["super_admin", "admin", "customer", "rider", "laundry_man"],
      default: "customer",
    },

    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.comparePassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

module.exports = mongoose.model("User", userSchema);
