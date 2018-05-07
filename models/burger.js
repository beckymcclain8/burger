
//check this...
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      },
// selectAll("id, burger_name", "burgers");

};

module.exports = burger;