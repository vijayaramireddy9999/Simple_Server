const express =require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("This is main root BOSS")
})

app.get("/home",(req,res)=>{
    res.send("Welcome to home page")
})

app.get("/about",(req,res)=>{
    res.send("This page is all about Me")
})

app.listen(4500,()=>{
    console.log("server running successfully on port no : 4500")
})