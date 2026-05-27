const mongoose = require("mongoose");
const chat=require("./models/chat.js");
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Whatsapp");
}

let allchats=[
 {
    from:"neha",
    to:"priya",
    msg:"send me your exam sheet ",
    created_at:new Date(),
},
 {
    from:"akash",
    to:"ansh",
    msg:"padh lo ",
    created_at:new Date(),
}, 
{
    from:"jay",
    to:"priya",
    msg:"namsate ",
    created_at:new Date(),
},
 {
    from:"shubhi",
    to:"akash",
    msg:"i like you  ",
    created_at:new Date(),
},
 {
    from:"aman",
    to:"ankit",
    msg:"send me your exam marks ",
    created_at:new Date(),
},
 {
    from:"shubham",
    to:"shivam",
    msg:"send money ",
    created_at:new Date(),
}

];
chat.insertMany(allchats);