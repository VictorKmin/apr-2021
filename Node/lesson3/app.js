const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const {PORT} = require('./config/variables');
const users = require('./db/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {authRouter, userRouter} = require('./routes');

app.get('/ping', (req, res) => res.json('Pong'));

app.use('/auth', authRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log('App listen', PORT);
});


// BAD !!
app.put('/updateUser/:user_id')
app.post('/insertUser/:user_id')
app.get('/user/single/:user_id')
app.get('/user/all')