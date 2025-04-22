const express = require("express");
const path = require("node:path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

//when GET request made to / route, we want to GET all posted messages
app.get("/", (req, res) => {
    res.render("index", {messages: messages});
});

//when GET request made to /new route, we want to GET a form for the new message
app.get("/new", (req, res) => {
    res.render("form");
});

//when POST request made to /new route, we want to POST the new message to the board
app.use(express.urlencoded({extended: true}));
app.post("/new", (req, res) => {
    const messageText = req.body.message;
    const username = req.body.username;
    const date = new Date();
    messages.push({text: messageText, user: username, added: date});
    res.redirect("/"); //redirect user to the homepage after message submitted
});

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});
