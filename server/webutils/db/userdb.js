import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    password: String,
    personal: {
        age: Number,
        phone: Number,
    }
});
const User = new mongoose.model('User', userSchema);
export default class Sign_Up_Manager {
    constructor() {
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