var sql = require("../utils/db");

const countOwners = (req, res) => {
    sql.query("SELECT COUNT(id) FROM owner", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

const retrieveOwners = (req, res) => {
  sql.query("SELECT * FROM owner", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createOwner = (req, res) => {
  sql.query(
    "INSERT INTO owner (name, age, sex) VALUES (?,?,?)",
    [
      req.body.name,
      req.body.age,
      req.body.sex
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveOwner = (req, res) => {
    sql.query(
    "SELECT * FROM owner WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteOwner = (req, res) => {
    sql.query(
    "DELETE FROM owner WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send("Owner " + req.params.id + " successfully deleted");
    }
  );
};

const updateOwner = (req, res) => {
  sql.query(
    "UPDATE owner SET name = ?, age = ?, sex = ? WHERE id = ?",
    [
      req.body.name,
      req.body.age,
      req.body.sex,
      req.params.id
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {countOwners, retrieveOwners, retrieveOwner, deleteOwner, updateOwner, createOwner};