import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../libs/utils.js";
export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be at least 6 characters" });
    }
    const isemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!isemail.test(email)) {
      return res.status(400).json({ message: "Inavlid email" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      fullName,
      email,
      password: hashedpassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
      });
    } else {
      return res.status(400).json({ message: "Inavlid User data" });
    }
  } catch (error) {
    console.log("Error in signup controller");
    res.status(500).json({ message: "Internal server error" });
  }
};
