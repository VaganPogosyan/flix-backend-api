const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      required: true,
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
  {
    timestamps: true,
  }
);

const profileModel = mongoose.model("profile", profileSchema);

module.exports = profileModel;
