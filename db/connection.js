const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Djfox1234!',
        database: 'election'
    }
);

module.exports = db;