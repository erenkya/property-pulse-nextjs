import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email already exist"],
      required: [true, "Email is required"],
    },
    username: {
      type: String,
      unique: [true, "Username already exist"],
      required: [true, "Username is required"],
    },
    username: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Property",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const User = models.User || model("User", UserSchema);

export default User;
