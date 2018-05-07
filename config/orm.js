//check this...
var connection = require("./connection.js");

var orm = {
// * `selectAll()`
selectAll: function(tableInput, cb) {
  var queryString = "SELECT * FROM " + tableInput + ";";
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
},
// selectAll: function(whatToSelect, tableInput) {
//     var queryString = "SELECT ?? FROM ??";
//     connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   },

// * `insertOne()`
// * `updateOne()

};



module.exports = orm;