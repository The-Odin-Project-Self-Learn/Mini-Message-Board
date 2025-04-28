const pool = require('./pool'); //database connection

//returns a Promise object that either resolves to result.rows or rejects with an error
async function getAllMessages() {
    const result = await pool.query("SELECT * FROM messages");
    return result.rows;
}

async function postNewMessage(username, message) {
    await pool.query(`INSERT INTO messages (username, message) (${username}, ${message})`);
}

module.exports = {
    getAllMessages,
    postNewMessage,
};
