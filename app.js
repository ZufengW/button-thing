const express = require('express');
const app = express();

// tells express to serve contents of public directory
app.use(express.static("public"));
// tells express to expect ejs files. No longer need to put .ejs in filenames
app.set("view engine", "ejs");

app.get("/speak", function(req, res){
  console.log("wolo");
  res.send("/speak");
});

// Routes

app.get("/", function(req, res){
  res.render("home");
});


app.listen(3000, function(){
  console.log("Server has started. Listening on port 3000");
  // http://localhost:3000/
});
