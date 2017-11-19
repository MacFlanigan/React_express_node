
const pg = require('pg');
const pool = new pg.Pool({
  user:'postgres',
  database: 'books-dev'
});

const express = require('express');
const router = express.Router();

router.get('/books', (req, res) => {
  pool.query('SELECT * from books', [], (err, result) => {
    res.send(result.rows);
  });
});

router.get('/books/:bookId/ratings', (req, res) => {
  pool.query('SELECT * FROM reviews WHERE book_id = $1', [req.params.bookId], function (err, result) {
    //console.log(err ? err.stack : resust.rows);
    res.send(result.rows);
    //res.send();
  });
});

export default router;
