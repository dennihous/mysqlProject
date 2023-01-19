const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express()
const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "new_password",
  database:"test",
})

app.use(express.json())
app.use(cors())

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
  const values = [
    req.body.title,
    req.body.description,
    req.body.cover,
  ]

  db.query(q, [values], (err, data) => {
    if(err){
      return res.json(err)
    } else {
      return res.json("Book has been created successfully")
    }
  })
})

app.listen(8800, () => {
  console.log("Connected to port 8800")
})