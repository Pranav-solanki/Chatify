import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import path from "path";
import cors from "cors";
import authroutes from "./routes/auth.route.js";
import messageroutes from "./routes/message.route.js";
import { connectDB } from "./libs/db.js";
const PORT = process.env.PORT || 3000;
import { app, server } from "./libs/socket.js";
// const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "https://chatify--pranav39645.replit.app",
];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
app.use(express.json({ limit: "40mb" }));
// app.use(express.urlencoded({ limit: "40mb", extended: true }));
app.use(cookieParser());
const __dirname = path.resolve();

// app.get("/",(req,res)=>{
//     res.send("Home");
// })

app.use("/api/auth", authroutes);
app.use("/api/messages", messageroutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
//hello its updated
server.listen(PORT, () => {
  console.log("Server running on PORT:", PORT);
  connectDB();
});
