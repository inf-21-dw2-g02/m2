var sql = require("../utils/db");

const retrieveCarsOnOwner = (req, res) => {
  sql.query("SELECT * FROM car WHERE ownerId = ?", [req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

module.exports = {retrieveCarsOnOwner};