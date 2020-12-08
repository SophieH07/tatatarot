const express = require("express");
const app = express();
const cors = require('cors');
const mysql = require("mysql");
const { values } = require("./values.js");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "tatatarotdb",
});

app.use(cors());

db.connect(function (err) {
  if (err) throw err;
  console.log("Successful connection");

  //ONLY ONCE WHEN YOUR DATABASE IS EMPTY, RUN THE COMMENTED PART

  // const sqlInsert = "INSERT INTO cards (name, upward, downward) VALUES ?";
    // const sqlDelete = "DELETE FROM cards"
  // db.query(sqlInsert, [values], (err, result) => {
  //   if (err) throw err;
  //   console.log("Number of records inserted: " + result.affectedRows);
  // });
    // db.query(sqlDelete, (err, res) => {
    //   if (err) throw err;
    //   console.log('delete table');
    // })
  
});

app.get("/cards", (req, res) => {
  const sqlSelect = "SELECT * FROM cards";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.listen("3001", () => {
  console.log("server running on port 3001");
});
