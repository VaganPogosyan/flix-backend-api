const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    profiles: [
      {
        name: {
          type: String,
          required: [true, "Name is required"],
        },
        color: {
          type: String,
        },
        watch_list: [
          {
            movie_id: {
              type: String,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
