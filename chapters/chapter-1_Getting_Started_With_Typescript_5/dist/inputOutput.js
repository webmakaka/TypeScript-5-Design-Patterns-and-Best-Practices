"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stdin = process.stdin, stdout = process.stdout;
stdin.resume();
stdin.setEncoding("utf8");
var input = [];
stdin.on("data", function (data) {
    input.push(data.toString());
});
stdin.on("end", function () {
    stdout.write(input.join(""));
});
stdin.on("close", function () {
    process.exit(0);
});
