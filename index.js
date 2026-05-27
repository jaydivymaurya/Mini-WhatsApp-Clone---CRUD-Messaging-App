const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat=require("./models/chat.js");
const  mv=require("method-override");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));//serve hongi static files public se,
app.use(express.urlencoded({ extended: true }));//parse post data from form new.ejs
app.use(mv("_method"));
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

// let chat1=new chat({
//     from:"neha",
//     to:"priya",
//     msg:"send me your exam sheet ",
//     created_at:new Date(),
// }

// );
//  chat1.save().then((res)=>{
//     console.log(res);
//  })
//  .catch((err)=>{
//     console.log(err);
//  })

app.get("/chats",async(req,res)=>{  //show all the chats
   let chats=await Chat.find();
   //console.log(chats);
   res.render("index.ejs",{chats});
});

app.post("/chats",(req,res)=>{
   let {from,to ,msg}=req.body;
    let newchat=new Chat({
      from:from,
      to:to,
      msg:msg,
      created_at:new Date()
    });
    newchat
    .save()
    .then((data)=>{
      console.log("chat was saved");
    })
    .catch((err)=>{
      console.log(err);
    })
    //console.log(newchat);
    res.redirect("/chats");
});
// edit route
app.get("/chats/:id/edit",async(req,res)=>{
  let {id}=req.params;
  //console.log(id);
  let data= await Chat.findById(id);
  res.render("edit.ejs",{data});
});
//update route 
app.put("/chats/:id",async(req,res)=>{
      let {id}=req.params;
      let {msg:newmsg}=req.body;
      console.log("update route");
      let chatu=await Chat.findByIdAndUpdate(id,{msg:newmsg},{runValidators:true},{new:true});
     console.log(chatu);
      res.redirect("/chats");
});
 //destroye route
app.delete("/chats/:id",async(req,res)=>{
      let {id}=req.params;
      
      await Chat.findByIdAndDelete(id);
     
      console.log("deleted message");
      res.redirect("/chats");
});
 //new  route 
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});
//root 
app.get("/", (req, res) => {
  res.redirect("/chats")
 // res.send("working root");
   
});

app.listen(8080, () => {

   console.log("app is listening");
   console.log(`Server running at http://localhost:8080`);
});