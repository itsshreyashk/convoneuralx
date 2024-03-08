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
    constructor() { }
    async addUser(data) {
        try {
            const user = new User(data);
            console.log(user);
            await user.save();
            return { status: true, code: 200 };
        } catch (err) {
            console.log(`Sorry! got an error ${err}`);
            return { status: false, code: 500 };
        }
    };
    async removeUser(username, password) {
        try {
            const user = await User.findOneAndDelete({ username: username, password: password }).exec();
            if (user) {
                console.log('User removed successfully:', user);
                return { status: true, message: 'User removed successfully.', code: 200 };
            } else {
                console.log('User not found or password incorrect.');
                return { status: false, message: 'User not found or password incorrect.', code: 404 };
            }
        } catch (err) {
            console.log('Error removing user:', err);
            return { status: false, message: 'Internal Server Error.', code: 500 };
        }
    }

    async Check_User(username, password) {
        try {
            const user = await User.findOne({ username, password }).exec();
            if (user) {
                return { status: true, message: 'Allowed.', code: 200 };
            } else {
                return { status: false, message: 'Password Incorrect.', code: 500 };
            }
        } catch (err) {
            return { status: false, message: 'Internal Server Error.', code: 501 }; // Return false in case of an error
        }
    }
    async User_Exists(username) {
        try {
            const existingUser = await User.findOne({ username });
            return !!existingUser; // Returns true if user exists, false otherwise
        } catch (err) {
            console.log(`Error checking user existence: ${err}`);
            return { status: false, message: err, code: 500 }; // Return false in case of an error
        }
    }
}