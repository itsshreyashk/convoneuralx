// user.model.js
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: String,
    password: String,
    personal: {
        age: Number,
        phone: Number,
    }
});

export default mongoose.model('User', userSchema);
