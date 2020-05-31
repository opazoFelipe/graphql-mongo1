import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: Number
}, {
    timestamps: true
});

export default model('Users', userSchema);