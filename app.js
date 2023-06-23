const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items = ["Cooking"];

app.get("/",function(req,res)
{
    var date = new Date();
    var format = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var day = date.toLocaleDateString("en-US",format);


    res.render("index",({day:day,total_items:items}));

})

app.post("/",function(req,res)
{
    var item = req.body.todo_item;
    if(item !== ""){
        items.push(item);
    }
    res.redirect("/");
})
app.listen(5000,function()
{ 
    console.log("Server is running in the port number 5000.")
})