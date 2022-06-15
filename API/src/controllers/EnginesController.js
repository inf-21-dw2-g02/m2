var sql = require("../utils/db");

const countEngines = (req, res) => {
    sql.query("SELECT COUNT(id) FROM engine", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

const retrieveEngines = (req, res) => {
  sql.query("SELECT * FROM engine", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createEngine = (req, res) => {
  sql.query(
    "INSERT INTO engine (name, horsepower, brand) values (?,?,?)",
    [req.body.name, req.body.horsepower, req.body.brand],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveEngine = (req, res) => {
  sql.query(
    "SELECT * FROM engine WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteEngine = (req, res) => {
  sql.query(
    "DELETE FROM engine WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send("Engine " + req.params.id + " successfully deleted");
    }
  );
};

const updateEngine = (req, res) => {
  sql.query(
    "UPDATE engine SET name = ?, horsepower = ?, brand = ? WHERE id = ?",
    [req.body.name, req.body.horsepower, req.body.brand, req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {countEngines, retrieveEngines, createEngine, retrieveEngine, updateEngine, deleteEngine};