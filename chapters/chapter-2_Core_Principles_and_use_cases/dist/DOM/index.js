"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var p = document.getElementsByClassName("paragraph")[0];
var spanArea = document.createElement("span");
spanArea.textContent = "This is a text we added dynamically";
p === null || p === void 0 ? void 0 : p.appendChild(spanArea);
var actionButton = document.querySelector("button");
actionButton === null || actionButton === void 0 ? void 0 : actionButton.addEventListener("click", function () {
    window.alert("You Clicked the Submit Button");
});
