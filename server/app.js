//file imports
import Session from './webutils/smanager/session.js';
import { Sign_Up_Manager, Check_User } from './webutils/db/userdb.js';
//modules
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

const _Test_Email = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const _Session_ = new Session();
const _Sign_Up_Manager_ = new Sign_Up_Manager();
const _Check_User_ = new Check_User();

app.use(cors({
    origin: process.env.ALLOWED_ORIGINS.split(','),
}));
app.post('/create', async (req, res) => {
    const body = req.body;

    const username = body.username;
    const password = body.password;
    const age = body.age;
    const email = body.email;

    if ((username && password && age && email) !== (null || NaN || '')) {
        if (_Test_Email(email)) {
            if (age <= 0) {
                res.status(500).json({
                    message: 'Age is invalid.'
                });
            } else {
                //Checking is user already exists.
                if (await _Check_User_.User_Exists(username)) {
                    //User exists.
                    res.status(409).json({
                        message: 'User already exists.'
                    });
                } else {
                    //Good to Go.
                    const Create_User = await _Sign_Up_Manager_.addUser({
                        username: username, password: password, personal: {
                            age: age,
                            email: email,
                        }
                    }); //Finally Creating User.
                    if (Check_User.status === true) {
                        //User successfully created.

                    } else {
                        res.status(500).json({
                            message: 'Internal Server Error.'
                        }); 
                    }
                }

            }
        } else {
            res.status(500).json({
                message: 'Email is invalid.'
            });
        }
    } else {
        res.status(500).json({
            message: 'Cannot accept empty values.'
        });
    }
});
app.get('/health', async (req, res) => {
    res.status(200).json({
        health: 'GOOD'
    });
});
server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});