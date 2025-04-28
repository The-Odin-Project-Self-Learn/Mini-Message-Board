const db = require('./queries');

//get all messages from DB
async function getAllMessages(req, res) {
    try {
        const messages = await db.getAllMessages();
        res.render("index", {messages: messages});
    } catch (err) {
        console.error("Error loading messages: ", err);
        res.status(500).send("Server Error");
    }
}

//load new message form
function getNewMessage(req, res) {
    res.render("form");
}

//post new message to DB
async function postNewMessage(req, res) {
    try {
        const message = req.body.message;
        const username = req.body.username;
        await db.postNewMessage(username, message);
        console.log("message posted!");
        res.redirect("/");
    } catch (err) {
        console.log("Error posting message: ", err);
        res.status(500).send("Server Error");
    }
}

module.exports = {
    getAllMessages,
    getNewMessage,
    postNewMessage,
};
