var sql = require("../utils/db");

const countCars = (req, res) => {
    sql.query("SELECT COUNT(id) FROM car", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

const retrieveCars = (req, res) => {
  sql.query("SELECT * FROM car", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createCar = (req, res) => {
  sql.query(
    "INSERT INTO car (name, description, color, engineId, manufacturerId, ownerId) VALUES (?,?,?,?,?,?)",
    [
      req.body.name,
      req.body.description,
      req.body.color,
      req.body.engineId,
      req.body.manufacturerId,
      req.body.ownerId,
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveCar = (req, res) => {
    sql.query(
    "SELECT * FROM car WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteCar = (req, res) => {
    sql.query(
    "DELETE FROM car WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send("Car " + req.params.id + " successfully deleted");
    }
  );
};

const updateCar = (req, res) => {
  sql.query(
    "UPDATE car SET name = ?, description = ?, color = ?, engineId = ?, manufacturerId = ?, ownerId = ? WHERE id = ?",
    [
      req.body.name,
      req.body.description,
      req.body.color,
      req.body.engineId,
      req.body.manufacturerId,
      req.body.ownerId,
      req.params.id,
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {countCars, retrieveCars, createCar, retrieveCar, updateCar, deleteCar};