var express = require("express");
var bodyParser = require("body-parser");
var connection = require("./config/connection.js"); 
var exphbs = require("express-handlebars");
var app = express();
var mysql = require("mysql");
var path = require("path");

var PORT = process.env.PORT || 8080;

// app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);
// app.use("/update", routes);
// app.use("/create", routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});