import Session from './webutils/smanager/session.js';
import dotenv from 'dotenv';
import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import http from 'http';
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS.split(','),
}));
app.post('/create', (req, res) => {
    const body = req.body;

    const username = body.username;
    const password = body.password;
    const age = body.age;
    const email = body.email;

    if ((username && password && age && email) !== (null || NaN || '')) {

    } else {
        res.status(500).json({
            message: 'Cannot accept null values.'
        })
    }
});
app.get('/health', (req, res) => {
    res.status(200).json({
        health: 'GOOD'
    });
});
server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});