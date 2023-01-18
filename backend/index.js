const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const app = express()
const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: process.env.PASSWORD,
  database:"test",
})

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY process.env.PASSWORD  

app.get("/", (req, res) => {
  res.json("This is the backend")
})

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books"
  db.query(q, (err, data) => {
    if(err){
      return res.json(err)
    } else {
      return res.json(data)
    }
  })
})

app.post("/books", (req, res) => {
  const q = "INSERT INTO books (`title`, `description`, `cover`) VALUES (?)"
  const values = ["title from backend", "description from backend", "cover from backend"]

})

app.listen(8800, () => {
  console.log("Connected to port 8800")
})