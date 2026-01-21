import express from "express";
import { signup } from "../controllers/signup.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.get("/Login", (req, res) => {
  res.send("Login point");
});
router.get("/Logout", (req, res) => {
  res.send("Logout point");
});

export default router;
