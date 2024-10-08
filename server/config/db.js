const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGODB_URI || 'mongodb+srv://thuy46:mypassword@mongo.ycn9h.mongodb.net/todo_app';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');

        const userSchema = new mongoose.Schema({
            username: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        });

        const User = mongoose.model('User', userSchema);
        return User;
        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
    }
};

module.exports = { connectToDatabase };