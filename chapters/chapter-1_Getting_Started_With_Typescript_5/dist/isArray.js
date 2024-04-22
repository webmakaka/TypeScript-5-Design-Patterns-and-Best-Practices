function isArray(arg) {
    // Unknown argument, return narrowed type
    return Array.isArray(arg);
}
const myList = { item1: "apple", item2: "orange" };
console.log(isArray(myList));
export {};
