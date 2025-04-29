const pool = require("./pool.js");

/*
Create table with "id, username, messages" columns
ID is the primary key column, meaning that no two rows can have the same ID
SERIAL auto-increments the ID column (0, 1, 2, ...)
*/
const SQL = `
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    message TEXT NOT NULL
);

INSERT INTO messages (username, message)
VALUES
    ('Mihir', 'Hi database!');
`

async function main() {
    await pool.query(SQL);
    console.log("messages table created and populated!");
}

main();
