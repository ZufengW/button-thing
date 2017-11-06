const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// tells express to serve contents of public directory
app.use(express.static("public"));
app.use(bodyParser.urlencoded({"extended":true}));
// tells express to expect ejs files. No longer need to put .ejs in filenames
app.set("view engine", "ejs");

// home page
app.get("/", function(req, res){
  res.render("home");
});

// index route
app.get("/buttons", function(req, res){
  res.render("index");
});

// new route
app.get("/buttons/new", function(req, res){
  res.render("new");
});

// show route
app.get("/buttons/:id", function(req, res){
  res.send("/buttons/" + req.params.id);
});

// create route
app.post("/buttons", function(req, res){
  console.log("Post request to /buttons. char="+req.body.char + " colour="+req.body.colour);
  // may want to check format
  res.redirect("/buttons");
});


app.listen(3000, function(){
  console.log("Server has started. Listening on port 3000");
  // http://localhost:3000/
});
