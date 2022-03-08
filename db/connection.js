const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username
        user: 'root',
        //============ADD PASSWORD FOR CONNECTION TO ELECTION DATABASE=============================
        password: 'MyNewPass',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;