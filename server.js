var express = require("express");
var bodyParser = require("body-parser");
var connection = require("./config/connection.js"); 
var exphbs = require("express-handlebars");
var app = express();
var mysql = require("mysql");
var path = require("path");
var sequelize = require("sequelize");

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});