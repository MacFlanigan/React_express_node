const pg = require('pg');
const client = new pg.Pool({
  database: 'books-dev'
});

client.connect();

client.query('SELECT * from books', [], (err, res) => {
  console.log(err ? err.stack : res.rows); // Hello World!
  client.end();
});
