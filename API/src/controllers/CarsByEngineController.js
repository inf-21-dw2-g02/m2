var sql = require("../utils/db");

const retrieveCarsOnEngine = (req, res) => {
  sql.query("SELECT * FROM car WHERE engineId = ?", [req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

module.exports = {retrieveCarsOnEngine};