var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// router.get("/", function(req, res) {
//   res.redirect("/burgers");
// });

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name,
    false
  ], function() {
    res.redirect("/");
    // res.json({id});
  });
});









// router.get("/", function(req, res) {
//   burger.selectAll(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/api/burgers", function(req, res) {
//   burger.insertOne([
//     "burger_name"
//   ], [
//     req.body.burger_name
//   ], function(result) {
//     // Send back the ID of the new quote
//     console.log("req.body.burger_name: " + req.body.burger_name);
//     res.json({ id: result.insertId });
//   });
// });

router.post("/burgers/create", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function() {
    console.log(result);
    res.redirect("/burgers");
  })
})

  module.exports = router;

