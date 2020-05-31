import mongoose, { mongo } from 'mongoose';

const DB_URI = process.env.DATABASE_URI || 'mongodb://localhost/testgraphql';

export function connect() {
    mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(db => {
        console.log('Mongodb is connected');
    })
    .catch(err => {
        console.warn(err);
    });
}

