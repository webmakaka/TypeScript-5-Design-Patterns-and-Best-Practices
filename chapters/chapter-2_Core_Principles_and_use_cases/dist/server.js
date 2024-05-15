"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var http = tslib_1.__importStar(require("http"));
var shutdownHandler = function () {
    console.log("Received shutdown signal, gracefully exiting...");
    // Perform additional cleaning work here
    process.exit(0); // Indicate successful termination
};
//create a server object:
http
    .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
})
    .listen(8080); //the server object listens on port 8080
// Register shutdown signal listeners (SIGINT, SIGTERM)
process.on("SIGINT", shutdownHandler);
process.on("SIGTERM", shutdownHandler);
