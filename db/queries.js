const pool = require('./pool'); // database connection

async function getAllMessages() {
    const result = await pool.query("SELECT * FROM messages");
    return result.rows;
}

async function postNewMessage(username, message) {
    await pool.query(
      `INSERT INTO messages (username, message) VALUES ($1, $2)`,
      [username, message]
    );
}

module.exports = {
    getAllMessages,
    postNewMessage,
};
