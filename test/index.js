/// <reference path="../typings/main/ambient/node/index.d.ts" />
/// <reference path="../typings/main/ambient/express/index.d.ts" />
/// <reference path="./../index.ts" />
"use strict";
const express = require("express");
const es = require("./../index");
/*app.get('/', function(req, res) {
    res.send('Hello World!');
});*/
var app = express();
// var defaults = new Map();
// defaults.set("controller", "Home");
// defaults.set("action", null);
// defaults.set("id", null);
var router = es.router;
router.load(__dirname + "/config.json");
// router.add("Default", "/{controller}/{action}", __dirname + "/Controller", defaults, false);
app.use(es.handler);
app.listen(3000, function () {
    // console.log('Example app listening on port 3000!');
});
