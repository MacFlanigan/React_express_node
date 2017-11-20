
// SANS express
// const http = require("http");
// const fs = require("fs");
// const server = http.createServer();
// server.on('request', (req, res) => {
//   res.end(fs.readFileSync(__dirname + "/../client/index.html"));
// });
// server.listen(8080);

const express = require ("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.static("client"));
app.set('view engine', 'ejs');

import serverRender from './render';
import apiRouter from './apiRouter';

app.get('/', (req, res) => {
  serverRender().then(renderData =>
    res.render('index', {
      markup: renderData.markup,
      initialData: renderData.data
    })
  );
});

app.use('/api', apiRouter);

app.listen(8080, () => {
  console.log("started on port 8080");
});
