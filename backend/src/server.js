import express from "express"
import dotenv from "dotenv";
dotenv.config();
import path from "path";

import authroutes from "./routes/auth.route.js"
const PORT=process.env.PORT || 3000;
const app=express();
const __dirname=path.resolve();

// app.get("/",(req,res)=>{
//     res.send("Home");
// })
app.use("/api/auth",authroutes);

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get(/.*/,(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/dist/index.html"))
    })
}


app.listen(PORT,()=>{
    console.log("Server running on PORT:",PORT);
})