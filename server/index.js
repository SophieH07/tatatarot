const express = require("express");
const app = express();
const mysql = require("mysql");
const { values } = require("./values.js");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "tatatarotdb",
});

db.connect(function (err) {
  if (err) throw err;
  console.log(values);
  console.log("Successful connection");
  const sqlInsert = "INSERT INTO cards (name, upward, downward) VALUES ?";

  db.query(sqlInsert, [values], (err, result) => {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});

app.get("/cards", (req, res) => {
  const sqlSelect = "SELECT * FROM cards";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
  });
});

app.listen("3001", () => {
  console.log("server running on port 3001");
});
