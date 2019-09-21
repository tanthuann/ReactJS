import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 9,
        max: 100
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 100
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 10
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema, 'users');
export default User;