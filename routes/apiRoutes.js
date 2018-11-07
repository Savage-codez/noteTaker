
// import database connection from db folder
const db = require("../db/connection");

// export function that creates routes (will be imported/executed in server.js)
module.exports = function(app) {

// POST route that takes in data from client (in req.body) and inserts into database
app.post("/notes", function(req, res) {

    // get post data from req.body
    const notesData = req.body;

    // query database to find out how many people are on the list so we can decide if reservation should be on waitlist or not
    db.query("SELECT * FROM notes", (err, DBnotes) => {

      
      // insert reservation data into "tables" table
      db.query("INSERT INTO notes SET ?", [notesData], (err, insertResponse) => {

        if (err) {
          console.log(err);
          return res.status(500).end();
        }
        
        // send back message letting user know if they are on the waiting list or not
        res.json({isWaiting: notesData.isWaiting});
      });
    });
  });

}