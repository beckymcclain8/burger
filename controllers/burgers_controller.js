var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, false],
    function() {
      res.redirect("/");
    }
  );
});

router.put("/burgers/update", function(req, res) {
  // var condition = "id = " + req.body.id;
  burger.updateOne(req.body.devoured, condition, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
