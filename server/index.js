require("dotenv").config()
const express = require("express");
const app = express();

const controller = require("./controller")
const {PORT,SECRET_SESSION} = process.env

app.use(express.json());

app.post("/user/login" , controller.login)


app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}`)
})