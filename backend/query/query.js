import db from "../config/db.config.js";

export const getAllUsers = (callback) => {
    const query = `SELECT * FROM users`;
    db.query(query, (err, results) => {
        if (err) {
            return callback(err, null);
        }
        callback(null, results);
    })
}