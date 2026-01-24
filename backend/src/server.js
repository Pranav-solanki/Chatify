import express from "express";
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
dotenv.config();
import path from "path";

import authroutes from "./routes/auth.route.js";
import { connectDB } from "./libs/db.js";
const PORT = process.env.PORT || 3000;
const app = express();
// app.use(cors());
app.use(express.json());
app.use(cookieParser());
const __dirname = path.resolve();

// app.get("/",(req,res)=>{
//     res.send("Home");
// })
app.use("/api/auth", authroutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
//hello its updated
app.listen(PORT, () => {
  console.log("Server running on PORT:", PORT);
  connectDB();
});
