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
  port: 5432,
  database: "nflPlayers",
  ssl: false
});

function errorCallback(res) {
  return function(err) {
    console.log(err);
    res.status(500);
    res.send("ERROR!");
  }
};

app.post('/rankings', function(req, res) {
  var player = req.body;
  var sql = "INSERT INTO players(name, ranking)";
  var values = [player.name, player.ranking];

  pool.query(sql, values).then(function() {
    res.status(201);
    res.send("INSERTED");
  }).catch(errorCallback(res));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('JSON Server is running on ' + port);
});
