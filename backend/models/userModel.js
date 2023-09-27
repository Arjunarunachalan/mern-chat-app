const mongoose = require("mongoose");

const userModel =
  ({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    pic: {
      type: String,
      require: true,
      defualt:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  });

  const user = mongoose.model("user",userModel)
  module.exports = user;