import userModel from "./user.model.js";
import mongoose from 'mongoose';

export class Sign_Up_Manager {
    constructor() {
        this.User = userModel;
    }
    async addUser(data) {
        try {
            const newUser = new this.User(data);
            await newUser.save();
            return { status: true, code: 200 };
        } catch (err) {
            console.log(`Sorry! got an error ${err}`);
            return { status: false, code: 500 };
        }
    };
    async removeUser(username, password) {

    };
}
export class Check_User {
    constructor() {
        mongoose.connect('mongodb://localhost:27017/convoneuralx');
        const Schema = mongoose.Schema;
        const userSchema = new Schema({
            username: String,
        });
        this.User = mongoose.model('User', userSchema);
    }
    async User_Exists(username) {
        try {
            const existingUser = await this.User.findOne({ username });
            return existingUser !== (null || '' || NaN);
        } catch (err) {
            console.log(`Error checking user existence: ${err}`);
            return false;
        }
    }
}