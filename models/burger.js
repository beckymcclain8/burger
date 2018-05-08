
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      },

      insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, cb);
        //   orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
            
        },

};

module.exports = burger;