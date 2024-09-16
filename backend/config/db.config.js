import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'university'
})

db.connect((err) => {
    if (err) {
        console.log(`Error in connecting DB ${err.stack}`)
        return
    }
    console.log(`Connected to MySQL Database.`)
})

export default db;