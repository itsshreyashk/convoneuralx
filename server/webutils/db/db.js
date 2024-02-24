const mongoose = require('mongoose');
export default class UserDB {
    constructor() {
        mongoose.connect('mongodb://localhost:27017/convoneuralx');
        const Schema = mongoose.Schema;
        const userSchema = new Schema({
            username: String,
            password: String,
            personal: {
                age: Number,
                gender: String,
                phone: Number,
            }
        });
        this.User = mongoose.model('User', userSchema);
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