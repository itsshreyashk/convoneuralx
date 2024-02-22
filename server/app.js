const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const { Server } = require('socket.io');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

const app = express();
const server = require('http').createServer(app);
const io = new Server(server);

app.use(cors({
    origin: "http://localhost:3000",
}));

app.get('/', (req, res) => {
    res.send("Greetings, Earthlings! 🌍✌️");
});

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});