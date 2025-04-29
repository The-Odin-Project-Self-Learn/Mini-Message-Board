const db = require('../db/queries');

//get all messages from DB
async function getAllMessages(req, res) {
    try {
        const rows = await db.getAllMessages();
        res.render("index", {rows: rows});
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

async function deleteMessage(req, res) {
    try {
        if (req.body) {
            const messageID = req.body.id;
            await db.deleteMessage(messageID);
            console.log("Message deleted!");
            res.redirect("/"); 
        } else {
            await db.deleteAllMessages();
            console.log("All messages deleted!");
            res.redirect("/");
        }
    } catch (err) {
        console.log("Error deleting message: ", err);
        res.status(500).send("Server Error");
    }
}

module.exports = {
    getAllMessages,
    getNewMessage,
    postNewMessage,
    deleteMessage,
};
