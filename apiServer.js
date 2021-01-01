require('./utils/moduleAlias');
require('db');
const express = require('express');
const path = require('path');
const registryApiRouter = require('routers/index');

const app = express();

app.set('views', path.join(__dirname, 'ejs'));
app.set('view engine', 'ejs'); // view engine setup
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

registryApiRouter(app);

app.get('*', (req, res) => {
  res.status(404).send('Sorry, cant find that');
});

const port = 8888;
app.listen(port, () => {
  console.log(`Your api server is running on port ${port}`);
});
