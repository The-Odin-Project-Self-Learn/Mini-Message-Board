const express = require("express");
const path = require("node:path");
const app = express();
const messagesController = require('./controllers/messagesController');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//when GET request made to / route, we want to GET all posted messages
app.get("/", messagesController.getAllMessages);

//when GET request made to /new route, we want to GET a form for the new message
app.get("/new", messagesController.getNewMessage);

//when POST request made to /new route, we want to POST the new message to the board
app.use(express.urlencoded({extended: true}));
app.post("/new", messagesController.postNewMessage);

//
app.get("/delete", messagesController.deleteMessage);
app.post("/delete", messagesController.deleteMessage);

app.listen(3000, () => {
    console.log("Server is running on port 3000!");
});

