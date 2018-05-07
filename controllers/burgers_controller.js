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

  // router.get("/", function(req, res) {
  //   connection.query("SELECT * FROM burgers;", function(err, data) {
  //     if (err) {
  //       return res.status(500).end();
  //     }
  //     res.render("index", { burgers: data });
  //   });
  // });

  module.exports = router;

  //haven't updated this yet....
//   app.post("/burgers", function(req, res) {
//     connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], function(err, result) {
//       if (err) {
//         return res.status(500).end();
//       }
  
//       // Send back the ID of the new todo
//       res.json({ id: result.insertId });
//       console.log({ id: result.insertId });
//     });
//   });
