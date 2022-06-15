var sql = require("../utils/db");

const retrieveManufacturers = (req, res) => {
  sql.query("SELECT * FROM manufacturer", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const countManufacturers = (req, res) => {
  sql.query("SELECT COUNT(id) FROM manufacturer", function (err, result) {
      if (err) throw err;
      res.send(result);
  });
};

const createManufacturer = (req, res) => {
  sql.query(
    "INSERT INTO manufacturer (name, founded, description) VALUES (?,?,?)",
    [
      req.body.name,
      req.body.founded,
      req.body.description
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveManufacturer = (req, res) => {
    sql.query(
    "SELECT * FROM manufacturer WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteManufacturer = (req, res) => {
    sql.query(
    "DELETE FROM manufacturer WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send("Manufacturer " + req.params.id + " successfully deleted");
    }
  );
};

const updateManufacturer = (req, res) => {
  sql.query(
    "UPDATE manufacturer SET name = ?, founded = ?, description = ? WHERE id = ?",
    [
      req.body.name,
      req.body.founded,
      req.body.description,
      req.params.id
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {countManufacturers, retrieveManufacturers, retrieveManufacturer, deleteManufacturer, updateManufacturer, createManufacturer};