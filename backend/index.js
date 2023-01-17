import express from "express"
import mysql from "mysql"

const app = express()
const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"test"
})

app.get("/", (req, res) => {
  res.json("This is the backend")
})

app.listen(8800, () => {
  console.log("Connected to port 8800")
})