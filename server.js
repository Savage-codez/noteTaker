var express = require("express");
var path = require("path");
var connection = require("./db/connection");

var app = express();
var PORT = process.env.PORT||8080; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/addnote", function(req, res) {
  res.sendFile(path.join(__dirname, "public/addnote.html"));
});


app.get("/notes", function(req, res) {
  connection.query("SELECT * FROM notes", function(err, dbNotes) {
    res.json(dbNotes);
    console.log("connect")
  });
});

app.post("/addnote", function(req, res) {
  console.log("req.body:", req.body);

  connection.query("INSERT INTO notes SET ?", req.body, function(err, result) {
    if (err) throw err;

    res.json(result);
  });
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

