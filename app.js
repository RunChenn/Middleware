// app.js
const express = require('express');
const exphbs = require('express-handlebars');
const logRequest = require('./middleware/logRequest');
const moment = require('moment');

const app = express();
const port = 3000;

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(logRequest);

const logs = [];

app.get('/', (req, res) => {
    logs.push(res.locals.logs);
    res.render('index', { logs });
});

app.get('/new', (req, res) => {
    logs.push(res.locals.logs);
    res.render('index', { logs });
});
 
app.get('/:id', (req, res) => {
    logs.push(res.locals.logs);
    res.render('index', { logs });
});

app.post('/', (req, res) => {
    logs.push(res.locals.logs);
    res.render('index', { logs });
});

app.post('/download', function (req, res) {
    const file = __dirname + '/request_logs.txt';
    const nowDate = moment().format('YYYY-MM-DD');
    const fileName = `logs_${nowDate}`;
    res.download(file, fileName);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`)
});