const express=require('express');
const app=express();

const userModel=require("./models/user");
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());






app.get('/',(req,res)=>{
    res.render("index");
    



})
app.post('/create',(req,res)=>{

})





app.listen(3000);
