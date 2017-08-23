const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

var pool = new pg.Pool({
  user: "postgres",
  password: 'EBriolat1.',
  host: "localhost",
  port: 5433,
  database: "postgres",
  ssl: false
});

function errorCallback(res) {
  return function(err) {
    console.log(err);
    res.status(500);
    res.send("ERROR!");
  }
};

app.get('/rankings', function(req, res) {
  pool.query('SELECT * from rankings').then(function(result) {
    res.send(result.rows);
  });
});

app.post('/rankings', function(req, res) {
  var player = req.body;
  var sql = "INSERT INTO rankings(name, ranking)" + "VALUES ($1::text, $2::int)";
  var values = [player.name, player.ranking];

  pool.query(sql, values).then(function() {
    res.status(201);
    res.send("INSERTED");
  }).catch(errorCallback(res));
});

app.delete('/rankings/:id', function(req, res) {
  var id = req.params.id;
  pool.query("DELETE FROM rankings WHERE id = $1::int", [id]).then(function(result) {
    res.send("DELETED");
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('JSON Server is running on ' + port);
});
