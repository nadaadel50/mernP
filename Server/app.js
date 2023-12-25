// CREATE SERVER
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())
const _PORT = 3001;


// CONNECT TO DB 
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/project")

// USER MODEL
const UserModel = require('./models/Users')


// GET REQUEST
app.get("/", async(req, res)=>{
    const users = await UserModel.find();
    res.json(users)
})

// CREATE USER
app.post("/createUser", async(req, res)=>{
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.json(req.body)
})

app.listen(_PORT, ()=>{
    console.log("Server Works Well!")
})
