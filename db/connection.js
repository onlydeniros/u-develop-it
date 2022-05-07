const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Djfox1234!',
        database: 'candidates'
    },
    console.log('Connected to the candidates database.')
);

module.exports = db;