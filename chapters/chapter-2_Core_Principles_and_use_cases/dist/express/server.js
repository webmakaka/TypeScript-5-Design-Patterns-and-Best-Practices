"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var express_1 = tslib_1.__importDefault(require("express"));
var body_parser_1 = require("body-parser");
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.use((0, body_parser_1.json)());
app.get("/health", function (req, res) {
    res.send("OK!");
});
app.listen(port, function () { return console.log("Server listening on port ".concat(port)); });
