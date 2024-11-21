"use strict";
// const colors = {
//   red: "#FF0000",
//   green: "#00FF00",
//   blue: "#0000FF",
// }
Object.defineProperty(exports, "__esModule", { value: true });
// function getColor(color: "red" | "green" | "blue") {
//   return colors[color] // Error: Element implicitly has an 'any' type because expression of type '"red" | "green" | "blue"' can't be used to index type '{ red: string; green: string; blue: string; }'.
// }
const colors = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
};
function getColor(color) {
    return colors[color]; // No error, and colors[color] is inferred as string
}
getColor("blue");
