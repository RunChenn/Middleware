// app.js
const express = require('express');
const exphbs = require('express-handlebars');
const moment = require('moment');
const app = express();
const port = 3000;

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');

let demoLogger = (req, res, next) => {
    console.log("Hello from logger");
    next();
};

app.use(demoLogger);

app.get('/', (req, res) => {
//   res.send('列出全部 Todo');
  res.render('index')
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