import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profilPic: {
      type: String,
      default: "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?semt=ais_hybrid&w=740&q=80",
    },
  },
  { timestamps: true },
);
const User = mongoose.model("User", userSchema);
export default User;
