"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = {
    ctx: { color: "red" },
    data: {},
};
if (t.ctx) {
    t.ctx.color = "blue";
}
function testNoInfer(noInferArgs, args) {
    return args.includes(noInferArgs);
}
testNoInfer("somewhre", ["lets", "go"]);
testNoInfer("people", ["people", "help"]);
function find(heyStack, needle) {
    return heyStack.indexOf(needle);
}
// Argument of type '"d"' is not assignable to parameter of type '"a" | "b" | "c"'
console.log(find(["a", "b", "c"], "d"));
