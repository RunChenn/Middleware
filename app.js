// app.js
const express = require('express');
const exphbs = require('express-handlebars');
const logRequest = require('./middleware/logRequest');

const app = express();
const port = 3000;

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

app.use(logRequest);

const logs = []

app.get('/', (req, res) => {
    logs.push(res.locals.logs);
    res.render('index', { logs })
})

// app.get('/new', (req, res) => {
//   res.send('新增 Todo 頁面')
// })
 
// app.get('/:id', (req, res) => {
//   res.send('顯示一筆 Todo')
// })

app.post('/', (req, res) => {
 res.render('index')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})