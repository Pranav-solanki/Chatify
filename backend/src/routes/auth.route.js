import express from "express";
const router = express.Router();

router.get("/Login", (req, res) => {
  res.send("Login point");
});
router.get("/Signup", (req, res) => {
  res.send("Singup point");
});
router.get("/Logout", (req, res) => {
  res.send("Logout point");
});

export default router;
