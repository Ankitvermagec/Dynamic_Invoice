const hbs=require("hbs")
const path=require("path")
const express=require("express");
const app=express()

app.use(express.static(path.join(__dirname, '/public'))); 
app.set('view engine', 'hbs');

app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.listen(4500,(err)=>{
    console.log("connected")
})




