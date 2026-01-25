import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../libs/utils.js";
import { sendWelcomeEmail } from "../emails/emailHandlers.js";
import cloudinary from "../libs/cloudinary.js";
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
      await newUser.save();
      generateToken(newUser._id, res);
      //email send
      try {
        sendWelcomeEmail(newUser.email);
      } catch (error) {
        console.error("Error in email sending", error);
      }
      res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilPic: newUser.profilPic,
      });
    } else {
      return res.status(400).json({ message: "Inavlid User data" });
    }
  } catch (error) {
    console.log("Error in signup controller");
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Inavalid credentials" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Inavlid Credentials" });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Inavlid Credentials" });

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilPic,
    });
  } catch (error) {
    console.error("Error in login controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge:0 });
  res.status(200).json({ message: "Logout successfully" });
};

export const updateProfile = async (req, res) => {
  try {
    const { profilPic } = req.body;
    if (!profilPic)
      return res.status(400).json({ message: "Profile pic is required" });
    const userId = req.user._id;
    const uploadresponse = await cloudinary.uploader.upload(profilPic);
    const updated = await User.findByIdAndUpdate(
      userId,
      { profilPic: uploadresponse.secure_url },
      { new: true },
    ).select("-password");
    res.status(200).json(updated);
  } catch (error) {
    console.error("Problem in pic update", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
