
const pg = require('pg');
const pool = new pg.Pool({
  user:'imsbmqvqtstyrk',
  password: 'a38f1682eab47bc4a1366b32d67bfdf7d97e66332ea4faac419f170bc51ae269',
  host: 'ec2-107-20-226-93.compute-1.amazonaws.com',
  database: 'dfr6nb7590rrud',
  ssl:true
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
    console.log(err);
    res.send(result.rows);
    //res.send();
  });
});

export default router;
