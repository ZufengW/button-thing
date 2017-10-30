const express = require('express');
const app = express();

// tells express to serve contents of public directory
app.use(express.static("public"));
// tells express to expect ejs files. No longer need to put .ejs in filenames
app.set("view engine", "ejs");

// home page
app.get("/", function(req, res){
  res.render("home");
});

// index route
app.get("/buttons", function(req, res){
  res.send("get request to /buttons");
});

// new route
app.get("/buttons/new", function(req, res){
  res.send("get request to /buttons/new");
});

// show route
app.get("/buttons/:id", function(req, res){
  res.send("/buttons/:id");
});

// create route
app.post("/buttons", function(req, res){
  res.send("post request to /buttons");
});


app.listen(3000, function(){
  console.log("Server has started. Listening on port 3000");
  // http://localhost:3000/
});
