const express = require("express");
app = express();
const path = require("path");

//settings

app.set("port",process.env.PORT || 3000);
app.set("views",path.join(__dirname,"views"));
app.engine("html",require("ejs").renderFile);
app.set("view engine", "ejs");

//midllewares

//routes
app.use(require("./routes/index.js"));

//static files
app.use(express.static(path.join(__dirname,'public')));

//server listening
app.listen(app.get("port"), ()=>{
    console.log("Server on Port: ",app.get("port"));
})