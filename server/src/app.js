//file imports
import Session from './utilities/smanager/session.js';
import User_Manager from './utilities/db/userdb.js';
//modules
import dotenv from 'dotenv';
import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import http from 'http';
dotenv.config(); //dotenv config

const PORT = process.env.PORT || 3001;

const app = express();
const server = http.createServer(app);
const io = new Server(server);


const _Session_Manager_ = new Session();
const _User_Manager_ = new User_Manager();


const get_session_data = async (ssid) => {
    try {
        return _Session_Manager_.getSessionData(ssid);
    } catch (err) {
        console.log(`Error : ${err}`);
        return null;
    }
}
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS;
try {
    (function () {
        app.use(cors({
            origin: ALLOWED_ORIGINS
        }));
        app.use(express.json());
    }())

} catch (err) {
    console.log("Error setting middleware");
}
console.log(typeof (process.env.ALLOWED_ORIGINS));

const test_email = (email) => {
    //testing function

    try {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    } catch (err) {
        console.log(`Error validating Email : ${err}`);
        return err;
    }

}
const check_if_user_exist = async (username) => {
    return await _User_Manager_.User_Exists(username);
}
const validate_usnm_pwd = async (username, password) => {
    return (username.toString() && password.toString()) !== (null || NaN || '');
}
const validate_age = async (age) => {
    return (parseInt(age) <= 0 && parseInt(age) <= 150);
}
app.post('/create/user', async (req, res) => {
    const username = req.body.username.toString();
    const password = req.body.password.toString();
    const age = parseInt(req.body.age);
    const email = req.body.email.toString();
    const phone = req.body.phone.toString();

    if (await validate_usnm_pwd(username, password)) {
        if (test_email(email)) {
            if (await validate_age(age)) {
                res.status(500).json({
                    message: 'Age is invalid.'
                });
            } else {
                if (await check_if_user_exist(username)) {
                    res.status(409).json({
                        message: 'User already exists.'
                    });
                } else {
                    //Good to Go.
                    const Create_User = await _User_Manager_.addUser({
                        username: username, password: password, personal: {
                            age: age,
                            email: email,
                            phone: phone,
                        }
                    }); // Creating User.
                    console.log('Added User.');
                    if (Create_User.status === true) {
                        //User successfully created now return a session key.
                        try {
                            const Add_Session = await _Session_Manager_.addSession(username, password);
                            if (Add_Session.success === true) {
                                const Session_Key_Obtained = await Add_Session.ssid.toString();
                                res.status(200).json({
                                    status: 200,
                                    proceed: true,
                                    ssid: Session_Key_Obtained
                                });
                                console.log('Session added.');
                            } else {
                                res.status(500).json({
                                    status: 500,
                                    message: 'Internal Server Error.'
                                })
                                console.log('Session not added.');
                            }
                        } catch (err) {
                            console.log(err);
                            res.status(500).json({
                                status: 500,
                                message: 'Internal Server Error.'
                            })
                        }

                    } else {
                        console.log('Error validating User .status problem.');
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
app.post('/authorize/user', async (req, res, next) => {
    const username = req.body.username.toString(); //username [secured]
    const password = req.body.password.toString(); //password [secured]
    if (await validate_usnm_pwd(username, password)) {
        const Check_User = await _User_Manager_.Check_User(username, password);
        if (Check_User.status === true) {
            //Generating Session Key.
            const key = ((await _Session_Manager_.addSession(username, password)).ssid).toString();
            if (key) {
                (function (Check_User) {
                    res.status(200).json({
                        status: 200,
                        key: key,
                        allow: "YES",
                        message: Check_User.message,
                    });
                }(Check_User))

            } else {
                (function () {
                    res.status(500).json({
                        status: 500,
                        allow: "NO",
                        message: 'Internal Server Error',
                    });
                }())
            }

        } else {
            (function (Check_User) {
                res.status(500).json({
                    status: 500,
                    allow: "NO",
                    message: Check_User.message,
                });
            }(Check_User))
        }
    }
})
app.get('/health', async (req, res) => {
    try {
        console.log("Health Checkup.")
        res.status(200).json({
            health: 'GOOD'
        });
    } catch (err) {
        console.log(err);
        res.status(200).json({
            health: 'BAD',
            error: err,
        })
    }

});
app.get('/users/:username', async (req, res, next) => {
    const username = req.params.username.toString();
    try {
        const userData = await _User_Manager_.getUserData(username);
        if (userData) {
            res.status(200).json({
                username: userData.username,
                age: userData.personal.age,
                email: userData.personal.email,
            })
        } else {
            res.status(500).json({
                status: 500,
                message: "User not found",
            })
        }
    } catch (e) {
        res.status(500).json({
            status : 500,
            message : "Internal Server Error",
        })
    }
});
app.post('/create/model', async (req, res) => {
    const body = req.body;
    const props = body.props;
    res.send('OK');
})
server.listen(PORT, () => {
    console.log(`Listening on http://localhost${PORT}`);
});