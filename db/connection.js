const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: '1234',
    database: 'employee_tracker'
});

db.connect(function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Connected to Database');
    }
})

module.exports = db;