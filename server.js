var express = require("express"),
    stylus = require("stylus"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

var app = express();

function compile(str, path) {
    return stylus(str).set("filename", path);
}

app.set("views", __dirname + "/server/views");

app.set("view engine", "jade");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(stylus.middleware({
    src: __dirname + "/public",
    compile: compile
}));

app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost/sfnodeclub");
var db = mongoose.connection;

db.on("error", console.error.bind(console, "A connection error has occurred..."));

db.once('open', function cb() {
    console.log("SFNodeClub connection is open now");
});

require('./server/config/routes')(app);

var port = 8090;

app.listen(port);

console.log("Server is listening on port:" + port);