const express = require("express");
const session = require("express-session")
const app = express();

const controller = require("./controller")
const PORT = 3001
const SECRET_SESSION = "supersecret"

app.use(express.json());
app.use(session({
    secret : SECRET_SESSION,
    resave: false,
    saveUninitialized : false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.get('/auth/cookie', controller.getSession)
app.post("/user/login" , controller.login)





app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}`)
})