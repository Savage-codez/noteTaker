var express = require("express");
var path = require("path");
var connection = require("./db/connection");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "search.html"));
});

app.get("/addnote", function(req, res) {
  res.sendFile(path.join(__dirname, "addnote.html"));
});

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/notes", function(req, res) {
  connection.query("SELECT * FROM notes", function(err, dbNotes) {
    res.json(dbNotes);
  });
});

// app.get("/api/n/:character", function(req, res) {

//   connection.query("SELECT * FROM notes WHERE name = ? LIMIT 1", [req.params.notes], function(err, dbNotes) {
//     if (err) throw err;

//     if (dbNotes[0]) {
//       res.json(dbNotes[0]);
//     } else {
//       res.json(null);
//     }
//   });
// });

app.post("/notes", function(req, res) {
  console.log("req.body:", req.body);

  connection.query("INSERT INTO notes SET ?", req.body, function(err, result) {
    if (err) throw err;

    res.json(result);
  });
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

