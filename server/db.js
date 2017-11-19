var pg = require('pg');
var pool = new pg.Pool({
  database: 'books-dev'
});

pool.connect((err) => {
  if (err) throw err;

  pool.query('SELECT * from books', [], (err, result) => {
    console.log(result.rows);
    if (err) throw err;

    pool.end((err) => {
      if (err) throw err;
    });
  });
});
