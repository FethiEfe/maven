require("dotenv").config()
const express = require("express");
const session = require("express-session")
const app = express();

const controller = require("./controller")
var PORT = process.env.PORT || 3001;
const {SECRET_SESSION} = process.env

app.use(express.static('client'));

app.use(express.json());
app.use(session({
    secret : SECRET_SESSION,
    resave: false,
    saveUninitialized : false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.get('/auth/signout', controller.signOut)
app.get("/auth/cookie", controller.getSession)
app.post("/user/login" , controller.login)

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }


app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}`)
})