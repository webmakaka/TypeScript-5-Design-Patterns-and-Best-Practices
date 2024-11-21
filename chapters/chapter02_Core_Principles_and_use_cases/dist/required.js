"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayPublicProfile(profile) {
    console.log("Name: ".concat(profile.name, ", Email: ").concat(profile.email));
}
var incompleteProfile = { name: "John Doe" };
// Compilation error: email is missing
// const completeProfile: CompleteUserProfile = { name: "Jane Doe", email: "jane.doe@example.com" }
// displayPublicProfile(completeProfile)
