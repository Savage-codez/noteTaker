// import path module
const path = require("path");

// export function that creates routes (will be imported/executed in server.js)
module.exports = function(app) {

  // set up GET route to serve home page
  app.get("/", function(req, res) {
    // send home page back to client
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // set up GET route for adding reservations (/add)
  app.get("/addnote", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/addnote.html"));
  });

  // set up GET route for displaying all tables
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

}