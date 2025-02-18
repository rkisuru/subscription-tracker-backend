import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters long"],
      maxLength: [50, "Name must be at most 50 characters long"],
    },
    email: {
      type: String,
      required: [true, "User email is required"],
      trim: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "User password is required"],
      minLength: [4, "Password must be at least 6 characters long"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
