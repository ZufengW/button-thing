const express = require('express');
const app = express();

app.get("/speak", function(req, res){
  console.log("wolo");
  res.send("/speak");
});

app.get("/", function(req, res){
  res.send("root");
});


app.listen(3000, function(){
  console.log("Server has started. Listening on port 3000");
  // http://localhost:3000/
});
