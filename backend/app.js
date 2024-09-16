import express from "express";
import { getAllUsers } from "./query/query.js";
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send("Node-JS and MySQL server ready.")
})

app.get('/users', (req, res) => {
    getAllUsers((err, users) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(users);
    })
})

app.listen(5000, () => {
    console.log(`Server listening on port http://localhost:5000`);
})