require('dotenv').config();

import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', async (req, res) => {
    res.json({message: 'hello world'});
});


app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}));

app.set('port', process.env.PORT || 2000);

module.exports = app;