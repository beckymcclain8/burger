var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, cb);
  },

  updateOne: function(condition, cb) {
    // var condition = "id=" + id;
    orm.updateOne("burgers", {devoured: true}, condition, cb);
  
  }
};

module.exports = burger;
