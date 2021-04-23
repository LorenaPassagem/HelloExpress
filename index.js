const express = require("express");
const app = express(); 


// This function send a file HTML to main page
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.listen(8801, function(){
    console.log("RUN !!! RUN !!!")
});

