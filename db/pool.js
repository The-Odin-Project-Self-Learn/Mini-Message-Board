const {Pool} = require('pg');
require('dotenv').config(); //loads the dotenv library, then config() reads the .env file and loads all variables into process.env

const db_url = process.env.DATABASE_URL;
if (!db_url) {
    console.log("invalid or missing database URL");
    process.exit(1);
}

const pool = new Pool(
    {
        connectionString: db_url,
        ssl: {rejectUnauthorized: false},
    }
);
console.log("database connections established");

module.exports = pool;
