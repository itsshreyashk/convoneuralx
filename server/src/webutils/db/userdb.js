import mongoose from "mongoose";


mongoose.connect('mongodb://localhost:27017/convoneuralx');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    password: String,
    personal: {
        age: Number,
        email: String,
    }
});
const User = new mongoose.model('Users', userSchema);
export default class User_Manager {
    constructor() {
    }
    async addUser(data) {
        try {
            const User_D = new User(data);
            console.log(User_D);
            await User_D.save();
            return { status: true, code: 200 };
        } catch (err) {
            console.log(`Sorry! got an error ${err}`);
            return { status: false, code: 500 };
        }
    };
    async removeUser(username, password) {
        try {

        } catch (err) {
            console.log("Error");
            return { status: false, code: 500, message: err }
        }
    };
    async User_Exists(username) {
        try {
            const existingUser = await User.findOne({ username });
            return !!existingUser; // Returns true if user exists, false otherwise
        } catch (err) {
            console.log(`Error checking user existence: ${err}`);
            return false; // Return false in case of an error
        }
    }
}