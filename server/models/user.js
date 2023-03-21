import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: new Date().toISOString()}
});

const User = mongoose.model( 'User', userSchema );

export default User;