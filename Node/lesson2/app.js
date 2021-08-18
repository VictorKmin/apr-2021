const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');

const { PORT } = require('./config/variables');
const users = require('./db/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', expressHbs({ defaultLayout: false }));
app.set('views', path.join(__dirname, 'static'));


app.get('/ping', (req, res) => {
    res.json('Pong')
});

app.get('/', (req, res) => {
    console.log(req);

    // res.end('<h1>HELLO</h1>')
    // res.send('<h1>HELLO</h1>')
    // res.json({ name: 'Viktr' });
    // res.write('HELLO')
    // res.write('WORLD')
    // res.write('22')
    // res.end()
    res.status(404).end('Not Found');
});
app.get('/login', (req, res) => {
    res.render('login', {isMale: true});
})

app.get('/users', (req, res) => {
    res.render('users', { userName: 'Viktor', users });
});

app.get('/users/:user_id', (req, res) => {
    const { user_id } = req.params;
    console.log(req.query);
    const currentUser = users[user_id];

    if (!currentUser) {
        res.status(404).end('User Not Found');
        return;
    }

    res.json(currentUser);
});

app.post('/auth', (req, res) => {
    console.log(req.body);

    const { name, password } = req.body;
    res.json('LOGIN');
});



app.listen(PORT, () => {
    console.log('App listen', PORT);
});