var sql = require("../utils/db");

const retrieveCarsOnManufacturer = (req, res) => {
  sql.query("SELECT * FROM car WHERE manufacturerId = ?", [req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

module.exports = {retrieveCarsOnManufacturer};